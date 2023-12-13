import React, {Component} from 'react';



const ProductContext = React.createContext();
// Provider
// Consumer



class ProductProvider extends Component {

 	state={
 		productsAPI: [],
 		sortedProducts: [],
 		featuredProducts: [],
 		detailProductAPI: [],
 		modalOpenAPI: false,
 		modalProductOpen: false,
 		modalProductAPI: [],
 		cartAPI: [],
 		ordersAPI: [],
 		cartSubTotal: 0,
 		cartTax: 0,
 		cartTotal: 0,
 		adress: [],
 		allUsers: [],
 		allOrders: [],
 		userId: null,
    	token: null,
    	role: null,
    	userToDelete: null,
    	orderAdmin: null,
    	statusToChange: null,   	
    	company: 'All',
    	inCart: false,
    	featured: false,
 	};



	componentDidMount() {
		this.fetchProducts();
	}
	
	

	user = (userId) => {
    	this.setState({ userId: userId});
	};

	login = (token) => {
	    this.setState({ token: token});
	};

	logout = () => {
	    this.setState({ token: null, userId: null, role: null});
	};

	setCart = (cartAPI) => {
    	this.setState({ cartAPI: cartAPI});
  	};

  	setRole = (role) => {
	    this.setState({ role: role});
	};


	fetchProducts = () => {
	    fetch('https://shop-mobile-backend.onrender.com/product', {
	      method: 'get',
	      headers: {'Content-Type': 'application/json'}
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	        const products = resData.products;
	        this.setState({ productsAPI: products});
	        this.setState({ sortedProducts: products});
	        this.carouselProducts();
	        this.userCartAPI();        
	    })
	    .catch(err => {
	        console.log(err);
	    });
  	}

  	carouselProducts = () => {
  		let {productsAPI} = this.state
	    let tempProducts = [...productsAPI]
	    // transform value
		tempProducts = tempProducts.filter(product => product.featured === true)
	    // change state
	    this.setState({featuredProducts:tempProducts})
	}

	getItemAPI = (_id) => {
			const productBack = this.state.productsAPI.find(product => product._id === _id);
			return productBack;
			// z products(tempProducts) vyberie product so zvolenym id
			// product je tu definovany, pouziva sa napriec app
	}

	handleDetailAPI = (_id) => {
		const product = this.getItemAPI(_id);
		this.setState(() => {
			return {detailProductAPI: product}
		})
		// zobrazi detail produktu, ktory sme vytiahli z getItem
		// product je zaroven detailProduct
	} 	

	addToCartAPI = (_id) => {
		let tempProductsAPI = [...this.state.productsAPI];
		const index = tempProductsAPI.indexOf(this.getItemAPI(_id));
		const productBack = tempProductsAPI[index];
		productBack.inCart = true;
		productBack.count = 1;
		const price = productBack.price;
		productBack.total = price;
		this.setState (
			() => {
				return { productsAPI: tempProductsAPI, cartAPI: [ ...this.state.cartAPI, productBack] };}, 
				() => {this.addTotalsAPI(); this.cartUser();}
			);
		// vlozi product do kosika a zmeni jeho parametre, zaroven product su tempProducts, v ktorom je zmena z kosika zaznamenana
		// cart je KOSIK, vsetky premenne produktu, ktore sa zobrazuju v cart
	}; 	

	userCartAPI = () => {
		let cartAPI = this.state.cartAPI;
		let productsAPI = this.state.productsAPI;		
		Array.prototype.push.apply(productsAPI, cartAPI)
		//prida Cart z API do Products
		const result = Object.values(productsAPI.reduce((r,o) => {
      		r[o._id] = o;
      	return r;
    		},{}));
		this.setState (
			() => {
				return { productsAPI: result, sortedProducts: result}}, 
				() => {this.addTotalsAPI()}
		);
		 // odstrani duplikaty, ponecha cart z API
	}; 	

  	cartUser = () => {   
	    let params = this.state.userId;
	    const cart = [...this.state.cartAPI];
	 	
	    const url = 'https://shop-mobile-backend.onrender.com/user/cart/' + params;
	    fetch(url, {
	      method: 'put',
	      headers: {
	         'Content-Type': 'application/json',
	          Authorization: 'Bearer ' + this.state.token},
	      body: JSON.stringify({
	            'cart': cart}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {	    	
	    })
	    .catch(err => {
	        console.log(err);
	    });       
  	}; 

  	createOrderAPI = () => {
	    const params = this.state.userId;
	    const orders = this.state.cartAPI;
	    const total = this.state.cartTotal;
	    const subtotal = this.state.cartSubTotal;
	    const tax = this.state.cartTax;
	   	const date = new Date().toISOString().slice(0, 10);   
	    const url = 'https://shop-mobile-backend.onrender.com/orders/' + params;
	    fetch(url, {
	      method: 'post',
	      headers: {
	         'Content-Type': 'application/json',
	          Authorization: 'Bearer ' + this.state.token},
	      body: JSON.stringify({
	            'orders': orders,
	            'tax': tax,
	            'subtotal': subtotal,
	            'total': total,            
	         	'date': date}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.setState({ cartAPI: []});
	    	this.fetchProducts();
	    	this.cartUser();
	    	this.allOrdersAPI();
	    })
	    .catch(err => {
	        console.log(err);
	    });       
	  }; 

  	showAdress = () => {	
		let params = this.state.userId;
		let url = 'https://shop-mobile-backend.onrender.com/user/' + params;
		fetch(url, {
      	method: 'get',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	 }
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	const adress = resData.user
	    	this.setState({adress: adress});
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	deleteUser = () => {		
		let params = this.state.userId;
		let url = 'https://shop-mobile-backend.onrender.com/user/' + params;
		fetch(url, {
      	method: 'delete',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	}
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {	        
	        this.logout();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	allOrdersAPI = () => {   
		let params = this.state.userId;
		let url = 'https://shop-mobile-backend.onrender.com/orders/' + params;
		fetch(url, {
      	method: 'get',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	 }
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.setState({ordersAPI: resData.orders})
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	adminUsers = () => {	
		fetch('https://shop-mobile-backend.onrender.com/user/admin', {
      	method: 'get',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	 }
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.setState({allUsers: resData.users});
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	getUserAdmin = (_id) => {
			const user = this.state.allUsers.find(user => user._id === _id);
			this.setState(() => {
			return {userToDelete: user._id}
		}, () => {
			this.adminDeleteUser(_id);
		})
	}

	adminDeleteUser = (_id) => {   
		let params = this.state.userToDelete;
		let url = 'https://shop-mobile-backend.onrender.com/user/admin/' + params;
		fetch(url, {
      	method: 'delete',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	 }
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.setState(prevState => {
	          const updatedUsers = prevState.allUsers.filter(user => {
	            return user._id !== _id;
	          });
	          return { allUsers: updatedUsers};
        	});
        	this.adminOrders();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	adminOrders = () => {   
		fetch('https://shop-mobile-backend.onrender.com/orders/admin', {
      	method: 'get',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	 }
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.setState({allOrders: resData.orders})
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	getOrderAdmin = (_id) => {
		const order = this.state.allOrders.find(order => order._id === _id);
		return order;
	}

	handleAdminOrder = (_id) => {
		const product = this.getOrderAdmin(_id);
		this.setState(() => {
			return {orderAdmin: product._id}
		})
	} 	

	adminDeleteOrder = (_id) => {   
		let params = this.state.orderAdmin;
		let url = 'https://shop-mobile-backend.onrender.com/orders/admin/' + params;
		fetch(url, {
      	method: 'delete',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.state.token
      	 }
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.setState(prevState => {
	          const updatedOrders = prevState.allOrders.filter(order => {
	            return order._id !== _id;
	          });
	          return { allOrders: updatedOrders};
        	});
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	openModalProduct = (_id) => {
		const productBack = this.getItemAPI(_id);
		this.state.token && (
			this.setState (() => {
				return {modalProductAPI: productBack, modalProductOpen:true} 
			})		
		)
	}

	closeModalProduct = () => {
		this.setState (() => {
			return {modalProductOpen: false}
		})
	}

	sortByDateOrders = () => {
  		const desc = [...this.state.ordersAPI]
	    desc.sort((a, b) => (new Date(b.date) - new Date(a.date)))
	    this.setState (() => {
			return {ordersAPI: desc}
		})
	}

	sortByDateAdminOrders = () => {
  		const desc = [...this.state.allOrders]
	    desc.sort((a, b) => (new Date(b.date) - new Date(a.date)))
	    this.setState (() => {
			return {allOrders: desc}
		})
	}

	sortByPriceAsc = () => {
		const asc = [...this.state.productsAPI]
	    asc.sort((a, b) => (a.price - b.price))
	    this.setState (() => {
			return {productsAPI: asc}
		})
  	}

  	sortByPriceDesc = () => {
  		const desc = [...this.state.productsAPI]
	    desc.sort((a, b) => (b.price - a.price))
	    this.setState (() => {
			return {productsAPI: desc}
		})
	}

	handleChange = event => {
	    const target = event.target
	    const value = target.type === 'checkbox' ? target.checked : target.value
	    const name = event.target.name
	    this.setState({[name]:value},
	    	() => {
				this.filterProducts()
	    	}
	    )
	}

  	filterProducts = () => {
  		let {sortedProducts, company, inCart, featured} = this.state
	    let tempProducts = [...sortedProducts]
	    // transform value
	    
	    if(company !== 'All'){
	      tempProducts = tempProducts.filter(product => product.company === company)
	    }
		if(inCart){
			tempProducts = tempProducts.filter(product => product.inCart === true)
		}
		if(featured){
			tempProducts = tempProducts.filter(product => product.featured === true)
		}
	    // change state
	    this.setState({productsAPI:tempProducts})
	}

	setID1 = () => {
	    const product = this.state.productsAPI[6];
	    this.setState({detailProductAPI: product});
	}

	setID2 = () => {
	    const product = this.state.productsAPI[5];
	    this.setState({detailProductAPI: product});
	}

	setID3 = () => {
	    const product = this.state.productsAPI[11];
	    this.setState({detailProductAPI: product});
	}

	setID4 = () => {
	    const product = this.state.productsAPI[12];
	    this.setState({detailProductAPI: product});
	}

	openModalAPI = (_id) => {
		const productBack = this.getItemAPI(_id);
		this.setState (() => {
			return {modalProductAPI: productBack, modalOpenAPI:true} 
		})
		// openModal a modalProduct bude product na zahlade id, modalOpen bude true 
	}

	closeModalAPI = () => {
		this.setState (() => {
			return {modalOpenAPI: false}
		})
	}

	incrementAPI = (_id) => {
		let tempCart = [...this.state.cartAPI];
		const selectedProduct = tempCart.find(item =>item._id ===_id)

		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];

		product.count = product.count + 1;
		product.total = product.count * product.price;

		this.setState(() => {
			return {cartAPI: [...tempCart]}
		}, () => {
			this.addTotalsAPI(); this.cartUser();
		})
	}

	decrementAPI = (_id) => {
		let tempCart = [...this.state.cartAPI];
		const selectedProduct = tempCart.find(item =>item._id ===_id)

		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];

		product.count = product.count - 1;

		if(product.count === 0) {
			this.removeItemAPI(_id)
		}else {
			product.total = product.count * product.price;

			this.setState(() => {
				return {cartAPI: [...tempCart]}
				}, () => {
				this.addTotalsAPI(); this.cartUser();
			})
		}
	}

	removeItemAPI = (_id) => {
		let tempProducts = [...this.state.productsAPI];
		let tempCart = [...this.state.cartAPI];
		tempCart = tempCart.filter(item => item._id !==_id);

		const index = tempProducts.indexOf(this.getItemAPI(_id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(
			() => {
				return {
					cartAPI: [...tempCart],
					productsAPI: [...tempProducts]
				}
			},
			() => {
				this.addTotalsAPI(); this.cartUser();
			}
		)		
	}

	clearCartAPI = () => {
		this.setState(() => {
			return {cartAPI: [] };
		}, () => {
			this.addTotalsAPI();			
			this.cartUser();
			this.fetchProducts();
		})		
	}

	addTotalsAPI = () => {
		let subTotal = 0;
		this.state.cartAPI.map(item => (subTotal += item.total));
		const tempTax = subTotal * 0.2;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
			this.setState(() => {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total
			}
		})		
	}




	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,	
				fetchProducts: this.fetchProducts,			
				handleDetailAPI: this.handleDetailAPI,
				addToCartAPI: this.addToCartAPI,
				openModalAPI: this.openModalAPI,
				closeModalAPI: this.closeModalAPI,
				getItemAPI: this.getItemAPI,
				incrementAPI: this.incrementAPI,
				decrementAPI: this.decrementAPI,
				removeItemAPI: this.removeItemAPI,
				clearCartAPI: this.clearCartAPI,
				cartUser: this.cartUser,
				userCartAPI: this.userCartAPI,
				createOrderAPI: this.createOrderAPI,
				deleteUser: this.deleteUser,
				showAdress: this.showAdress,
				allOrdersAPI: this.allOrdersAPI,
				adminUsers: this.adminUsers,
				adminOrders: this.adminOrders,
				adminDeleteOrder: this.adminDeleteOrder,
				adminDeleteUser: this.adminDeleteUser,
				getUserAdmin: this.getUserAdmin,
				handleAdminOrder: this.handleAdminOrder,
				openModalProduct: this.openModalProduct,
				closeModalProduct: this.closeModalProduct,	
				sortByDateOrders: this.sortByDateOrders,
				sortByDateAdminOrders: this.sortByDateAdminOrders,
				sortByPriceAsc: this.sortByPriceAsc,
				sortByPriceDesc: this.sortByPriceDesc,
				handleChange: this.handleChange,
				filterProducts: this.filterProducts,
				carouselProducts: this.carouselProducts,
				user: this.user,
				login: this.login,
				logout: this.logout,
				setCart: this.setCart,
				setRole: this.setRole,
				setID1: this.setID1,
				setID2: this.setID2,
				setID3: this.setID3,
				setID4: this.setID4		
			}}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}


const ProductConsumer1 = ProductContext.Consumer;



export {ProductProvider,ProductConsumer1, ProductContext};
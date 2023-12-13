import React from 'react'
import styled from 'styled-components';
import {ProductContext} from '../../context';



export default class AdminModalProduct extends React.Component {


	static contextType = ProductContext;


	constructor(props) {
	    super(props);
	    this.state = {
	      value: [],
	      valueName: null,
	      valuePrice: null,
	      valueCompany: null,
	      valueInfo: null,
	      valueFeaturedInfo: null,
	      valueCheck: false,
	      editName: false,
	      editPrice: false,
	      editCompany: false,
	      editInfo: false,
	      editImg: false,
	      editFeaturedInfo: false,
	    }
	    this.nameInput = React.createRef();
	    this.priceInput = React.createRef();
	    this.companyInput = React.createRef();
	    this.infoInput = React.createRef();
	    this.featuredInfoInput = React.createRef();

	    this.baseState = this.state 
	}

	resetForm = () => {
	   this.setState(this.baseState)
	}

	changeEditName = () => {
	   this.setState({editName: !this.state.editName})
	}

	changeEditPrice = () => {
	   this.setState({editPrice: !this.state.editPrice})
	}

	changeEditCompany = () => {
	   this.setState({editCompany: !this.state.editCompany})
	}

	changeEditInfo = () => {
	   this.setState({editInfo: !this.state.editInfo})
	}

	changeEditImg = () => {
	   this.setState({editImg: !this.state.editImg})
	}

	changeEditFeaturedInfo = () => {
	   this.setState({editFeaturedInfo: !this.state.editFeaturedInfo})
	}


	updateNameValue = () => {
	   this.setState({editName: false, valueName: this.nameInput.current.value},
	    	() => {
	    		this.adminNameChange()
	    	}
	    )  	
	}


	updatePriceValue = () => {
	   this.setState({editPrice: false, valuePrice: this.priceInput.current.value},
	    	() => {
	    		this.adminPriceChange()
	    	}
	    )  	
	}


	updateCompanyValue = () => {
	   this.setState({editCompany: false, valueCompany: this.companyInput.current.value},
	    	() => {
	    		this.adminCompanyChange()
	    	}
	    )  	
	}


	handleChange = () => {
	   this.setState({valueCheck: !this.state.valueCheck},
	    	() => {
	    		this.adminFeaturedChange()
	    	}
	    )  	
	}

	updateFeaturedInfoValue = () => {
	   this.setState({editFeaturedInfo: false, valueFeaturedInfo: this.featuredInfoInput.current.value},
	    	() => {
	    		this.adminFeaturedInfoChange()
	    	}
	    )  	
	}


	updateInfoValue = () => {
	   this.setState({editInfo: false, valueInfo: this.infoInput.current.value},
	    	() => {
	    		this.adminInfoChange()
	    	}
	    )  	
	}


	updateImgValue = () => {
	   this.setState({editImg: false})  	
	}


	fileChangedHandler = (event) => {
		const value = [...this.state.value];
		value.push(...event.target.files)
	  	this.setState({value: value},
		  	() => {
		  		this.adminImgChange()
		    }
	  	)
	}


	adminPriceChange = () => {   
		let params = this.context.modalProductAPI._id;
		const price = this.state.valuePrice;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/price/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'price': price}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	


  	adminNameChange = () => {   
		let params = this.context.modalProductAPI._id;
		const name = this.state.valueName;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/name/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'name': name}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	


	adminCompanyChange = () => {   
		let params = this.context.modalProductAPI._id;
		const company = this.state.valueCompany;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/company/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'company': company}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	


	adminInfoChange = () => {   
		let params = this.context.modalProductAPI._id;
		const info = this.state.valueInfo;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/info/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'info': info}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	


	adminFeaturedChange = () => {   
		let params = this.context.modalProductAPI._id;
		const featured = this.state.valueCheck;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/featured/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'featured': featured}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	


	adminFeaturedInfoChange = () => {   
		let params = this.context.modalProductAPI._id;
		const featuredInfo = this.state.valueFeaturedInfo;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/featuredInfo/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'featuredInfo': featuredInfo}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	adminImgChange = () => {
		const data = new FormData();
		this.state.value.forEach((item) => data.append('productImage', item));
	    data.append("productId", this.context.modalProductAPI._id);
	    
	    fetch('https://shop-mobile-backend.onrender.com/product/admin/img/', {
	      method: 'put',	      
	      body:data
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });       
	}; 

	adminDeleteProduct = () => {   
		let params = this.context.modalProductAPI._id;
		let url = 'https://shop-mobile-backend.onrender.com/product/admin/' + params;
		fetch(url, {
      	method: 'delete',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token}
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.fetchProducts();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	render() {

		if(!this.context.modalProductOpen){
			return null;
		}
		else{
			return (
				<ModalContainer>
					<div className='container acc'>
						<div className='row'>
							<div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
								<h3 className='text-hover text-capitalize pb-3'>Edit product</h3>
      							{this.state.editImg ?      								
							      <div className='edit'>
							        <input type='file' name="productImage" onChange={this.fileChangedHandler} multiple defaultValue=''/>
							        <button onClick={this.changeEditImg}>x</button>
							        <button onClick={this.updateImgValue}>OK</button>
							      </div>								    
							    :								   
							      <div onDoubleClick={this.changeEditImg}>
							      	<img src={`https://shop-mobile-backend.onrender.com/${this.context.modalProductAPI.productImage[0]}`} alt='img' className='img-fluid'/>
							      </div>								    
								}
      							{this.state.editName ?      								
							      <div className='edit'>
							        <input type='text' ref={this.nameInput} defaultValue=''/>
							        <button onClick={this.changeEditName}>x</button>
							        <button onClick={this.updateNameValue}>OK</button>
							      </div>								    
							    :								   
							      <div onDoubleClick={this.changeEditName}>
							      	<p className='align-self-center mt-2 mb-1'>model : {this.state.valueName}</p>  
							      </div>								    
								}
								{this.state.editPrice ?      								
							      <div className='edit'>
							        <input type='text' ref={this.priceInput} defaultValue=''/>
							        <button onClick={this.changeEditPrice}>x</button>
							        <button onClick={this.updatePriceValue}>OK</button>
							      </div>								    
							    :								   
							      <div onDoubleClick={this.changeEditPrice}>
							      	<p className='align-self-center mb-1'>price : $ {this.state.valuePrice}</p>  
							      </div>								    
								}
								{this.state.editCompany ?      								
							      <div className='edit'>
							        <input type='text' ref={this.companyInput} defaultValue=''/>
							        <button onClick={this.changeEditCompany}>x</button>
							        <button onClick={this.updateCompanyValue}>OK</button>
							      </div>								    
							    :								   
							      <div onDoubleClick={this.changeEditCompany}>
							      	<p className='align-self-center mb-1'>made by : {this.state.valueCompany}</p>  
							      </div>								    
								}
								{this.state.editInfo ?      								
							      <div className='edit'>
							        <input type='text' ref={this.infoInput} defaultValue=''/>
							        <button onClick={this.changeEditInfo}>x</button>
							        <button onClick={this.updateInfoValue}>OK</button>
							      </div>								    
							    :								   
							      <div onDoubleClick={this.changeEditInfo}>
							      	<p className='align-self-center mb-1'>some info about product : {this.state.valueInfo}</p>  
							      </div>								    
								}
								<div>
							        <label htmlFor='featured'>
				              			<p className='align-self-center mb-0 mr-1'>featured : </p>
			              			</label>
			              			<input className='check' type='checkbox' name='featured' id='featured' defaultChecked={this.context.productsAPI.featured} onChange={this.handleChange}/>              							        
							    </div>	
								{this.state.editFeaturedInfo ?      								
							      <div className='edit'>
							        <input type='text' ref={this.featuredInfoInput} defaultValue=''/>
							        <button onClick={this.changeEditFeaturedInfo}>x</button>
							        <button onClick={this.updateFeaturedInfoValue}>OK</button>
							      </div>								    
							    :								   
							      <div onDoubleClick={this.changeEditFeaturedInfo}>
							      	<p className='align-self-center mb-3'>featured info : {this.state.valueFeaturedInfo}</p>  
							      </div>								    
								}
								<div className='edit-btn'>						     								
									<button className='btn btn-primary mr-4 text-capitalize' onClick={() => {this.context.closeModalProduct(); this.resetForm();}}>
										confirm
									</button>
														
									<button className='btn btn-danger text-capitalize' onClick={() => {this.adminDeleteProduct(); this.context.closeModalProduct();}}>
										delete product
									</button>
								</div>
							</div>
						</div>
					</div>
				</ModalContainer>
			);
		}				
	}
}



const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
		#modal{
			background: var(--mainWhite);
		}
`;
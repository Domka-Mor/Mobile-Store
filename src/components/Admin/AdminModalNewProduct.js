import React from 'react';
import  Modal from 'react-bootstrap/Modal';
import {ProductContext} from '../../context';

 
export default class AdminModalNewProduct extends React.Component {

	static contextType = ProductContext;

	constructor(props) {
	    super(props);
	    this.state = {
	      valueName: null,
	      valuePrice: null,
	      valueCompany: null,
	      valueInfo: null,
	      valueImg: null,
	      valueFeatured: false,
	      valueFeaturedInfo: null,
	      setName: false,
	      setPrice: false,
	      setCompany: false,
	      setInfo: false,
	      setImg: false,
	      setFeaturedInfo: false,
	      show: false
	    }
	    this.inputName = React.createRef();
	    this.inputPrice = React.createRef();
	    this.inputCompany = React.createRef();
	    this.inputInfo = React.createRef();
	    this.inputFeaturedInfo = React.createRef();
	}


	handleModal = () => {
	    this.setState({show: !this.state.show})
	  }

	editName = () => {
	   this.setState({setName: !this.state.setName})
	}

	editPrice = () => {
	   this.setState({setPrice: !this.state.setPrice})
	}

	editCompany = () => {
	   this.setState({setCompany: !this.state.setCompany})
	}

	editInfo = () => {
	   this.setState({setInfo: !this.state.setInfo})
	}

	editImg = () => {
	   this.setState({setImg: !this.state.setImg})
	}

	editFeaturedInfo = () => {
	   this.setState({setFeaturedInfo: !this.state.setFeaturedInfo})
	}


	setNameValue = () => {
	   this.setState({setName: false, valueName: this.inputName.current.value},
	    	() => {
				console.log(this.state.valueName)
	    	}
	    )  	
	}


	setPriceValue = () => {
	   this.setState({setPrice: false, valuePrice: this.inputPrice.current.value},
	    	() => {
				console.log(this.state.valuePrice)
	    	}
	    )  	
	}


	setCompanyValue = () => {
	   this.setState({setCompany: false, valueCompany: this.inputCompany.current.value},
	    	() => {
				console.log(this.state.valueCompany)
	    	}
	    )  	
	}


	setInfoValue = () => {
	   this.setState({setInfo: false, valueInfo: this.inputInfo.current.value},
	    	() => {
				console.log(this.state.valueInfo)
	    	}
	    )  	
	}


	handleChange = () => {
	   this.setState({valueFeatured: !this.state.valueFeatured},
	    	() => {
				console.log(this.state.valueFeatured)
	    	}
	    )  	
	}


	setFeaturedInfoValue = () => {
	   this.setState({setFeaturedInfo: false, valueFeaturedInfo: this.inputFeaturedInfo.current.value},
	    	() => {
				console.log(this.state.valueFeaturedInfo)
	    	}
	    )  	
	}


	setImgValue = () => {
	   this.setState({setImg: false})  	
	}



	fileChangedHandler = (event) => {
	  	this.setState({valueImg: event.target.files[0]},
		  	() => {
				console.log(this.state.valueImg)
		    }
	  	)
	}

	createNewProduct = () => {
		const data = new FormData();
	    data.append("name", this.state.valueName);
	    data.append("productImage", this.state.valueImg);
	    data.append("price", this.state.valuePrice);
	    data.append("company", this.state.valueCompany);
	    data.append("info", this.state.valueInfo);
	    data.append("featured", this.state.valueFeatured);
	    data.append("featuredInfo", this.state.valueFeaturedInfo);
	    
	    fetch('https://shop-mobile-backend.onrender.com/product/admin', {
	      method: 'post',	      
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



	render() {		
		return (
			<div className="new-div">
				<button className='btn btn-danger btn-lg m-3 text-capitalize' onClick={() => this.handleModal()}> Create new product</button>
				<Modal 
				size="sm"
				show={this.state.show}
				onHide={() => this.handleModal()}
				className="text-center new"
				centered
				>
				<Modal.Header className="d-flex justify-content-center">
				<h2 className="text-capitalize text-hover">New product</h2>					
				</Modal.Header>
				<Modal.Body className='text-capitalize'>
					{this.state.setName ?      								
				      <div className="edit2">
				        <input type='text' ref={this.inputName} defaultValue=''/>
				        <button onClick={this.editName}>x</button>
				        <button onClick={this.setNameValue}><i className="fas fa-check"></i></button>
				      </div>								    
				    :								   
				      <div onDoubleClick={this.editName}>
				      	<h4 className='align-self-center mb-0'>model: {this.state.valueName} <i className="fas fa-pencil-alt"></i></h4>  
				      </div>								    
					}
					{this.state.setPrice ?      								
				      <div className="edit2">
				        <input className="edit" type='number' ref={this.inputPrice} defaultValue=''/>
				        <button onClick={this.editPrice}>x</button>
				        <button onClick={this.setPriceValue}><i className="fas fa-check"></i></button>
				      </div>								    
				    :								   
				      <div onDoubleClick={this.editPrice}>
				      	<h4 className='align-self-center mb-0'>price : {this.state.valuePrice} <i className="fas fa-pencil-alt"></i></h4>  
				      </div>								    
					}
					{this.state.setCompany ?      								
				      <div className="edit2">
				        <input type='text' ref={this.inputCompany} defaultValue=''/>
				        <button onClick={this.editCompany}>x</button>
				        <button onClick={this.setCompanyValue}><i className="fas fa-check"></i></button>
				      </div>								    
				    :								   
				      <div onDoubleClick={this.editCompany}>
				      	<h4 className='align-self-center mb-0'>made by : {this.state.valueCompany} <i className="fas fa-pencil-alt"></i></h4>  
				      </div>								    
					}
					{this.state.setInfo ?      								
				      <div className="edit2">
				        <input type='text' ref={this.inputInfo} defaultValue=''/>
				        <button onClick={this.editInfo}>x</button>
				        <button onClick={this.setInfoValue}><i className="fas fa-check"></i></button>
				      </div>								    
				    :								   
				      <div onDoubleClick={this.editInfo}>
				      	<h4 className='align-self-center mb-0'>info about product : {this.state.valueInfo} <i className="fas fa-pencil-alt"></i></h4>  
				      </div>								    
					}
					{this.state.setImg ?      								
				      <div className="edit2">
				        <input type='file' onChange={this.fileChangedHandler} defaultValue=''/>
				        <button onClick={this.editImg}>x</button>
				        <button onClick={this.setImgValue}><i className="fas fa-check"></i></button>
				      </div>								    
				    :								   
				      <div onDoubleClick={this.editImg}>
				      	<h4 className='align-self-center mb-0'>image <i className="fas fa-pencil-alt"></i></h4>  
				      </div>								    
					}						     								
				      <div className='check2'>
				        <label htmlFor='featured'>
	              			<h4 className='align-self-center mb-0 mr-1'>featured </h4>
              			</label>
              			<input  type='checkbox' name='featured' id='featured' checked={this.state.valueFeatured} onChange={this.handleChange}/>              							        
				      </div>								    				    				    
					{this.state.setFeaturedInfo ?      								
				      <div className="edit2">
				        <input type='text' ref={this.inputFeaturedInfo} defaultValue=''/>
				        <button onClick={this.editFeaturedInfo}>x</button>
				        <button onClick={this.setFeaturedInfoValue}><i className="fas fa-check"></i></button>
				      </div>								    
				    :								   
				      <div onDoubleClick={this.editFeaturedInfo}>
				      	<h4 className='align-self-center mb-0'>featured info : {this.state.valueFeaturedInfo} <i className="fas fa-pencil-alt"></i></h4>  
				      </div>								    
					}
				</Modal.Body>
				<Modal.Footer>						     								
					<button className='btn btn-danger btn-lg mx-auto text-capitalize' onClick={() => {this.handleModal(); this.createNewProduct();}}>
							confirm
					</button>
				</Modal.Footer>
				</Modal>
			</div>			
		)
	}
}



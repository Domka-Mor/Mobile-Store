import React from 'react'
import styled from 'styled-components';
import {ButtonContainer} from '../Button';
import {Link} from 'react-router-dom';
import {ProductConsumer1, ProductContext} from '../../context';


export default class ModalClass extends React.Component {


    static contextType = ProductContext;


	constructor(props) {
	    super(props);
	    this.state = {
	      newAdress: [],
	      modal: false,
	      change: false,
	      name: '',
	      surname: '',
	      adress: '',
	      country: ''
	     }
  	}




  	onNameChange = (event) => {
    	this.setState({name: event.target.value})
  	}


	onSurnameChange = (event) => {
	    this.setState({surname: event.target.value})
	}


    onAdressChange = (event) => {
        this.setState({adress: event.target.value})
    }


    onCountryChange = (event) => {
    	this.setState({country: event.target.value})
    }


  	openModal = (event) => {
    	this.setState({modal: true})
  	}


  	closeModal = (event) => {
    	this.setState({modal: false})
 	}


 	changeOpen = () => {
    	this.setState({change: true})
  	}


  	changeClose = (event) => {
    	this.setState({change: false})
  	}


	changeAdress = (event) => {	
		let params = this.context.userId;
		let url = 'https://shop-mobile-backend.onrender.com/user/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token
      	 },
      	body: JSON.stringify({
	        'name': this.state.name,
	        'surname': this.state.surname,
	        'adress': this.state.adress,
	        'country': this.state.country
	      }) 
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
	} 	



	render() {
		return (

			<ProductConsumer1>
	      	{context => (
				<div>	
					{!this.state.modal && (
					<div className='container totals mt-4'>
						<div className="d-flex flex-column">						
							<div className='d-flex justify-content-end'>
								<button type="button" className='btn btn-danger text-uppercase my-4 px-5' 
								onClick={() => {
								this.openModal();
								}}>
									Confirm Order
								</button>
				            </div>
			            </div>
		            </div>
		            )}


				  {this.state.modal && (
					<ModalContainer>
						<div className='container adress'>
							<div className='row'>
								<div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center pb-4'>
									<h2 className='p-5 text-hover'>Your adress is :</h2>
									<h5 className='text-capitalize'>{context.adress.name} {context.adress.surname}</h5>
									<h5>{context.adress.email}</h5>
									<h5 className='text-capitalize'>{context.adress.adress}</h5>
									<h5 className='text-capitalize pb-3'>{context.adress.country}</h5>
									<Link to={`/account/${context.userId}`}>									
										<ButtonContainer className='ml-2' 
										onClick={() => {
											this.closeModal(); 
											context.createOrderAPI(); 
										}}>
											confirm
										</ButtonContainer>	
									</Link>	
									<ButtonContainer className='mr-2'
									onClick={() => {
										this.closeModal();
										this.changeOpen();
									}}>
										change adress
									</ButtonContainer>
								</div>
							</div>
						</div>
					</ModalContainer>
					)}


				  {this.state.change &&(
					<ModalContainer>
						<div className='container totals adress'>
							<div className='row'>
								<div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>										
							        <form>
							          <div className="form-group">
							            <label htmlFor="fname">name</label>
							            <input 
							            type="text" 
							            className="form-control" 
							            id="name" 
							            placeholder="Enter your name"
							            onChange={this.onNameChange}						            
							            />
							          </div>
							          <div className="form-group">
							            <label htmlFor="lname">surname</label>
							            <input 
							            type="text" 
							            className="form-control" 
							            id="surname" 
							            placeholder="Enter your surname"
							            onChange={this.onSurnameChange}						            
							            />
							          </div>
							          <div className="form-group">
							            <label htmlFor="address">address</label>
							            <input 
							            type="text" 
							            className="form-control" 
							            id="address" 
							            placeholder="Enter your address"
							            onChange={this.onAdressChange}						           
							            />
							          </div>
							          <div className="form-group">
							            <label htmlFor="country">country</label>
							            <input 
							            type="text" 
							            className="form-control" 
							            id="country" 
							            placeholder="Enter your country"
							            onChange={this.onCountryChange}						            
							            />
							          </div>
							        </form>						        				
									<ButtonContainer className="mr-4" onClick={() => this.changeClose()}>
										close
									</ButtonContainer>		
									<Link to={`/account/${context.userId}`}>						
										<ButtonContainer onClick={() => {
											this.changeAdress();
											this.context.showAdress(); 										
											this.changeClose();
											context.createOrderAPI(); 
										}}>
											submit
										</ButtonContainer>	
									</Link>				
								</div>
							</div>
						</div>
					</ModalContainer>
				   )}
				</div>
			)}
          </ProductConsumer1>         
		)
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
	z-index: 10;
	overflow: hidden;
		#modal{
			background: var(--mainWhite);
		}
`;
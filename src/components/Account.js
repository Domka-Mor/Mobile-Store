import React from 'react';
import {ProductContext} from '../context';
import OrdersContainer from './Orders/OrdersContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ScrollUpButton from "react-scroll-up-button";


export default class Account extends React.Component {


	static contextType = ProductContext;

	constructor(props) {
	    super(props);
	    this.state = {
	      showInfo: false,
	      showOrders: false
	    }
  	}



  	componentDidMount() {
		this.context.allOrdersAPI();
	}


  	handleClick1 = () => {
    	this.setState({ showInfo: !this.state.showInfo });
  	}

	handleClick2 = () => {
    	this.setState({ showOrders: !this.state.showOrders });
  	}
 

	render() {
		return (
			<>
				<Container fluid className='pt-5 d-none d-lg-block'>	
					<Row>
					<Col xs="2" className="d-flex flex-column align-items-center">										        	 				            	
					</Col>
					<Col className="d-flex flex-column align-items-center">										        
						<h2 className='text-center text-capitalize text-title py-3'>Hello {this.context.adress.name} {this.context.adress.surname} !</h2>	 				            	
					</Col>
					</Row>
				</Container>

				<Container fluid className='pt-5 d-lg-none'>											        
					<h2 className='text-center text-capitalize text-title py-3'>Hello {this.context.adress.name} {this.context.adress.surname} !</h2>	 				            	
				</Container>

				<Container fluid className='d-none d-lg-block'>					
					<Row>						
						<Col xs="2" className="d-flex flex-column align-items-center">
						 	<button className="btn btn-primary my-4 text-capitalize" onClick={() => {this.handleClick1()}}>                					                 
					        	My profile
					    	</button>

						    <button className="btn btn-primary my-4 text-capitalize" onClick={() => {this.handleClick2(); this.context.sortByDateOrders();}}>
				                My orders
				            </button>
			            	
		 	                <button className="btn btn-danger my-4 text-capitalize" onClick={() => {this.context.deleteUser()}}>
			                	Delete user
			                </button>
						</Col>
						<Col>
					        {this.state.showInfo && (
					        	this.context.adress.length > 0 ? 
				        		(
					    			<div className='container mt-5'>
			                          <div className='row'>
			                            <div className='col-10 mx-auto text-center text-title'>
			                              <h1>You currently have no adress available</h1>
			                            </div>
			                          </div>
			                        </div>    
					    		)	
					    		:
					    		(
							        <div className='col-8 mx-auto col-md-6 col-lg-4 text-center pb-4'>
							          	<h3 className='p-4 text-hover'>Your adress is :</h3>
										<h5 className='text-capitalize'>{this.context.adress.name} {this.context.adress.surname}</h5> 
										<h5>{this.context.adress.email}</h5>
										<h5 className='text-capitalize'>{this.context.adress.adress}</h5>
										<h5 className='text-capitalize pb-3'>{this.context.adress.country}</h5>	
							        </div>
							    )					    	
						    )}

							{this.state.showOrders && (     
		                      	<OrdersContainer/>                     
		 	                )}
						</Col>																	
		            </Row>
				</Container>

				<Container className='d-lg-none'>					
					<Row className='mt-5'>						
						<Col className="d-flex justify-content-center account">
						 	<button className="btn btn-primary my-4 text-capitalize " onClick={() => {this.handleClick1()}}>                					                 
					        	My profile
					    	</button>
					    </Col>
					    <Col className="d-flex justify-content-center account">
						    <button className="btn btn-primary my-4 text-capitalize " onClick={() => {this.handleClick2(); this.context.sortByDateOrders();}}>
				                My orders
				            </button>
			            </Col>	
			            <Col className="d-flex justify-content-center account">
		 	                <button className="btn btn-danger my-4 text-capitalize" onClick={() => {this.context.deleteUser()}}>
			                	Delete user
			                </button>
						</Col>
					</Row>
					<Row>
						<Col>
					        {this.state.showInfo && (
					        	this.context.adress.length > 0 ? 
				        		(
					    			<div className='container mt-5'>
			                          <div className='row'>
			                            <div className='col-10 mx-auto text-center'>
			                              <h1 className='text-title'>You currently have no adress available</h1>
			                            </div>
			                          </div>
			                        </div>    
					    		)	
					    		:
					    		(
							        <div className='col-8 mx-auto col-md-6 col-lg-4 text-center account pb-4'>
							          	<h3 className='p-4 text-hover'>Your adress is :</h3>
										<h5 className='text-capitalize'>{this.context.adress.name} {this.context.adress.surname}</h5> 
										<h5>{this.context.adress.email}</h5>
										<h5 className='text-capitalize'>{this.context.adress.adress}</h5>
										<h5 className='text-capitalize pb-3'>{this.context.adress.country}</h5>	
							        </div>
							    )					    	
						    )}

							{this.state.showOrders && (     
		                      	<OrdersContainer/>                     
		 	                )}
						</Col>																	
		            </Row>
				</Container>
				<ScrollUpButton/>
			</>
		)
	}
}
import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import {ProductContext} from '../../context';
import Moment from 'react-moment';


export default class AdminOrderSingle extends React.Component {


	static contextType = ProductContext;

	constructor(props) {
	    super(props);
	    this.state = {
	      value: 'order created'
	    };
  	}


  	handleChange = (event) => {
	    this.setState({value: event.target.value},
	    	() => {
			this.adminChange();
		})		
	}

	
	adminChange = () => {   
		let params = this.context.orderAdmin;
		let url = 'https://shop-mobile-backend.onrender.com/orders/admin/' + params;
		fetch(url, {
      	method: 'put',
      	headers: {
      	'Content-Type': 'application/json',
      	Authorization: 'Bearer ' + this.context.token},
      	 body: JSON.stringify({
	            'status': this.state.value}) 
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	this.context.adminOrders();
	    })
	    .catch(err => {
	        console.log(err);
	    });	
	} 	

	render() {

		const {_id, orders, total, tax, subtotal, date, status, user} = this.props.allOrders;
		const dateToFormat = date;

		return (
			<>    
		        <Accordion defaultActiveKey="0" className='acc2'>
		          <Card>
		            <Accordion.Toggle as={Card.Header} eventKey="1">
		                <div className='row my-2 text-capitalize text-center d-flex align-items-center' onClick={() => {this.context.handleAdminOrder(_id);}}>
		                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
		                    <p className='text-uppercase mr-5'><Moment format='DD.MM.YYYY'>{dateToFormat}</Moment></p>
		                  </div>
		                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
		                   <p className='text-uppercase mr-3'>{orders.length}</p>
		                  </div>
		                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
		                   <p className='text-uppercase mr-2'>$ {total}</p>
		                  </div>		              
		                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
		                    <button className="btn btn-primary" >
		                    	{status}
		                    </button>		                 
						    <form>
						        <label>
						          <select value={this.state.value} onChange={this.handleChange}>
						            <option value="in transport">in transport</option>
						            <option value="sent">sent</option>
						            <option value="delivered">delivered</option>
						          </select>
						        </label>
					        </form>
		                  </div>
		                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
		                    <button className="btn btn-danger" 
			                   onClick={() => {this.context.adminDeleteOrder(_id);}}
			                   >Delete order
		                    </button>
		                  </div>
		                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
		                    <p className='text-uppercase'><i className="fa fa-arrow-down" aria-hidden="true"></i></p>		                    
		                  </div>	
		                </div>

		                <div className='d-lg-none text-center mx-auto'>
		                    <p className='text-uppercase text-hover'>Date of order: <Moment format='DD.MM.YYYY'>{dateToFormat}</Moment></p>
		                </div>
	                  	<div className='d-lg-none mx-auto text-center'>	                 
						    <form>
						    <button className="btn btn-primary" >
		                    	{status}
		                    </button>	
						        <label>
						          <select value={this.state.value} onChange={this.handleChange}>
						            <option value="in transport">in transport</option>
						            <option value="sent">sent</option>
						            <option value="delivered">delivered</option>
						          </select>
						        </label>
					        </form>                      
	                  	</div>  
	                  	<div className='d-lg-none text-center acc3'>
	                    	<button className="btn btn-danger" 
			                   onClick={() => {this.context.adminDeleteOrder(_id);}}
			                   >Delete order
		                    </button>                
	                  	</div>   
		            </Accordion.Toggle>
		            <Accordion.Collapse eventKey="1" className='accordeon accordeon-text'>
		              <Card.Body>
		                <div className= 'row my-2 text-capitalize text-center d-flex align-items-center text-bright'>
		                    <div className='col-3 mx-auto col-lg-2'>
		                      <p className='text-uppercase'>company</p>
		                    </div>
		                    <div className='col-3 mx-auto col-lg-2'>
		                      <p className='text-uppercase'>name of product</p>
		                    </div>
		                    <div className='col-3 mx-auto col-lg-2'>
		                      <p className='text-uppercase'>quantity</p>
		                    </div>
		                    <div className='col-3 mx-auto col-lg-2'>
		                      <p className='text-uppercase'>price</p>
		                    </div>
		                </div>

		                {                  
		                  orders.map((order,i) => 
		                    <div key={i} className='row my-2 text-capitalize text-center'>   
		                      <div className='col-3 mx-auto col-lg-2'>                  
		                        <p>{order.company}</p>
		                      </div>
		                      <div className='col-3 mx-auto col-lg-2'>
		                        <p>{order.name}</p>
		                      </div>
		                      <div className='col-3 mx-auto col-lg-2'>
		                        <p>{order.count}</p>
		                      </div>
		                      <div className='col-3 mx-auto col-lg-2'>
		                        <p>$ {order.price}</p>
		                      </div>
		                    </div>
		                  )
		                } 
		                
		                <div className='row text-capitalize pt-4 pb-2'>
		                  <div className='col-10 mx-auto col-lg-2'>
		                    <h5>
		                      <span className='text-acc'> subtotal: </span>
		                      <strong>$ {subtotal}</strong>
		                    </h5>
		                    <h5>
		                      <span className='text-acc'> tax: </span>
		                      <strong>$ {tax}</strong>
		                    </h5>
		                    <h5>
		                      <span className='text-acc'> total: </span>
		                      <strong>$ {total}</strong>
		                    </h5> 
		                    <h5>
		                      <span className='text-acc'> date: </span>
		                      <strong><Moment format='DD.MM.YYYY'>{dateToFormat}</Moment></strong>
		                    </h5>             
		                  </div>

		                  <div className='col-10 mx-auto col-lg-2'>
		                    <h5>
		                      <span className='text-acc'> name: </span>
		                      <strong>{user.name} {user.surname}</strong>
		                    </h5>
		                    <h5>
		                      <span className='text-acc'> email: </span>
		                      <strong>{user.email}</strong>
		                    </h5> 
		                    <h5>
		                      <span className='text-acc'> adress: </span>
		                      <strong>{user.adress}</strong>
		                    </h5>             
		                    <h5>
		                      <span className='text-acc'> country: </span>
		                      <strong>{user.country}</strong>
		                    </h5>
		                  </div>
		                </div>
		                 
		              </Card.Body>
		            </Accordion.Collapse>
		          </Card>
		        </Accordion>                                             
		    </>  
		)
	}
}
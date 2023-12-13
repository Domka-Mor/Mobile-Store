import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import {ProductContext} from '../../context';


export default class AdminUserSingle extends React.Component {

	static contextType = ProductContext;

	render() {


 		const {_id, role, name, surname, email, adress, country} = this.props.allUsers;

	
		return (
			<>    
		        <Accordion defaultActiveKey="0" className='acc'>
		          <Card>
		            <Accordion.Toggle as={Card.Header} eventKey="1">
		                <div className= 'row my-2 text-capitalize text-center d-flex align-items-center'>	           
		                  <div className='col-10 mx-auto col-lg-2 d-none d-lg-block'>
		                    <p className='text-uppercase mr-3'>{name} {surname}</p>
		                  </div>		                  
		                  <div className='col-10 mx-auto col-lg-2 d-none d-lg-block'>
		                    <button className="btn btn-danger" 
			                   onClick={() => {this.context.getUserAdmin(_id);}}
			                   >Delete user
		                    </button>
		                  </div>
		                  <div className='col-10 mx-auto col-lg-2 d-none d-lg-block'>
		                    <p className='text-uppercase'><i className="fa fa-arrow-down" aria-hidden="true"></i></p>		                    
		                  </div>		                  
		                </div> 

		                <div className= 'row text-capitalize text-center d-flex align-items-center'>	           
		                  <div className='col-10 mx-auto col-lg-2 d-lg-none'>
		                    <p className='text-uppercase'>{name} {surname}</p>
		                  </div>		                  
		                  <div className='col-10 mx-auto col-lg-2 d-lg-none'>
		                    <button className="btn btn-danger" 
			                   onClick={() => {this.context.getUserAdmin(_id);}}
			                   >Delete user
		                    </button>
		                  </div>
		                  <div className='col-10 mx-auto col-lg-2 d-lg-none'>
		                    <p className='text-uppercase'><i className="fa fa-arrow-down" aria-hidden="true"></i></p>		                    
		                  </div>		                  
		                </div> 
		            </Accordion.Toggle>
		            <Accordion.Collapse eventKey="1" className='accordeon accordeon-text'>
		              	<Card.Body>
			                <div className= 'row my-2 text-capitalize text-center d-flex align-items-center text-bright'>
			                    <div className='col-2 mx-auto col-lg-2'>
			                      <p className='text-uppercase'>name</p>
			                    </div>
			                    <div className='col-2 mx-auto col-lg-2'>
			                      <p className='text-uppercase'>surname</p>
			                    </div>
			                    <div className='col-2 mx-auto col-lg-2'>
			                      <p className='text-uppercase'>role</p>
			                    </div>
			                    <div className='col-2 mx-auto col-lg-2'>
			                      <p className='text-uppercase'>email</p>
			                    </div>
			                    <div className='col-2 mx-auto col-lg-2'>
			                      <p className='text-uppercase'>adress</p>
			                    </div>
			                    <div className='col-2 mx-auto col-lg-2'>
			                      <p className='text-uppercase'>country</p>
			                    </div>
			                </div>

				            <div className='row my-2 text-center'>   
		                      <div className='col-2 mx-auto col-lg-2 text-capitalize user'>                  
		                        <p>{name}</p>
		                      </div>
		                      <div className='col-2 mx-auto col-lg-2 text-capitalize user'>
		                        <p>{surname}</p>
		                      </div>
		                      <div className='col-2 mx-auto col-lg-2 text-capitalize user'>
		                        <p>{role}</p>
		                      </div>
		                      <div className='col-2 mx-auto col-lg-2'>
		                        <p>{email}</p>
		                      </div>
		                      <div className='col-2 mx-auto col-lg-2 text-capitalize user'>
		                        <p>{adress}</p>
		                      </div>
		                      <div className='col-2 mx-auto col-lg-2 text-capitalize user'>
		                        <p>{country}</p>
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
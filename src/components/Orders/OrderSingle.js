import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import Moment from 'react-moment';


export default class OrderSingle extends React.Component {


  render() {

    const {orders, total, tax, subtotal, date, status, user} = this.props.ordersAPI;
    const dateToFormat = date;

    return (
      <>    
        <Accordion defaultActiveKey="0" className='acc'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <div className='row my-2 text-capitalize text-center d-flex align-items-center'>
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
                    <p className='text-uppercase'>{status}</p>                      
                  </div>
                  <div className='col-3 mx-auto col-lg-2 d-none d-lg-block'>
                    <p className='text-uppercase'><i className="fa fa-arrow-down" aria-hidden="true"></i></p>
                  </div> 

                  <div className='col-5 mx-auto col-lg-2 d-lg-none pt-2'>
                    <p className='text-uppercase mr-5'>Order from: <Moment format='DD.MM.YYYY'>{dateToFormat}</Moment></p>
                  </div>
                  <div className='col-5 mx-auto col-lg-2 d-lg-none pt-2'>
                    <p className='text-uppercase'>{status} <i className="fa fa-arrow-down" aria-hidden="true"></i></p>                      
                  </div>                   
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className='accordeon accordeon-text'>
              <Card.Body>
                <div className='row my-2 text-capitalize text-center d-flex align-items-center text-bright'>
                  <div className='col-2 mx-auto col-lg-2'>
                    <p className='text-uppercase'>company</p>
                  </div>
                  <div className='col-2 mx-auto col-lg-2'>
                    <p className='text-uppercase'>name of product</p>
                  </div>
                  <div className='col-2 mx-auto col-lg-2'>
                    <p className='text-uppercase'>quantity</p>
                  </div>
                  <div className='col-2 mx-auto col-lg-2'>
                    <p className='text-uppercase'>price</p>
                  </div>
                </div>

                {                  
                  orders.map((order,i) => 
                    <div key={i} className='row my-2 text-capitalize text-center'>   
                      <div className='col-2 mx-auto col-lg-2'>                  
                        <p>{order.company}</p>
                      </div>
                      <div className='col-2 mx-auto col-lg-2'>
                        <p>{order.name}</p>
                      </div>
                      <div className='col-2 mx-auto col-lg-2'>
                        <p>{order.count}</p>
                      </div>
                      <div className='col-2 mx-auto col-lg-2'>
                        <p>$ {order.price}</p>
                      </div>
                    </div>
                  )
                } 
                
                <div className='row pt-4 pb-2'>
                  <div className='col-10 mx-auto col-lg-2 text-capitalize'>
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
                      <span className='text-acc text-capitalize'> name: </span>
                      <strong>{user.name} {user.surname}</strong>
                    </h5>
                    <h5>
                      <span className='text-acc'> email: </span>
                      <strong>{user.email}</strong>
                    </h5> 
                    <h5>
                      <span className='text-acc text-capitalize'> adress: </span>
                      <strong>{user.adress}</strong>
                    </h5>             
                    <h5>
                      <span className='text-acc text-capitalize'> country: </span>
                      <strong>{user.country}</strong>
                    </h5>
                  </div>
                </div>
                 
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>                                             
      </>  
    );
  }
}






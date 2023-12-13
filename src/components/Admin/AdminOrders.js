import React from 'react';
import {ProductConsumer1} from '../../context';
import AdminOrderSingle from './AdminOrderSingle';


export default class AdminOrders extends React.Component {
	render() {
		return (
			<React.Fragment>
		        <div className='py-3'>
		          <div className= 'container-fluid'>
		                <ProductConsumer1>
		                  {value => {
		                    if(value.allOrders.length > 0) {
		                      return(
		                        value.allOrders.map(order => {
		                        return <AdminOrderSingle key={order._id} allOrders= {order} />;
		                        })
		                      )
		                    }
		                    else {
		                      return (
		                        <div className='container mt-5'>
		                          <div className='row'>
		                            <div className='col-10 mx-auto text-center'>
		                              <h1 className='text-title'>No orders available</h1>
		                            </div>
		                          </div>
		                        </div>    
		                      )
		                    }
		                  }}
		                </ProductConsumer1>
		          </div>
		        </div>
		    </React.Fragment>
		)
	}
}
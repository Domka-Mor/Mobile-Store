import React from 'react';
import {ProductConsumer1} from '../../context';
import OrderSingle from './OrderSingle';


export default class Orders extends React.Component {

  
  render() {
    return (
      <React.Fragment>
        <div className='py-3'>
          <div className= 'container-fluid'>
                <ProductConsumer1>
                  {value => {
                    const {ordersAPI} = value
                    if(ordersAPI.length > 0) {
                      return(
                        ordersAPI.map(order => {
                        return <OrderSingle key={order._id} ordersAPI= {order} />;
                        })
                      )
                    }
                    else {
                      return (
                        <div className='container mt-5'>
                          <div className='row'>
                            <div className='col-10 mx-auto text-center'>
                              <h1 className='text-title'>you currently have no orders</h1>
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


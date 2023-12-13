import React from 'react';
import {ProductConsumer1} from '../../context';
import AdminUserSingle from './AdminUserSingle';

export default class AdminUsers extends React.Component {
	render() {
		return (
			<React.Fragment>
		        <div className='py-3'>
		          <div className= 'container-fluid'>
		                <ProductConsumer1>
		                  {value => {
		                    if(value.allUsers.length > 0) {
		                      return(
		                        value.allUsers.map(user => {
		                        return <AdminUserSingle key={user._id} allUsers= {user} />;
		                        })
		                      )
		                    }
		                    else {
		                      return (
		                        <div className='container mt-5'>
		                          <div className='row'>
		                            <div className='col-10 mx-auto text-center'>
		                              <h1 className='text-title'>No users available</h1>
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
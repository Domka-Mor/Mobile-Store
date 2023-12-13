import React from 'react'
import {Link} from 'react-router-dom';




export default function CartTotals({kosik, history}) {

	const {cartSubTotal, cartTax, cartTotal, clearCartAPI} =kosik;

	return (
		<div>
			<React.Fragment>
				<div className='container totals'>
					<div className='row'>
						<div className='col-12 my-2 text-capitalize text-right'>
							<Link to='/'>
								<button className='btn btn-outline-dark text-uppercase mb-4 mr-2' type='button' 
								>
									Back to products
								</button>
							</Link>
							<Link to='/'>
								<button className='btn btn-outline-danger text-uppercase mb-4' type='button' 
								onClick= {() => {
									clearCartAPI();
								}}>
									clear cart
								</button>
							</Link>
							<h5>
								<span className='text-title'> subtotal :</span>
								<strong>$ {cartSubTotal}</strong>
							</h5>
							<h5>
								<span className='text-title'> tax :</span>
								<strong>$ {cartTax}</strong>
							</h5>
							<h5>
								<span className='text-title mb-2'> total :</span>
								<strong>$ {cartTotal}</strong>
							</h5>
							
						</div>
					</div>
				</div>
			</React.Fragment>
		</div>
	)
}
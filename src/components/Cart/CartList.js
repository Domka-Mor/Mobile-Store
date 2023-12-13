import React from 'react';
import CartItem from './CartItem';




export default function CartList({kosik}) {
	
	const {cartAPI} = kosik;
	// cart su storeProducts


	return (
		<div className= 'container-fluid'>
			{cartAPI.map(item => {
				return <CartItem key={item._id} item={item} kosik={kosik}/>
				// key, lebo vypise viacero produktov, teda musi vediet podla coho loopovat
			})}
			
		</div>
	)
}
import React from 'react';
import OrdersColumms from './OrdersColumms';
import Orders from './Orders';
import {ProductContext} from '../../context';


export default class OrdersContainer extends React.Component {


	static contextType = ProductContext;


	render() {
		return (
			<div>
				{ this.context.ordersAPI.length > 0 ?
					(<OrdersColumms/>)				
					:
					(null)	
				}
				<Orders/>
			</div>
		)
	}
}
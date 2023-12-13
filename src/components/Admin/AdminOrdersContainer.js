import React from 'react';
import AdminColumms from './AdminColumms';
import AdminOrders from './AdminOrders';
import {ProductContext} from '../../context';


export default class AdminOrdersContainer extends React.Component {

	static contextType = ProductContext;


	render() {
		return (
			<div>
				{ this.context.allOrders.length > 0 ?
					(<AdminColumms/>)				
					:
					(null)	
				}
				<AdminOrders/>
			</div>
		)
	}
}
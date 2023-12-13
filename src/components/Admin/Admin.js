import React from 'react';
import {ProductContext} from '../../context';
import AdminUsers from './AdminUsers';
import AdminOrdersContainer from './AdminOrdersContainer';
import AdminProducts from './AdminProducts';
import {Row, Col, Container} from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";

export default class Admin extends React.Component {

	static contextType = ProductContext;


	constructor(props) {
	    super(props);
	    this.state = {
	      showUsers: false,
	      showOrders: false,
	      showItems: false
	    }
  	}


  	componentDidMount() {
		this.context.adminUsers();
		this.context.adminOrders();
	}


  	handleClick1 = () => {
    	this.setState({ showUsers: !this.state.showUsers });
  	}

	handleClick2 = () => {
    	this.setState({ showOrders: !this.state.showOrders });
  	}

  	handleClick3 = () => {
    	this.setState({ showItems: !this.state.showItems });
  	}
 
  	

	render() {
		return (
			<>	
				<Container fluid className='d-none d-lg-block'>
					<Row>
						<Col xs="2" className="d-flex flex-column align-items-center pt-5">
							<button className="btn btn-primary my-4 text-capitalize" onClick={() => {this.handleClick1()}}>All Users</button>
							<button className="btn btn-primary my-4 text-capitalize" 
							onClick={() => {this.handleClick2(); this.context.sortByDateAdminOrders();}}
							>
							All Orders
							</button>
							<button className="btn btn-primary my-4 text-capitalize" onClick={() => {this.handleClick3()}}>All Products</button>
						</Col>
						<Col className="pt-5">
							{this.state.showUsers && (     
		                      	<AdminUsers/>                     
		 	                )}

		 	                {this.state.showOrders && (     
		                      	<AdminOrdersContainer/>                     
		 	                )}

		 	                {this.state.showItems && ( 
		 	                <AdminProducts/>
		 	                )}  
						</Col>
					</Row>
				</Container>

				<Container fluid className='d-lg-none mt-5'>
					<Row className='mt-5'>
						<Col className="d-flex justify-content-center account">
							<button className="btn btn-primary my-4 text-capitalize" onClick={() => {this.handleClick1()}}>
								All Users
							</button>
						</Col>
						<Col className="d-flex justify-content-center account">
							<button className="btn btn-primary my-4 text-capitalize" 
							onClick={() => {this.handleClick2(); this.context.sortByDateAdminOrders();}}
							>
								All Orders
							</button>
						</Col>
						<Col className="d-flex justify-content-center account">
							<button className="btn btn-primary my-4 text-capitalize" onClick={() => {this.handleClick3()}}>
								All Products
							</button>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col>
							{this.state.showUsers && (     
		                      	<AdminUsers/>                     
		 	                )}

		 	                {this.state.showOrders && (     
		                      	<AdminOrdersContainer/>                     
		 	                )}

		 	                {this.state.showItems && ( 
		 	                <AdminProducts/>
		 	                )}  
						</Col>
					</Row>
				</Container>
				<ScrollUpButton/>
			</>
		)
	}
}
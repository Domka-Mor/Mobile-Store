import React from 'react';
import { Redirect } from 'react-router-dom';
import {ProductContext} from '../context';


export default class UserRoute extends React.Component {

	static contextType = ProductContext;

	componentDidMount(){
		if(this.context.token){
			this.timer = setTimeout(()=> {this.context.logout()},(1000 * 60 * 60))
		}
	}

	componentWillUnmount(){
		clearTimeout(this.timer)
	}

	render() {

		const Component = this.props.component;
		const isAuthenticated = this.context.token;

		return (
			isAuthenticated ? 
	      	(<Component />) 
	      	:   
	      	(<Redirect to={{ pathname: '/login' }} />)
		)
	}
}
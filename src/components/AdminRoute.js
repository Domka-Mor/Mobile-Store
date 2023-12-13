import React from 'react'
import { Redirect } from 'react-router-dom';
import {ProductContext} from '../context';


export default class AdminRoute extends React.Component {

  static contextType = ProductContext;

  render() {

    const Component = this.props.component;
   
    return (
      this.context.role === "admin" ? 
      (<Component />) 
      :   
      (<Redirect to={{ pathname: '/login' }} />)
    )
  }
}

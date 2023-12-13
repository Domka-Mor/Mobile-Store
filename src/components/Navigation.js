import React, {Component} from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {ProductConsumer1} from '../context';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {


	state={
		isOpen: false
	}


	handleToggle = () => {
		this.setState({isOpen: !this.state.isOpen})
	}


	render () {
		return (
			<ProductConsumer1>
				{context => {
					return (
						<>
							<div className= 'd-lg-none py-3'>
								<nav className= 'container-fluid nav-min fixed-top'>
									<div className='row'>								
											<button type='button' className='nav-btn ml-3' onClick={this.handleToggle}>
												<i className="fas fa-bars"></i>
											</button>
									</div>	
									<div className='row d-flex align-items-center justify-content-center pt-2'>						    
								      	<ul className={this.state.isOpen?
											'nav-links show-nav':'nav-min nav-links1'}>	
								      		<li>
												<Link to='/' data-text="Products" onClick={this.handleToggle}>
													<h1>/<small>/</small><small className='smaller'>/</small></h1>
												</Link>
											</li>											
											{context.userId && (  
											<li>
												<Link to={`/account/${context.userId}`} data-text="Account" onClick={this.handleToggle}>
												Account
												</Link>
											</li>
											)}
											{context.role === "admin" && (
											<li>
												<Link to={'/admin'} data-text="Admin" onClick={this.handleToggle}>
												Admin
												</Link>
											</li>
											)}
											{!context.token && ( 
											<Link to='/login' onClick={this.handleToggle}>
												<ButtonContainer onClick={context.logout}>
													Login
												</ButtonContainer>
											</Link>          	
											)}
											{context.token && (        
											<Link to='/' onClick={this.handleToggle}>
												<ButtonContainer onClick={context.logout}>
													Logout
												</ButtonContainer>
											</Link>          		        							        
										    )}
							   
										    <Link to='/cart' onClick={this.handleToggle}>
												<ButtonContainer>	
													<NavCount>	
														<div className='container'>	
															<span className='mr-1'>																																	
																<i className="fas fa-shopping-cart"></i>
															</span>	
															<div className='btn'>
																{context.token && ( 
																	context.cartAPI.length
																)}		
															</div>
															Cart
														</div>
													</NavCount>
												</ButtonContainer>
											</Link>	
										</ul>									
									</div>
								</nav>
							</div>

							<div className='d-none d-lg-block py-3'>
								<nav className="navbar navbar-expand-lg fixed-top">									
									<ul className="navbar-nav mr-auto">	
							      		<li className="logo">
											<Link to='/'>
												<h2>/<small>/</small><small className='smaller'>/</small></h2>
											</Link>
										</li>											
										{context.userId && (  
										<li className="nav-item">
											<Link to={`/account/${context.userId}`}>
											Account
											</Link>
										</li>
										)}
										{context.role === "admin" && (
										<li className="nav-item">
											<Link to={'/admin'}>
											Admin
											</Link>
										</li>
										)}
									</ul>
									<span className="navbar-text">
										{!context.token && ( 
										<Link to='/login'>
											<ButtonContainer onClick={context.logout}>
												Login
											</ButtonContainer>
										</Link>          	
										)}
										{context.token && (        
										<Link to='/'>
											<ButtonContainer onClick={context.logout}>
												Logout
											</ButtonContainer>
										</Link>          		        							        
									    )}				   
									    <Link to='/cart'>
											<ButtonContainer>	
												<NavCount>	
													<div className='container'>	
														<span className='mr-1'>																																	
															<i className="fas fa-shopping-cart"></i>
														</span>	
														<div className='btn'>
															{context.token && ( 
																context.cartAPI.length
															)}		
														</div>
														Cart
													</div>
												</NavCount>
											</ButtonContainer>
										</Link>	
									</span>
								</nav>
							</div>
						</>
					);
				}}
		    </ProductConsumer1>
		)
	}
}


const NavCount = styled.nav`
	.container {
	  position: relative;
	  width: 100%;	  
	}

    .container .btn {
	  position: absolute;
	  top: 10%;
	  left: 31%;
	  width: 100px;
	  transform: translate(-50%, -50%);
	  -ms-transform: translate(-50%, -50%);
	  background-color: transparent;
	  color: white;
	  font-size: 12px;
	  padding: 12px 24px;
	  border: none;
	  cursor: pointer;
	  border-radius: 2px;
	}

    .container .btn:hover {
	  background-color: transparent;
	  color: transparent;
	}
`;
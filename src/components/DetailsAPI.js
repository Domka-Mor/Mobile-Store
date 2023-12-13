import React from 'react';
import {ProductConsumer1} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';



export default class DetailsAPI extends React.Component {


	constructor(props) {
	    super(props);
	    this.state = {
	      index: 0
	    }
	}


	handleTab = (index) => {
	    this.setState({index:index})
	}


	render() {

		const {index} = this.state;
		return (
			<ProductConsumer1>
				{(context) => {
					const {_id, company,  info, price, name, inCart, productImage} = context.detailProductAPI;

					return (
						<div className= 'container py-5 details'>
							{/*name*/}
								<div className='row'>	
									<div className= 'col-10 mx-auto text-center text-slanted text-title my-5'>
										<h1>{name}</h1>
									</div>
								</div>
							{/*product image*/}								
							<div className='row'>
								{ productImage &&													                
					                (
									<div className='col-10 mx-auto col-md-6 my-3'>
                  						<img src={`https://shop-mobile-backend.onrender.com/${productImage[index]}`} alt='img' className='img-fluid main'/>
										<div className='images'>
						                    {productImage.map((item,index)=>{
						                      return <img key={index} src={`https://shop-mobile-backend.onrender.com/${item}`} alt='img' className='thumb' 
						                      onClick={() => {this.handleTab(index);}}/>
						                    })}
						                </div>
						            </div>
					                )
								}
								{/*product text*/}
									<div className='col-10 mx-auto col-md-6 my-3'>
										<h2 className='text-capitalize'>model : {name}</h2>
										<h4 className='text-title text-uppercase text-muted mt-4 mb-3'>
										made by : <span className='text-uppercase'> {company} </span>
										</h4>
										<h4 className='text-bright mb-5 text-capitalize'>
										<strong>price : <span>$</span> {price} </strong>
										</h4>
										<p className='text-capitalize font-weight-bold mt-3'>
										some info about product:
										</p>
										<p className='pb-2'> {info} </p>
									{/*buttons*/}
										<div>
											<Link to='/'>
												<ButtonContainer className='text-capitalize'> back to products </ButtonContainer>
											</Link>
											{context.token ? 
												( 
													<ButtonContainer
													cart
													className='text-capitalize'
													disabled={inCart? true:false} 
													onClick={() => {
														context.addToCartAPI(_id);
														context.openModalAPI(_id);
														context.cartUser(_id);
													}}>
														{inCart? 'in cart' : 'add to cart'}
													</ButtonContainer>
												) 
												: 
												(
													<Link to='/login'> 
														<ButtonContainer cart> add to cart </ButtonContainer>
													</Link>
												)
											}
										</div>
									</div>
								</div>
						</div>
					)
				}}
			</ProductConsumer1>
		)
	}
}


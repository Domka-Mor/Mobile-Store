import React from 'react'
import styled from 'styled-components';
import {ProductConsumer1} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';



export default class ModalAPI extends React.Component {

	
	render() {
		return (
			<ProductConsumer1>
				{(value) => {
					const {modalOpenAPI,closeModalAPI} = value;
					const { name, price, productImage} = value.modalProductAPI;

					if(!modalOpenAPI){
						return null;
					}
					else{
						return (
							<ModalContainer>
								<div className='container'>
									<div className='row'>
										<div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
											<h4 className='pb-3 text-hover'>item added to the cart</h4>
                  							<img src={`https://shop-mobile-backend.onrender.com/${productImage[0]}`} alt='img' className='img-fluid'/>
											<h5 className='pb-2 pt-3'>{name}</h5>
											<h5 className='pb-2'> price : $ {price}</h5>
											<Link to='/'>
												<ButtonContainer className='mr-2' onClick={() => closeModalAPI()}>
													store
												</ButtonContainer>
											</Link>
											<Link to='/cart'>
												<ButtonContainer cart onClick={() => closeModalAPI()}>
													go to cart
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer1>
		)
	}
}



const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
		#modal{
			background: var(--mainWhite);
		}
`;
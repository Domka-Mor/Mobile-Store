import React,{lazy,Suspense} from 'react';
import Title from '../Title';
import CartColumms from './CartColumms';
import EmptyCart from './EmptyCart';
import {ProductConsumer1} from '../../context';
import ModalCart from './ModalCart';
import ScrollUpButton from "react-scroll-up-button";
import Loader from '../../components/Loader';

const CartList = lazy(() => import('./CartList'));
const CartTotals = lazy(() => import('./CartTotals'));

export default function Cart ({kosik}) {
	
		return (
			<>
				<section className='pt-4'>
					<ProductConsumer1>

						{kosik => {
							const {cartAPI} = kosik;
							// cart su storeProducts
							if(cartAPI.length > 0) {
								return(
									<React.Fragment>
										<Title name='your' title='cart'/>
										<CartColumms/>
										<Suspense fallback={ 
					                    	<div className='loader-suspense'>
					                      		<Loader/>
					                    	</div>}
					                  	>					           
	                    					<CartList kosik={kosik}/>
											<ModalCart/>	
											<CartTotals kosik={kosik}/>
                  						</Suspense>									
									</React.Fragment>
									)
							}
							else {
								return <EmptyCart/>
							}
						}}
					</ProductConsumer1>
				</section>
				<ScrollUpButton/>
			</>
		)
}
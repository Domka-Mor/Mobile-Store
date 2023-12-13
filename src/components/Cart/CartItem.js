import React,{Suspense} from 'react';
import Loader from '../../components/Loader';

export default function CartItem({item,kosik}) {

	const {_id, name, img, price, total, count, productImage} = item;
	const {incrementAPI, decrementAPI, removeItemAPI} = kosik;

	return (
		<div className='row my-2 text-capitalize text-center d-flex align-items-center totals'>
			<div className='col-10 mx-auto col-lg-2 cart'>
				<Suspense fallback={<Loader style={{background:'white'}}/>}>	
                   <img src={`https://shop-mobile-backend.onrender.com/${productImage[0]}`} style={{height: "5rem", width: "6rem"}} className='img-cart' alt='product'/>
                </Suspense>	
			</div>	
			<div className='col-10 mx-auto col-lg-2 cart'>
				<span className='d-lg-none'>product : </span> {name}
			</div>	
			<div className='col-10 mx-auto col-lg-2'>
				<span className='d-lg-none'>price : </span> {price}
			</div>	
			<div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
				<div className='d-flex justify-content-center'>
					<div>
						<span 
						className='btn btn-black mx-1' 
						onClick={() => { 
							decrementAPI(_id); 
						}}
						> - </span>
						<span className='btn btn-black mx-1'> {count} </span>
						<span className='btn btn-black mx-1' 
						onClick={() => {
							incrementAPI(_id); 
						}}
						> + </span>
					</div>
				</div>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<div className='cart-icon' 
				onClick={() => {
					removeItemAPI(_id); 
				}}>
					<i className='fas fa-trash'></i>
				</div>
			</div>	
			<div className='col-10 mx-auto col-lg-2'>
				<strong> item total : $ {total}</strong>
			</div>	
		</div>
	)
}
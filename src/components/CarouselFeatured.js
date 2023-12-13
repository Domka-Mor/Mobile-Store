import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {ProductContext} from '../context';
import {Link} from 'react-router-dom';


export default class CarouselFeatured extends React.Component {

	static contextType = ProductContext;

	render() {

		return (
			<>
			<div className="pb-5 d-none d-lg-block">
				<Carousel>
					{this.context.featuredProducts.map(product => {
			            return (		              
			                <Carousel.Item interval={1500} key={product._id} onClick={() => this.context.handleDetailAPI(product._id)}>
			                	<Link to={`/product/${product._id}`}>
							    <img
							      className="d-block w-100"
							      src={`https://shop-mobile-backend.onrender.com/${product.productImage[0]}`}
							      alt="Slide"
							    />
							    </Link>
							    <Carousel.Caption>
							      <h3>{product.name}</h3>
							      <p>{product.featuredInfo}</p>
							    </Carousel.Caption>
							</Carousel.Item>  
			            )		            					   
					})}	  
				</Carousel>		
			</div>

			<div className="pb-5 d-lg-none">
				<Carousel>
					{this.context.featuredProducts.map(product => {
			            return (		              
			                <Carousel.Item interval={1500} key={product._id} onClick={() => this.context.handleDetailAPI(product._id)}>
			                	<Link to={`/product/${product._id}`}>
							    <img
							      className="d-block w-100 img-fluid"
							      src={`https://shop-mobile-backend.onrender.com/${product.productImage[0]}`}
							      alt="Slide"
							    />
							    </Link>
							    <Carousel.Caption className="carousel-caption">
							    	<h3>{product.name}</h3>
							      	<p>{product.featuredInfo}</p>
							    </Carousel.Caption>
							</Carousel.Item>  
			            )		            					   
					})}	  
				</Carousel>		
			</div>
			</>
		)
	}
}
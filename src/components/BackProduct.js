import React,{Suspense,lazy} from 'react';
import {ProductConsumer1} from '../context';
import Title from './Title';
import FilterProducts from './FilterProducts';
import Banners from './Banners';
import Footer from './Footer';
import ScrollUpButton from "react-scroll-up-button";
import Loader from './Loader';

const BackProductSingle = lazy(() => import('./BackProductSingle'));
const CarouselFeatured = lazy(() => import('./CarouselFeatured'));


export default class BackProduct extends React.Component {

	
	render() {
		return (
      <React.Fragment>
        <ProductConsumer1>
          {value => {

            const {sortedProducts, productsAPI} = value

            return (
              <div className='pb-5'>
                <Banners/>
                <Suspense fallback={
                  <div className='loader-suspense'>
                    <Loader/>
                  </div>
                  }
                >
                <div className='container pb-2'>  
                  <CarouselFeatured/>
                </div>
                <div className='container-fluid'>                                            
                  <Title name='our' title='products'/>
                  <FilterProducts rooms={sortedProducts}/>
                </div>
                <div className='container'> 
                  <div className='row'>                         
                    {productsAPI.length > 0 ? 
                      (
                        productsAPI.map(product => {
                        return <BackProductSingle key={product._id} productsAPI= {product} />;
                        })
                      )
                      :
                      (
                        <div className='container mt-5'>
                          <div className='row'>
                            <div className='col-10 mx-auto text-center'>
                              <h1 className='text-title'>no products available</h1>
                            </div>
                          </div>
                        </div>   
                      )
                    }                  
                  </div>      
                </div>
                </Suspense>
              </div>
            )
          }}
        </ProductConsumer1> 
        <ScrollUpButton/>
        <Footer/>
      </React.Fragment>
		)
	}
}


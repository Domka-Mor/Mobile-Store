import React,{useEffect, useState, useContext,Suspense} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductContext} from '../context';
import Loader from './Loader';

export default function BackProductSingle(props) {

  const context = useContext(ProductContext)
  const {_id, name, price, inCart, productImage} = props.productsAPI;
  const [cardRef,setCardRef] = useState()
  const[visible,setVisible] = useState(false)

  useEffect(()=>{
    let observer;
    if(cardRef && visible !== true){
      observer= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
           if (entry.isIntersecting) {
              setVisible(entry.isIntersecting);
              observer.unobserve(cardRef);
            }
        })
      },
      { threshold: 0.2 }
      )
      observer.observe(cardRef);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(cardRef);
      }
    };
  }, [cardRef, visible])

  return (
    <ProductWrapper className= 'col-9 mx-auto col-md-5 col-lg-3 my-3' ref={setCardRef}>
        <div className= 'card'>         
          <div className= 'img-container p-3' 
            onClick={() => 
              context.handleDetailAPI(_id)
            }>
            {visible ? 
              <>
                <Link to={`/product/${_id}`}>                 
                  {/*<img src={'http://localhost:3000/uploads/1605541890343pool.jpg'} alt='img'/>*/}
                  <Suspense fallback={ 
                    <div className='loader-fit'>
                      <Loader/>
                    </div>}
                  >
                    <img src={`https://shop-mobile-backend.onrender.com/${productImage[0]}`} alt='img' className='img-fit'/>
                  </Suspense>
                </Link>
                {context.token ? (      
                  <button className='cart-btn' 
                    disabled= {inCart ? true : false} 
                    onClick={() => {
                      context.openModalAPI(_id);
                      context.addToCartAPI(_id);
                      context.cartUser(_id);
                    }}>                    
                    {inCart? (
                        <p className='text-capitalize mb-0' disabled> in cart </p>
                      ) : (
                        <i className='fas fa-cart-plus'/>
                    )}
                  </button>
                  ) : (     
                  <Link to='/login'>               
                    <button className='cart-btn'>                         
                        <i className='fas fa-cart-plus'/>                       
                    </button>
                  </Link>
                )}
              </>
             :
              <div className='loader-fit'>
                <Loader/>
              </div>
            }       
          </div>                
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>
              {name}
            </p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>
              {price}
            </h5>
          </div>
        </div>       
    </ProductWrapper>
  );
}


const ProductWrapper = styled.div`
    .card {
      border-color: transparent;
      transition: all 0.5s linear;
      height: 18rem;
      width: auto;
      padding: 0;
      margin: 0;
    }
    .card-footer {
      position: absolute;
      bottom: 0;
      background: white;
      border-top: transparent;
      transition: all 0.5s linear;
      max-height: 3rem;
      width: 100%;
    }
    &:hover {
      .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
    .img-container {
      position: relative;
      overflow: hidden;
      max-height: 17rem;
      background: white;
    }
    .card-img-top {
      transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top{
      transform: scale(1.2);
    }
    .cart-btn{
      position: absolute;
      bottom: 1rem;
      right: 0;
      padding: 0.2rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color:var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 0.5s linear;
    }
    .img-container: hover .cart-btn {
      transform: translate(0,0);
    }
    .cart-btn:hover{
      color: var(--mainBlue);
      cursor: pointer;
    }
`;
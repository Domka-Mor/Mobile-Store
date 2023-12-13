import React,{useEffect, useState, useContext,Suspense} from 'react';
import styled from 'styled-components';
import {ProductContext} from '../../context';
import Loader from '../../components/Loader';

export default function AdminProductSingle(props){

  const context = useContext(ProductContext)
  const [cardRef,setCardRef] = useState()
  const[visible,setVisible] = useState(false)

  const {_id, name, price, company, info, productImage, featured, featuredInfo} = props.productsAPI;

  useEffect(()=>{
    let observer;

    if(cardRef && visible !== true){
      observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setVisible(entry.isIntersecting)
            observer.unobserve(cardRef)
          }
        })
      },
        {threshold: 0.2}
      )
      observer.observe(cardRef)
    }

    return ()=>{
      if(observer && observer.unobserve){
        observer.unobserve(cardRef)
      }
    }
  },[cardRef,visible])

  return (
    <ProductWrapper className= 'col-9 mx-auto col-md-6 col-lg-3 my-3' onClick={() => {context.openModalProduct(_id);}} ref={setCardRef}>  
      <div className= 'card'>
        {visible ?
          <>
            <div className= 'img-container p-2'>               
              {/*<img src={'http://localhost:3000/uploads/1605541890343pool.jpg'} alt='img' className='img-fluid'/>*/}
              <Suspense fallback={
                <div className='loader-fit2'>
                  <Loader/>
                </div>
              }> 
                <img src={`https://shop-mobile-backend.onrender.com/${productImage[0]}`} alt='img' className='img-fit'/>
              </Suspense> 
            </div>
            {/* card footer */}
            <div className='card-footer'>
               <p className='text-uppercase align-self-center mb-1'><strong>model : </strong><span className='text-uppercase text-hover'>{name}</span></p>
               <p className='text-uppercase align-self-center mb-1'><strong>made by : </strong><span className='text-uppercase text-title'>{company}</span></p>
               <p className='text-uppercase text-uppercase align-self-center mb-1'><strong> price : </strong><span className='mr-1 text-bright'>$ {price}</span></p>
               <p className='align-self-center mb-1'><strong className="text-uppercase">product info :</strong> {info}</p>
               {featured ? 
                 (
                   <p className='text-uppercase align-self-center mb-1'><strong>featured :</strong> <i className="fas fa-check-square"></i></p>
                 ) 
                 : 
                 (
                   <p className='text-uppercase align-self-center mb-1'><strong>featured :</strong> <i className="fas fa-window-close"></i></p>
                 )
               }
               <p className='align-self-center mb-1'><strong className="text-uppercase">featured info :</strong> {featuredInfo}</p>
            </div>
          </>
          :
          <div className='loader-fit2'>
            <Loader/>
          </div>
        }  
      </div>
    </ProductWrapper>
  );
}


const ProductWrapper = styled.div`
  .card {
    border-color: white;
    transition: all 0.5s linear;
    max-width: 22rem;
    height: auto;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
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
    max-height: 10rem;
  }
  .img-fit{
    width:100%;
    max-height:10rem;
    object-fit: contain;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }
`;
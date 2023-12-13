import React from 'react';
import {ProductContext} from '../context';
import styled from 'styled-components';


const getUnique = (items,value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default class FilterProducts extends React.Component {


  static contextType = ProductContext;


  render() {

    let types = getUnique(this.context.sortedProducts,'company');
    types = ['All',...types];
    types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
    })
    let {company} = this.context.company;
    let {inCart} = this.context.inCart;
    let {featured} = this.context.featured;


    return (
      <FilterWrapper>
        <div className="container">
          <button className='btn btn-dark' onClick={() => this.context.sortByPriceDesc()}>
            Price: hight-low <i className="fas fa-arrow-circle-down"></i>
          </button>
          <button className='btn btn-dark' onClick={() => this.context.sortByPriceAsc()}>
           price: low-hight <i className="fas fa-arrow-circle-up"></i>
          </button>
          <select name='company' id='company' value={company} className="form-control select" onChange={this.context.handleChange}>{types}</select>
          {(this.context.token && this.context.cartAPI.length !==0) && 
            <div>
                <input type='checkbox' name='inCart' id='inCart' checked={inCart} className="checkbox" onChange={this.context.handleChange}/>
                <label htmlFor='inCart' className="label">In Cart</label>
            </div>
          }
          {(this.context.featuredProducts.length !==0) && 
            <div>
                <input type='checkbox' name='featured' id='featured' checked={featured} className="checkbox" onChange={this.context.handleChange}/>
                <label htmlFor='featured' className="label"> featured </label>
            </div>
          }
        </div>        
      </FilterWrapper>
    )
  }
}

const FilterWrapper = styled.div`
    .container {
      width: 70%;
      margin-top: 5rem;
      margin-bottom: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-transform: capitalize;
    } 
    .btn {
      justify-content: space-around;
      text-transform: capitalize;     
    }   
    .fas {
      padding-left: 0.3rem;  
    }   
    .select {
      background-color: #343a40;
      color: white;
      width: 20%;
    }
    .checkbox {
      margin-top: 0.7rem;
      padding-left: 1rem;
    }
    .label {
      padding-left: 0.3rem;
      color: black;
    }
    .label:hover {
      color: var(--lightBlue);
    }
    .select:hover {
      background-color: black;
      color: var(--lightBlue);
    }
    .btn:hover {
      background-color: black;
      color: var(--lightBlue);
    }
    @media (max-width: 550px){
      .container{
        margin-top: 0;
        margin-bottom: 2rem;
        display: grid;
        align-items: center;
        justify-content: space-around;
      }
      .select {
        width: 90%;
      }
      .btn, .select, .checkbox{
        margin: 0.5rem;
      }
    }
    @media (max-width: 768px){
      .container{
        width: 90%;
        margin-top: 0;
        margin-bottom: 2rem;
        align-items: center;
        justify-content: space-around;
      }
    }
`;
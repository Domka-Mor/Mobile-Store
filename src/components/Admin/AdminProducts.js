import React from 'react';
import {ProductContext} from '../../context';
import AdminProductSingle from './AdminProductSingle';
import AdminModalNewProduct from './AdminModalNewProduct';


export default class BackProduct extends React.Component {


  static contextType = ProductContext;

  
  constructor(props) {
      super(props);
      this.state = {
        show: false
      }
  }


  showModal = () => {
    this.setState({show:true})
  }


  hideModal = () => {
    this.setState({show:false})
  }


  render() {

    return (
      <React.Fragment>       
        <div className='py-3'>
          <div className='container'>
              <div className='text-center'>
                <AdminModalNewProduct/>              
              </div>
            <div className='row'>                 
                {this.context.productsAPI.length > 0 ? 
                  (                       
                    this.context.productsAPI.map(product => {
                      return <AdminProductSingle key={product._id} productsAPI= {product} />;
                    })
                  )                     
                :
                  (                       
                    <div className='container mt-5'>
                      <div className='row'>
                        <div className='col-10 mx-auto text-center'>
                          <h1 className='text-title'>No products available</h1>
                        </div>
                      </div>
                    </div>                          
                  )
                }
            </div>     
          </div>
        </div>
      </React.Fragment>
    )
  }
}


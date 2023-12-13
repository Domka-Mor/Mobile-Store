import React from 'react'

export default function AdminColumms() {
	return (
		<div className= 'container-fluid text-center d-none d-lg-block pt-5'>
          <div className='row'>
            <div className='col-10 mx-auto col-lg-2 text-title'>
              <p className='text-uppercase'>order date: </p>
            </div>
            <div className='col-10 mx-auto col-lg-2 text-title'>
             <p className='text-uppercase'>items: </p>
            </div>
            <div className='col-10 mx-auto col-lg-2 text-title'>
             <p className='text-uppercase'>total: </p>
            </div>
            <div className='col-10 mx-auto col-lg-2 text-title'>
             <p className='text-uppercase'>status: </p>
            </div>
            <div className='col-10 mx-auto col-lg-2 text-title'>
             <p className='text-uppercase'></p>
            </div>
            <div className='col-10 mx-auto col-lg-2 text-title'>
             <p className='text-uppercase'></p>
            </div>
          </div> 
        </div> 
	)
}
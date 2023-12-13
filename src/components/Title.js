import React from 'react'

export default function Title({name,title}) {
	return (
		<div className='container'>
			<div className='row mt-5 d-none d-lg-block'>
				<div className='col-10 mx-auto mt-5 mb-4 text-center text-title'>	
					<h1 className='text-capitalize font-weight-bold'>
						{name} 
						<strong> {title} </strong>
					</h1>
				</div>
			</div>

			<div className='row py-3 d-lg-none'>
				<div className='col-10 mx-auto text-center text-title'>	
					<h1 className='text-capitalize font-weight-bold'>
						{name} 
						<strong> {title} </strong>
					</h1>
				</div>
			</div>
		</div>
	);
}
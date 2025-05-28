import React from 'react'

import img1 from './images/circle.png'
import img2 from './images/mobile.png'

function Footer2() {
  return (
    <>
      <div className='footer-sub-container w-100 justify-content-center m-auto'>
        <div className="container overflow-hidden bg-dark">
          <div className="row gx-6">

            {/* First card */}
            <div className="col-12 col-md-6 mb-3">
              <div className="p-2 border border-success rounded-4 rounded d-flex flex-column flex-md-row align-items-center">
                <img src={img1} className='img-fluid ' alt="address" style={{width:'80px'}} />
                <div className="p-2 w-100">
                  <p className='p-0 mb-0'>Address:</p>
                    <p className='p-0 mb-0'>
                     1st Floor, Swachh Bharat Mission Office, Near Collectorate, Collectorate Road, Indore, Hyderabad 500001 </p>
                  {/* <p className='p-0 mb-0'>address</p>
                  <p className='p-0 mb-0'>address</p> */}
                  </div>
                </div>
              </div>
            

            {/* Second card */}
            <div className="col-12 col-md-6 mb-3">
              <div className="p-2 border border-success rounded-4 rounded d-flex flex-column flex-md-row align-items-center">
                <img src={img2} className='img-fluid ' alt="address" style={{width:'80px'}}/>
                <div className="p-2 w-100">
                  <p className='p-0 mb-0'>Contact</p>
                  {/* {/* <p className='p-0 mb-0'>address</p> */}
                  <p className='p-0 mb-0'>HELPLINE : 104 , 1075 , 0755-2704201,2441419, 4926892</p>
                
              </div>
            </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Footer2

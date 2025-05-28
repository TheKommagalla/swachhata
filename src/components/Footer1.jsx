import React from 'react'
import img1 from './images/mobile.png';
import img2 from './images/save.png';
import img3 from './images/invoice.png';
function Footer1() {
  return (
    <>
       <div className='footer-sub-container w-100 justify-content-cente m-auto  ' >
        <div className=" overflow-hidden">
         <div className="row gx-6">
                <div className="col m-2">
                    
                    <div className="p-2 border border-success rounded-4  d-flex justify-content-center rounded w-100 h-100">
                      <img src={img1} className='image-fluid' style={{width:'50px', height:'50px'}} />
                      <p className="px-2 pt-3 text-center"style={{fontWeight:'bold'}}>Call Us:3331115557</p>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="p-2 border border-success rounded-4  d-flex justify-content-center rounded w-100 h-100">
                      <img src={img2} className='image-fluid' style={{width:'50px', height:'50px'}}  />
                      <p className="px-2 pt-3 text-center"style={{fontWeight:'bold'}}>Download Swatchatta</p>
                    </div>
                </div>
                <div className="col m-2">
                  <div className="p-2 border border-success rounded-4  d-flex justify-content-center rounded w-100 h-100">
                    <img src={img3} className='image-fluid ' style={{width:'50px', height:'50px'}} />
                      <p className="px-2 pt-3 text-center"style={{fontWeight:'bold'}}>Bill Tracking</p>
                    </div>
                </div>
             <div/>
        </div>
        <hr/>

      </div>
    </div>

      
    </>
  )
}

export default Footer1

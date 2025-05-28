import React from 'react'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import End from './End'
import Footer1 from './Footer1'
function FooterTop() {
  return (
    <>
       <div className='footer-sub-container w-100 justify-content-cente m-auto ' >
         <div className="container overflow-hidden bg-dark" >
          <Footer1/>
          <Footer2/>
          <Footer3/>
          <End/>
        </div>
        </div>
   
 
      
    </>
  )
}

export default FooterTop

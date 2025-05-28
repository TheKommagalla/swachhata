import React from 'react'
import img1 from './images/number-1.png'
import img2 from './images/number-2.png'
import img3 from './images/number-3.png'
function RightGoal() {
  return (
    <>
          <div className='right-child border p-4 '  >
                   <p className="ml-4 mt-4 Heading text-center  m-4" style={{ fontWeight:"bold"}}>
                     Goals of 2025
                   </p>
                       <div className="sub-child border border-succes align-items-center p-1 d-flex" style={{width:"100%"}}>
                         <div className='goal  border  align-items-center bg-white' style={{width:"100%"}}>
                           <img src={img1} className='m-auto pt-2'/>
                           <div className='goal-description-container p-auto'>
                             <p className='goal-description text-center'>Ensure Timely Waste Collection.</p>
                           </div>
       
                         </div>    
                       </div>
                       <div className="sub-child border border-succes align-items-center p-1 d-flex" style={{width:"100%"}}>
                         <div className='goal  border  align-items-center bg-white' style={{width:"100%"}}>
                           <img src={img2} className='m-auto pt-2'/>
                           <div className='goal-description-container p-auto'>
                             <p className='goal-description text-center'>Reduce Open Dumping.</p>
                           </div>
       
                         </div>    
                       </div>
                       <div className="sub-child border border-succes align-items-center p-1 d-flex" style={{width:"100%"}}>
                         <div className='goal  border  align-items-center bg-white' style={{width:"100%"}}>
                           <img src={img3} className='m-auto pt-2'/>
                           <div className='goal-description-container p-auto'>
                             <p className='goal-description text-center'>Improve Communication.</p>
                           </div>
       
                         </div>    
                       </div>
            </div>
    </>
  )
}

export default RightGoal

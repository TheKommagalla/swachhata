import React from 'react'
import { useState } from 'react'
import img2 from './images/test_images.jpeg';
import  achievements1 from './images/achievement-1.jpeg';
import  achievements2 from './images/achievement-2.jpeg';
import  achievements3 from './images/achievement-3.jpeg';
import  achievements4 from './images/achievement-4.jpeg';
import  achievements5 from './images/achievement-5.jpeg';

function Achievements() {

    const [active, setActive] = useState('Latest News'); // Default is "Latest News"
  
    const handleButtonClick = (buttonName) => {
      setActive(buttonName); // Change active button
     
      }
  return  (
    <>
        <div className='latest-container p-2 mt-1'>
             <p className="text-center mt-2 Heading" style={{ fontWeight:"bold"}}>
                Achievements
              </p>
           <div className='event-container'>
                 <div className='event-card'>
                   <div className='card-body w-100 h-75 p-1'>
                     <img src={achievements1} alt="img2" className="img-fluid w-100 h-100" />
                      <p className='event-description p-1'>
                        GHMC collected ₹100 crore in a single day through property tax payments. This marks a record-breaking revenue achievement for the civic body.
                    </p>
                   </div>
                  
                 </div> 
         
                 <div className='event-card cursor-pointer'>
                   <div className='card-body w-100 h-75'>
                     <img src={achievements2} alt="img2" className="img-fluid w-100 h-100" />
                      <p className='event-description p-1'>
                        GHMC received an award from the Ministry of Housing and Urban Affairs (MoHUA), Government of India, in recognition of its excellent municipal services and urban management.
                   </p>
                   </div>
                  
                 </div> 
         
                 <div className='event-card'>
                   <div className='card-body w-100 h-75'>
                     <img src={achievements3} alt="img2" className="img-fluid w-100 h-100" />
                        <p className='event-description p-1'>
                          GHMC was honored with a prestigious award by Prime Minister Narendra Modi. The recognition highlights its outstanding contribution to urban cleanliness and governance.
                   </p>
                   </div>
                
                 </div> 
                 
                 <div className='event-card'>
                   <div className='card-body w-100 h-75'>
                     <img src={achievements4} alt="img2" className="img-fluid w-100 h-100" />
                        <p className='event-description p-1'>
                         
                            GHMC launched the "Driver Cum Owner" scheme, providing vehicles and employment to individuals. This initiative promotes self-employment while enhancing waste collection efficiency in the city.
                   </p>
                   </div>
                
                 </div> 
                 
                 <div className='event-card'>
                   <div className='card-body w-100 h-75'>
                     <img src={achievements5} alt="img2" className="img-fluid w-100 h-100" />
                        <p className='event-description p-1'>
                           GHMC has approved a new flagship project that is set to become a central attraction in the city, aiming to boost urban development and enhance public amenities.
                        </p>
                   </div>
                 </div> 
               </div>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    onClick={() => handleButtonClick('Latest Events')}
                    className={`btn btn-outline-success  m-1 ${active === 'View All' ? 'active' : ''}`}
                >
                    View All
                </button>
                </div>
        </div>
    </>
  )
}

export default Achievements

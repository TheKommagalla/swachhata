import React from 'react';
// import img1 from './images/garbage(1).png';
import img2 from './images/test_images.jpeg';
import event1 from './images/event-1.jpeg';
import event2 from './images/event-2.jpeg';
import event3 from './images/event-3.jpg';
import event4 from './images/event-4.jpg';
import event5 from './images/event-5.jpeg';

function Latestevents() {
  return (
    <>
      <div className='event-container'>
        <div className='event-card'>
          <div className='card-body w-100 h-100'>
            <img src={event1} alt="img2" className="img-fluid w-100 h-75 rounded" />
              <p className='event-description p-1'>
            Event description 1
             </p>
          </div>
         
        </div> 

        <div className='event-card'>
          <div className='card-body w-100 h-100'>
            <img src={event2} alt="img2" className="img-fluid w-100 h-75 rounded" />
               <p className='event-description p-1'>
                  Event description 2      
               </p>
          </div>
        </div> 

        <div className='event-card'>
          <div className='card-body w-100 h-100'>
            <img src={event3} alt="img2" className="img-fluid w-100 h-75 rounded" />
              <p className='event-description p-1'>
            Event description 3
          </p>
          </div>
        </div> 
        
        <div className='event-card'>
          <div className='card-body w-100 h-100'>
            <img src={event4} alt="img2" className="img-fluid w-100 h-75 rounded" />
                 <p className='event-description p-1'>
            Event description 4
          </p>
          </div>
        </div> 
        
        <div className='event-card'>
          <div className='card-body w-100 h-100'>
            <img src={event5} alt="img2" className="img-fluid w-100 h-75 rounded" />
                 <p className='event-description p-1'>
                  Event description 5
                </p>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Latestevents;

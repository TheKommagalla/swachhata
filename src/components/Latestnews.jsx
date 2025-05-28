import React from 'react'
// import img1 from './images/garbage.jpg';
import newes1 from './images/news1.png';
import newes2 from './images/news-2.jpeg';
import newes3 from './images/news-3.jpeg';
import newes4 from './images/news-4.jpeg';
import newes5 from './images/test_images.jpeg';


function Latestnews() {
  return (
    <>
                 <div className='event-container'>
                   <div className='event-card'>
                     <div className='card-body w-100 h-75'>
                       <img src={newes1} alt="img2" className="img-fluid w-100 h-100 rounded" />
                          <p className='event-description p-1'>
                             With an aim to create a cleaner and greener environment, the "Swachh Bharat Abhiyan" was launched on October 2, 2014, by the Prime Minister of India, Narendra Modi.  </p>
                     </div>
                  
                   </div> 
           
                   <div className='event-card'>
                     <div className='card-body  w-100 h-75'>
                       <img src={newes2} alt="img2" className="img-fluid w-100 h-100 rounded" />
                        <p className='event-description p-1'>
                        The "Swachh Bharat Abhiyan" has been instrumental in raising awareness about the importance of cleanliness and sanitation. 
                     </p>
                     </div>
                    
                   </div> 
           
                   <div className='event-card'>
                     <div className='card-body  w-100 h-75'>
                       <img src={newes3} alt="img2" className="img-fluid w-100 h-100 rounded" />
                          <p className='event-description p-1'>
                        The "Swachh Bharat Abhiyan" has been a transformative initiative in India, promoting cleanliness and sanitation across the nation.  </p>
                     </div>
                     
                   </div> 
                   
                   <div className='event-card'>
                     <div className='card-body  w-100 h-75'>
                       <img src={newes4} alt="img2" className="img-fluid w-100 h-100 rounded" />
                       <p className='event-description p-1'>
                        The "Swachh Bharat Abhiyan" has been instrumental in raising awareness about the importance of cleanliness and sanitation. </p>
                     </div>
                     
                   </div> 
                   
                   <div className='event-card'>
                     <div className='card-body  w-100 h-75'>
                       <img src={newes5} alt="img2" className="img-fluid  w-100 h-100 rounded" />
                        <p className='event-description p-1'>
                            The "Swachh Bharat Abhiyan" has been a transformative initiative in India, promoting cleanliness and sanitation across the nation.  </p>
                  
                     </div>
                     </div> 
                 </div>
      
    </>
  )
}

export default Latestnews

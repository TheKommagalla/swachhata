import React from 'react';

import img1 from './images/online_bg.jpg';
import Mission from './Mission';
import Vision from './Vision';
import Why from './Why';

function About() {
  return (
    <>
      <div className="position-relative text-white">
        <img
          src={img1}
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          style={{ zIndex: '-1', filter: 'brightness(60%)' }}
          alt="Background"
        />

        <div className="d-flex flex-column justify-content-center align-items-center text-center p-5" style={{ minHeight: '100vh', backgroundColor: 'rgba(0, 123, 255, 0.2)' }}>
          <h1>Swachhata</h1>
          <p className='description p-2'>Swachhatha Municipality App is built with a vision to revolutionize waste management and municipal services by leveraging technology to create cleaner, smarter, and more responsive cities. Our goal is to empower citizens and municipal bodies to work together seamlessly, ensuring timely service, environmental sustainability, and civic responsibility.</p> 
        </div>
      </div>
      <div className=' d-flex border border-success justify-content-center' >
        <Mission/>
        <Vision/>

      </div>
      <Why/>
      
    </>
  );
}

export default About;

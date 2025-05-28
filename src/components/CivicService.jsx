
import React from 'react';
import bg_image from './images/Civic_bg.jpeg';
import img1 from './images/death-certificate.jpg';
import img2 from './images/birth-certificate.jpg';
import img3 from './images/marriage-certificate.jpg';
import img4 from './images/water-tap.jpg';
import img5 from './images/deforestation.jpg';
import img6 from './images/mangement.jpg';
function CivicService() {
  const handleonClick = () => {
        Swal.fire({
            icon: "error",
            title: "NO DATA AVAILABLE",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  return (
   <>    
    <div className='container-fluid p-4 rounded-4 my-2' style={{ maxWidth: '82vw', backgroundColor: '#efefef' }}>
      <p className="px-2 pt-3" style={{ fontWeight: 'bold' }}>CivicService</p>
      <div className="position-relative text-white rounded-4 overflow-hidden" style={{ height: '100vh' }}>
        {/* Background Image */}
        <img
          src={bg_image}
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ zIndex: 1, filter: 'brightness(30%)', objectFit: 'cover' }}
          alt="Background"
        />

        {/* Slider Positioned at Bottom */}
        <div
          className="card-container d-flex px-3 gap-3"
          style={{
            position: 'absolute',
            bottom: '20px',
            left: 0,
            right: 0,
            zIndex: 2,
            overflowX: 'auto',
            paddingBottom: '10px',
          }}
        >
          
                       <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
                        <p className="card-label text-primary">Death Certificate </p>
                        <div className='card-body ' style={{ minWidth: '100px',maxheight: '100px' }}>
                          <img src={img1} alt={`img`} className="img-thumbnail w-100" />
                        </div>
                      </div>
                      <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
                        <p className="card-label text-primary">Birth Certificate </p>
                        <div className='card-body' style={{ minWidth: '100px',maxheight: '100px' }}>
                          <img src={img2} alt={`img`} className="img-thumbnail w-100" />
                        </div>
                      </div>
                      
                      <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
                        <p className="card-label text-primary">Marriage Certificate </p>
                        <div className='card-body' style={{ minWidth: '100px',maxheight: '100px' }}>
                          <img src={img3} alt={`img`} className="img-thumbnail w-100" />
                        </div>
                      </div>
                      <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
                        <p className="card-label text-primary">Tap Connection</p>
                        <div className='card-body' style={{ minWidth: '100px',maxheight: '100px' }}>
                          <img src={img4} alt={`img`} className="img-thumbnail w-100" />
                        </div>
                      </div>
                      
                      <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
                        <p className="card-label text-primary">Approval For Cutting</p>
                        <div className='card-body' style={{ minWidth: '100px',maxheight: '100px' }}>
                          <img src={img5} alt={`img`} className="img-thumbnail w-100" />
                        </div>
                      </div>
                      <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
                        <p className="card-label text-primary">Solid Waste management</p>
                        <div className='card-body' style={{ minWidth: '100px',maxheight: '100px' }}>
                          <img src={img6} alt={`img`} className="img-thumbnail w-100" />
                        </div>
                      </div>
          
      </div>
    </div>
  </div>
          
   </>
       );
    }
export default CivicService;

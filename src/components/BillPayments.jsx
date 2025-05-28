import React from 'react';
import payment_bg from './images/payment_bg.jpg';
import img1 from './images/property_tax.jpg';
import img2 from './images/watertax.jpg';
import img3 from './images/billtrack.jpg';
import img4 from './images/money-bag.jpg';
const handleonClick = () => {
        Swal.fire({
            icon: "error",
            title: "NO DATA AVAILABLE",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
function BillPayments() {
  
  return (
    <div className='container-fluid p-4 rounded-4 my-2' style={{ maxWidth: '82vw', backgroundColor: '#efefef' }}>
      <p className="px-2 pt-3" style={{ fontWeight: 'bold' }}>Online services of Swattcha</p>

      <div className="position-relative text-white rounded-4 overflow-hidden" style={{ height: '100vh' }}>
        {/* Background Image */}
        <img
          src={payment_bg}
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
              <p className="card-label text-da-primary">Property Tax </p>
              <div className='card-body'>
                <img src={img1} alt={`img`} className="img-thumbnail w-100" />
              </div>
            </div>
            <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
              <p className="card-label text-primary">  Water Tax </p>
              <div className='card-body'>
                <img src={img2} alt={`img`} className="img-thumbnail w-100" />
              </div>
            </div>
            
            <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
              <p className="card-label text-primary">Bussines Tax </p>
              <div className='card-body'>
                <img src={img4} alt={`img`} className="img-thumbnail w-100" />
              </div>
            </div>
            
            <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() => handleonClick()}>
              <p className="card-label text-primary">Bill Track</p>
              <div className='card-body'>
                <img src={img3} alt={`img`} className="img-thumbnail w-100" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BillPayments;

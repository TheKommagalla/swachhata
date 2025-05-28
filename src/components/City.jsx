import React from 'react'
import img1 from './images/Telangana_Secretariat.jpg';
import img2 from './images/school.jpg';
import img3 from './images/hotel(1).jpg';
import img4 from './images/train-station.jpg';
import img5 from './images/park.jpg';
import img6 from './images/hospital.jpg';
import img7 from './images/shoppin-bag.jpg';
import img8 from './images/bank.jpg';
function City() {
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
          <div className='container-fluid p-3 rounded-4 my-2' style={{ maxWidth: '86vw', backgroundColor: '#efefef' }}>
            <p className="px-2 " style={{ fontWeight: 'bold' }}>ExploreCity</p>
      
            <div className="position-relative text-white rounded-4 overflow-hidden" style={{ height: '100vh' }}>
              {/* Background Image */}
              <img
                src={img1}
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
               
                  <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }} onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Schools</p>
                    <div className='card-body'>
                      <img src={img2} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
                  <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }}onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Hotels </p>
                    <div className='card-body'>
                      <img src={img3} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
                  
                  <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }}onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Railway station </p>
                    <div className='card-body'>
                      <img src={img4} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
                  <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }}onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Parks</p>
                    <div className='card-body'>
                      <img src={img5} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
                  
                  <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }}onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Hospitals </p>
                    <div className='card-body'>
                      <img src={img6} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
                  <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }}onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Shopping Malls</p>
                    <div className='card-body'>
                      <img src={img7} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
                    <div className='container-card border bg-white rounded p-2' style={{ minWidth: '200px' }}onClick={() =>handleonClick()}>
                    <p className="card-label text-primary ">Banks</p>
                    <div className='card-body'>
                      <img src={img8} alt={`img`} className="img-thumbnail w-100" />
                    </div>
                  </div>
              
              
              </div>
            </div>
          </div>
    </>
  )
}

export default City

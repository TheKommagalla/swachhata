
import { useState } from 'react'
import img1 from './images/garbage.jpg';
import img2 from './images/tanker.jpg';
import img3 from './images/spetic-tanker.jpg';
import img4 from './images/seeding.jpg';
import img5 from './images/tipper.jpg';
import img6 from './images/ambulance.jpg';
function ServiceOnRequest() {
  const handleonClick = () => {
        Swal.fire({
            icon: "error",
            title: "NO DATA AVAILABLE",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    const [active, setActive] = useState('Service On Request'); // Default is "Latest News"
    function handleButtonClick(buttonName) {
        alert(`You clicked the ${buttonName} button!`);
        // Handle button click logic here
        console.log(`${buttonName} button clicked`);
        setActive(buttonName); // Change active button
        }
  return (
    <> 
       <div className='container  text-center ' style={{ maxWidth: '82vw'}}>
           <p className="ml-4 mt-4 Heading text-center" style={{ fontWeight:"bold",marginLeft:"20px"}}>
            ServiceOnRequest          
            </p>
                <div className='card-container d-flex' >  {/* ✅ Added key */}         
                      <div className='container-card border' onClick={handleonClick} > 
                        <p className="card-label text-parimary">Request Vehicle</p>
                        <div className='card-body w-2'>
                          <img src={img1} alt="img2" className="img-thumbnail w-5" />
                        </div>
                      </div>
                      <div className='container-card border' onClick={handleonClick} > 
                        <p className="card-label text-parimary">Request WaterTanker</p>
                        <div className='card-body w-2'>
                          <img src={img2} alt="img2" className="img-thumbnail w-5" />
                        </div>
                      </div>
                      <div className='container-card border' onClick={handleonClick} > 
                        <p className="card-label text-parimary">Request SepticTank Cleaner</p>
                        <div className='card-body w-2'>
                          <img src={img3} alt="img2" className="img-thumbnail w-5" />
                        </div>
                      </div>
                      <div className='container-card border' onClick={handleonClick} > 
                        <p className="card-label text-parimary">Request For Plantation</p>
                        <div className='card-body w-2'>
                          <img src={img4} alt="img2" className="img-thumbnail w-5" />
                        </div>
                      </div>
                      <div className='container-card border' onClick={handleonClick} > 
                        <p className="card-label text-parimary">Request  For CD-Waste</p>
                        <div className='card-body w-2'>
                          <img src={img5} alt="img2" className="img-thumbnail w-5" />
                        </div>
                      </div>
                      <div className='container-card border' onClick={handleonClick} > 
                        <p className="card-label text-parimary">Ambulance</p>
                        <div className='card-body w-2'>
                          <img src={img6} alt="img2" className="img-thumbnail w-5" />
                        </div>
                      </div>
                     
                </div>
                <button
                    type="button"
                    onClick={() => handleButtonClick('Latest Events')}
                    className={`btn btn-outline-success  mx-auto ${active === 'Service On Request' ? 'active' : ''}`}
                > 
                    Service On Request
                </button>
            </div>  
            
    </>
  )
}

export default ServiceOnRequest

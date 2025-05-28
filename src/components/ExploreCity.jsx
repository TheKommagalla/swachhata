import React from 'react'
import img1 from './images/charminar.jpg';
import img2 from './images/hussainSagar.jpg';
import img3 from './images/golconda.jpg';
import TouriestPlaces from './TouriestPlaces';
import City from './City';
import CityData from './CityData';
function ExploreCity() {
  return (
    <>
       <div className='container  text-center ' >
                  {/* <p className="ml-4 mt-4 Heading text-center danger" style={{ fontWeight:"bold",marginLeft:"20px"}}>
                     CURRENTLY NO DATA UNAVAILABLE         
                   </p> */}
                   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                 <img src={img1} className="d-block w-100 h-50" alt="..."/> 
                                 <div class="carousel-caption d-none d-md-block">

                                <h5 className='text-primary'>Charminar</h5>
                               <p className='description p-2'> The Charminar is a historic monument in Hyderabad, built in 1591, known for its four grand minarets and rich cultural heritage.</p>
                              </div>
                              </div>
                           
                            <div className="carousel-item">
                              <img src={img2} className="d-block w-100 h-50" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                <h5 className='text-primary'>Hussain Sagar</h5>
                                <p className='description p-2'> Hussain Sagar is a large artificial lake in Hyderabad, built in 1562, famous for its Buddha statue and scenic beauty.</p>
                                
                                </div>
                            </div>
                            
                             
                            <div className="carousel-item ">
                                <img src={img3} className="d-block w-100 h-50" alt="..."/>
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5 className='text-primary'>Golconda Fort</h5>
                                    <p className='description p-2'>Golconda Fort is a historic fortress in Hyderabad, known for its brilliant architecture, acoustic system, and rich history of the Qutb Shahi dynasty.</p>
                                
                                </div>
                            </div>
        
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
        </div>
             <TouriestPlaces/>
             <City/>
             <CityData/>

       
    </>
  )
}

export default ExploreCity

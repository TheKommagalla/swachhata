import React from 'react'
import img1 from './images/recycle-symbol.png'
import img2 from './images/save-the-planet.png'
import img3 from './images/landfill.png'

function Mission() {
  return (
    <div className='constainer d-flex flex-column  m-auto p-2' style={{ minHeight: '100vh' }}>
            <div className="col-12 col-md-6 mb-3 w-100">
              <p className="px-2 pt-3 text-center" style={{ fontWeight: 'bold' }}>Mission</p>
                       <div className="mission-visin p-2  rounded-4 rounded d-flex flex-column flex-md-row align-items-center mb-2 bg-light" style={{ backgroundColor:'	rgb(255, 255, 255)' , width:'600px'}}  >
                          <img src={img1} className='img-fluid rounded' alt="address" style={{width:'150px'}} />
                          <div className="p-2 ">
                                <p 
                                    className="px-2 pt-3 text-center fw-bold" 
                                    style={{ 
                                      whiteSpace: 'normal',  // allow line breaks
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word'
                                    }}
                                  >
                                    Swachhata’s mission is to recycle waste and keep our surroundings clean for a healthier environment.
                                  </p>
                          </div>
                        </div>
                          <div className="mission-visin p-2  rounded-4 rounded d-flex flex-column flex-md-row align-items-center mb-2 bg-light" style={{ backgroundColor:'	rgb(255, 255, 255)' , width:'600px'}}  >
                          <img src={img2} className='img-fluid rounded' alt="address" style={{width:'150px'}} />
                          <div className="p-2 ">
                                <p 
                                    className="px-2 pt-3 text-center fw-bold" 
                                    style={{ 
                                      whiteSpace: 'normal',  // allow line breaks
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word'
                                    }}
                                  >
                                    Swachhata is the commitment to protect and preserve the environment through cleanliness and sustainable practices. </p>
                          </div>
                        </div>
                           <div className="mission-visin p-2  rounded-4 rounded d-flex flex-column flex-md-row align-items-center mb-2 bg-light" style={{ backgroundColor:'	rgb(255, 255, 255)' , width:'600px'}}  >
                            <img src={img3} className='img-fluid  rounded' alt="address" style={{width:'150px'}} />
                          <div className="p-2 ">
                                <p 
                                    className="px-2 pt-3 text-center fw-bold" 
                                    style={{ 
                                      whiteSpace: 'normal',  // allow line breaks
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word'
                                    }}
                                  >
                                    Swachhata is a mission to keep the environment clean and free from waste.
                                    </p>
                          </div>
                        </div>
                   </div>
              </div>
  )
}

export default Mission

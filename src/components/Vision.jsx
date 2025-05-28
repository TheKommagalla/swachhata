import React from 'react'
import img1 from './images/mangement.png'
import img2 from './images/public-relation.png'
import img3 from './images/india.png'
function Vision() {
  return (
    <div className='constainer d-flex flex-column  m-auto p-2' style={{ minHeight: '100vh' }}>
            <div className="col-12 col-md-6 mb-3 w-100">
                <p className="px-2 pt-3 text-center" style={{ fontWeight: 'bold' }}>Vision</p>
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
                                    To create a clean and sustainable environment where every citizen actively participates in waste management and sanitation.
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
                                      To inspire and empower communities to take ownership of their environment through cleanliness and sustainable practices.
                                      </p>
                            </div>
                        </div>
                         <div className="mission-visin p-2  rounded-4 rounded d-flex flex-column flex-md-row align-items-center mb-2 bg-light" style={{ backgroundColor:'	rgb(255, 255, 255)' , width:'600px'}}  >
                          <img src={img3} className='img-fluid rounded' alt="address" style={{width:'150px'}} />
                          <div className="p-2 ">
                                <p 
                                    className="px-2 pt-3 text-center fw-bold" 
                                    style={{ 
                                      whiteSpace: 'normal',  // allow line breaks
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word'
                                    }}
                                  >
                                    To make India a model nation in cleanliness, ensuring zero pollution and a garbage-free environment for future generations.
                                  </p>
                          </div>
                        </div>
                     </div>
      </div>
  )
}

export default Vision
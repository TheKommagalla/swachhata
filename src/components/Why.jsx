import React from 'react'
import img1 from './images/garbage-1.jpg'
import img2 from './images/garbage-2.jpg'
import Achievements from './Achievements'
function Why() {
  return (
        <>    
                <div className='container d-flex flex-column  m-auto p-2' style={{ minHeight: '50vh' }}>
                    <div className="col-12 col-md-6 mb-3 w-100">
                        <p className="px-2 pt-3 " style={{ fontWeight: 'bold' }}>How existing system work?</p>

                        <div className="p-2 rounded-4 rounded d-flex flex-column flex-md-row mb-2 ">
                            <div className="p-0">
                                <p className='p-2 mb-0 description'>
                                In the current municipal waste management system, many cities still rely on manual processes and outdated methods. Waste collection is often irregular, with no real-time tracking or communication between citizens and municipal staff. Residents have limited ways to raise complaints or request missed pickups, leading to unattended garbage and unhygienic surroundings. The lack of digital infrastructure makes the system inefficient, slow to respond, and difficult to monitor or optimize
                                    </p>
                                    <p className= ' mt-3 p-2 mb-0 description' >
                                   Moreover, there is minimal citizen engagement or awareness about proper waste segregation and recycling practices. Most systems operate in isolation without smart routing, real-time notifications, or efficient feedback loops. This results in mismanagement, increased operational costs, and a negative impact on public health and the environment. The need for a smart, transparent, and technology-driven approach to tackle these challenges is more urgent than ever
                                    </p>
                            </div>
                            <img src={img1} className='img-fluid  rounded rounded-4 ms-auto' alt="address" style={{width: '400px',height: 'auto',maxHeight: '300px'}} />
                        
                        </div>
                            <p className="px-2 pt-3 " style={{ fontWeight: 'bold' }}>How swattchatha solve it?</p>

                                <div className="p-2 rounded-4 rounded d-flex flex-column flex-md-row mb-2 ">
                                    <div className="p-0">
                                        <p className='p-2 mb-0 description'>
                                       Swachhata introduces a smart, technology-driven approach to waste management by connecting citizens directly with municipal services through a user-friendly digital platform. With features like live garbage vehicle tracking, geo-fenced notifications, and request-based pickups, residents can easily know when the vehicle is nearby or request a collection if missed. This ensures timely waste pickup, reduces unattended garbage, and improves overall hygiene. The app also enables real-time complaint registration and service tracking, making the system transparent, accountable, and responsive.
                                            </p>
                                            <p className= ' mt-3 p-2 mb-0 description' >
                                        Furthermore, Swachhata empowers both citizens and municipal staff with data-driven tools to streamline operations. Smart routing helps optimize collection paths, saving time and fuel, while scheduled pickups and acknowledgment systems ensure no request is ignored. By promoting awareness, offering easy access to services, and supporting recycling efforts, Swachhata builds a cleaner, more efficient, and environmentally conscious community — turning waste management into a collaborative effort between people and their local authorities.
                                            </p>
                                    </div>
                                    <img src={img2} className='img-fluid  rounded rounded-4 ms-auto' alt="address" style={{width: '400px',height: 'auto',maxHeight: '300px',}} />

                                </div>
                        {/* Repeat similar blocks as needed */}
                    </div>
                
                </div>
            <Achievements/>    
        </>
  )
}

export default Why

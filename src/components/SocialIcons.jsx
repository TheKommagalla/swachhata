import React from 'react'
import icon1 from './images/youtube-symbol.png'
import icon2 from './images/social.png'
function SocialIcons() {
  return (
    <>
         <div className="col m-2 border border-success rounded-4">
                    <div className="p-2  rounded-4 d-flex justify-content-center rounded">
                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex d-flex-row">
                          <li className="ms-1 m-1"><a className="text-body-secondary" href="#" aria-label="Instagram">
                            <img src={icon1} className='img-fluid' style={{width:'50px', height:'50px'}}/>
                            </a>
                          </li>
                          {/* <li className="ms-1 m-1"><a className="text-body-secondary" href="#" aria-label="Facebook">
                            <img src={icon1} className='img-fluid' style={{width:'50px', height:'50px'}}/></a>
                            </li> */}
                          <li className="ms-1 m-1"><a className="text-body-secondary" href="#" aria-label="Facebook">
                            <img src={icon2} className='img-fluid' style={{width:'50px', height:'50px'}}/></a>
                            </li>
                        
                        </ul>
                      </div>
                    
                    <p className="text-center" style={{ fontWeight: 'bold' }}>Download Swatchatta</p>
          </div>
       
    </>
  )
}

export default SocialIcons

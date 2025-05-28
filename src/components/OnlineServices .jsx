import React from 'react'

import img1 from './images/billpayments_bg.jpg';
import BillPayments from './BillPayments';
import CivicService from './CivicService';
import ServiceOnRequest from './ServiceOnRequest';
function OnlineServices () {
  const handleonClick = () => {
        Swal.fire({
            icon: "error",
            title: "NO DATA AVAILABLE",
            text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  return (
    // <div className='container'>
        <>
          <div className="position-relative text-white" >
                 <img
                   src={img1}
                   className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                   style={{ zIndex: '-1', filter: 'brightness(60%)' }}
                   alt="Background"
                 />
                  <div className="d-flex flex-column justify-content-center align-items-center text-center p-5" style={{ minHeight: '100vh', backgroundColor: 'rgba(94, 210, 117, 0.2)' }}>
                      <h1>Online services of Swattcha</h1>
                      <p className='description p-2'>Swachhata provides a range of convenient online services to make municipal tasks easier for citizens. Users can pay their municipal taxes such as house tax and water tax directly through the app. It also allows residents to apply for various certificates like birth, death, and sanitation certificates, as well as licenses for businesses, shops, and street vendors. In addition, users can file complaints, schedule waste pickups, and track the status of their service requests — all at your tips now.</p> 
      
                    {/* <p className="px-2 pt-3 text-center" style={{ fontWeight: 'bold',fontSize:'50px' }}>Online services of Swattcha</p> */}
                    </div>
                </div> 
             <CivicService/>
             <BillPayments/>
           <ServiceOnRequest/>
    
    </>
  )}
    
export default OnlineServices 

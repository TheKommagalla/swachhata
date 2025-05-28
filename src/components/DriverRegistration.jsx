import React from 'react'
import img from './images/driver(1).png'
import { useNavigate } from 'react-router-dom';

function DriverRegistration() {
  const navigate = useNavigate();
  const HandleRequest = () => {
      navigate("/register/driver-registrationform");
      // alert("Driver Registration is not available yet");
  }
  return (
    <>
       <div className=" justify-content-center align-items-center flex-wrap md-3 m-3">
        <div className="card p-2" style={{width: "300px"}}>
               <p className='text-center '>Driver Registration</p>
               
                    <div className="border border-2 border-success rounded-circle"  >
                        <img src={img} className="card-img-top m-1 rounded-circle" alt="..."/>
                    </div>
                    
                        <button type="button" className="m-1 btn btn-outline-success" onClick={()=>HandleRequest()  }>Register Now</button>
                   
                </div>
        </div>
    </>
  )
}

export default DriverRegistration

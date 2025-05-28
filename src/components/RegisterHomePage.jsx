import React from 'react'
import UserRegisteration from './UserRegisteration'
import DriverRegistration from './DriverRegistration'

function RegisterHomePage() {
  return (
    <>
        <div className="container d-flex justify-content-center align-items-center flex-wrap md-3 p-0 bg-grey">
               <UserRegisteration/>
               <DriverRegistration/>
               

            </div>
      
    </>
  )
}

export default RegisterHomePage

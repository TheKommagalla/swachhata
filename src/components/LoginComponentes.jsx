import React from 'react'
import UserLogin from './UserLogin'
import DriverLogin from './DriverLogin'
import Dashboard from './Dashboard'
function LoginComponentes() {
  return (
    <>
    <div className='container d-flex'>
        <UserLogin/>
        <DriverLogin/>
        {/* <Dashboard/> */}
    </div>
      
    </>
  )
}

export default LoginComponentes

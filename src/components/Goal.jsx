import React from 'react'
import LeftGoal from './LeftGoal.jsx'
import RightGoal from './RightGoal'
// import img1 from './images/number-one.jpg'
function Goal() {
  return (
    <>
       <div className='parent-container d-flex  p-2' > 
          <LeftGoal/>
          <RightGoal/>
       </div>
      
    </>
  )
}

export default Goal

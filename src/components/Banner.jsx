import React from 'react'
// import img from './images/test_images.jpeg'
import img from './images/scheme.jpg'
function Banner() {
  return (
    <>
      <div className='container mt-1'>
          <img src={img} className='image-fluid w-100 h-75 rounded' />
      </div>
    </>
  )
}

export default Banner

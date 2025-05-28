
import React, { useState } from 'react';
import img from './images/team.png';

function DriverRegistrationForm() {
  const [driverPhoto, setDriverPhoto] = useState(null);
  const [licensePhoto, setLicensePhoto] = useState(null);
  const [vehiclePhoto, setVehiclePhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the file uploads here (e.g., FormData, API)
    alert("Driver registered successfully!");
    console.log({ driverPhoto, licensePhoto, vehiclePhoto });
  };

  return (
    <div className='container d-flex flex-wrap justify-content-center align-items-center my-4'>
      {/* Left: Image */}
      <div className='mx-auto border border-2 border-dark rounded-3 '>
        <img src={img} className="img-fluid" alt="driver"  />
      </div>

      {/* Right: Form */}
      <div className='mx-auto border border-2 border-dark rounded-3 w-100 p-3' style={{ maxWidth: "600px" }}>
        <h4 className='text-center text-success mb-3'>Driver Registration</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="firstName" placeholder="First Name" autoComplete='off' required />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" autoComplete='off' required/>
            <label htmlFor="lastName">Last Name</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="phone" placeholder="1234567890" autoComplete='off' required />
            <label htmlFor="phone">Phone Number</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="address" placeholder="Address" autoComplete='off'   required/>
            <label htmlFor="address">Address</label>
            <span className='text-danger small'>* H.No, Ward No, Street mandatory</span>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="license" placeholder="License Number" autoComplete='off'  required />
            <label htmlFor="license">License Number</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="vehicleType" placeholder="Vehicle Type" autoComplete='off'  required />
            <label htmlFor="vehicleType">Vehicle Type (e.g. Auto, Truck)</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="text" className="form-control" id="vehicleNumber" placeholder="Vehicle Number" autoComplete='off'  required/>
            <label htmlFor="vehicleNumber">Vehicle Number</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="number" className="form-control" id="experience" placeholder="Years of Experience" autoComplete='off'  required/>
            <label htmlFor="experience">Driving Experience (in years)</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete='off'  required />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-floating m-2 w-100">
            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete='off'  required/>
            <label htmlFor="password">Password</label>
          </div>

          {/* File Uploads */}
          <div className="m-2 w-100">
            <label className="form-label">Upload / Capture Driver Photo</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              capture="user" // this opens the camera directly on mobile
              onChange={(e) => setDriverPhoto(e.target.files[0])}  required
            />
          </div>


          <div className="m-2 w-100">
            <label className="form-label">Upload License Photo</label>
            <input type="file" className="form-control" accept="image/*" onChange={(e) => setLicensePhoto(e.target.files[0])}  required />
          </div>

          <div className="m-2 w-100">
            <label className="form-label">Upload Vehicle Photo</label>
            <input type="file" className="form-control" accept="image/*" onChange={(e) => setVehiclePhoto(e.target.files[0])}  required/>
          </div>

          <button className="btn btn-success m-2 w-100" type="submit">Register Driver</button>
        </form>
      </div>
    </div>
  );
}

export default DriverRegistrationForm;



import React, { useState } from 'react';
import img from './images/team.png';

function UserRegistrationForm() {
  const [driverPhoto, setDriverPhoto] = useState(null);

  return (
    <>
      <div className='container d-flex flex-wrap justify-content-center align-items-start p-4 gap-4'>
        {/* Image Section */}
        <div className='border border-2 border-dark rounded-3 p-2' style={{ width: "350px" }}>
          <img src={img} className="img-fluid rounded-3" alt="driver" />
        </div>

        {/* Form Section */}
        <div className='border border-2 border-dark rounded-3 p-3 w-100' style={{ maxWidth: '600px' }}>
          <form>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="firstName" placeholder="First Name" autoComplete='off' />
              <label htmlFor="firstName">First Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" autoComplete='off' />
              <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="phone" placeholder="1234567890" autoComplete='off' />
              <label htmlFor="phone">Phone Number</label>
            </div>

            <div className="form-floating mb-1">
              <input type="text" className="form-control" id="address" placeholder="Address" autoComplete='off' />
              <label htmlFor="address">Address</label>
            </div>
            <span className='text-danger ms-1 mb-3 d-block'>* H.No, Ward No, Street mandatory</span>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete='off' />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" autoComplete='off' />
              <label htmlFor="password">Password</label>
            </div>

            {/* Driver Photo Upload / Capture */}
            <div className="mb-3">
              <label className="form-label">Upload / Capture Driver Photo</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                capture="user"
                onChange={(e) => setDriverPhoto(e.target.files[0])}
              />
            </div>

            <button className="btn btn-success w-100 mt-3" type="submit">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegistrationForm;

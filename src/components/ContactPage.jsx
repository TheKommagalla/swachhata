import React from 'react'
import img1 from './images/Telangana_Secretariat.jpg';

function ContactPage() {
  return (
    <>
      <div className="position-relative text-white">
        <img
          src={img1}
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          style={{ zIndex: '-1', filter: 'brightness(60%)' }}
          alt="Background"
        />

        <div className="d-flex flex-column justify-content-center align-items-center text-center p-5" style={{ minHeight: '100vh', backgroundColor: 'rgba(0, 123, 255, 0.2)' }}>
          <h1 className="mb-3">Contact Us</h1>
          <p>If you have any questions, feedback, or need assistance regarding waste collection or our services, we’re here to help.</p>
          <p>📞 Phone: +91-98765-43210</p>
          <p>📧 Email: support@swachhathaapp.in</p>
          <p>🏢 Address: Municipal Office, Secretariat Road, Hyderabad, Telangana – 500022</p>
          <p>Our support team is available from 9:00 AM to 6:00 PM, Monday to Saturday. Feel free to reach out anytime!</p>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

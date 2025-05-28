import React from 'react';

function ContactOfficiers() {
  return (
    <> 
      <div className="d-flex justify-content-center align-items-center flex-wrap md-3">
        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">MAYOR OFFICE</h5>
            <span className="card-text d-block">Address: Municipal Headquarters, Secretariat Road, Hyderabad</span>
            <span className="card-text d-block">Phone: 040-29500000</span>
            <span className="card-text d-block">
              Email: <a href="mailto:mayor@hyderabadmunicipal.gov.in">mayor@hyderabadmunicipal.gov.in</a>
            </span>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">COMMISSIONER OFFICE</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Shri K. Ravindra Kumar, IAS</h6>
            <p className="card-text">Commissioner of GHMC responsible for city operations, sanitation, and public welfare.</p>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">Shri Abhilash Mishra, IAS</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Joint Commissioner, Sanitation</h6>
            <p className="card-text">Oversees waste management initiatives and smart sanitation project implementations.</p>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">Shri Divyank Singh, IAS</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Additional Commissioner (IT & e-Governance)</h6>
            <p className="card-text">Heads digital infrastructure and smart city governance for municipal services.</p>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">Mr. Rohit Sissoniya, IAS</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Deputy Commissioner</h6>
            <p className="card-text">Handles zonal-level sanitation operations and grievance redressal mechanisms.</p>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">Shri Abhay Rajangaonkar</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Chief Engineer</h6>
            <p className="card-text">Responsible for engineering works related to sanitation vehicles and infrastructure.</p>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">Shri Devghar Darwai</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Public Relations Officer</h6>
            <p className="card-text">Handles public communication, awareness campaigns, and media relations.</p>
          </div>
        </div>

        <div className="card m-1 bg-light" style={{ width: "300px", height: "300px" }}>
          <div className="card-body">
            <h5 className="card-title bg-success text-center rounded p-2">Shri Manoj Kumar Pathak</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Head of Waste Management</h6>
            <p className="card-text">Supervises all waste segregation, recycling, and landfill management activities.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactOfficiers;

import React from 'react';

function ContactHelpline() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-stretch flex-wrap gap-2">
        {[
          {
            title: "General Helpline",
            subtitle: "24/7 Support",
            text: "For general queries and assistance related to municipal services.",
            phone: "+91 1800-123-4567",
            email: "helpdesk@municipality.gov.in"
          },
          {
            title: "Waste Management",
            subtitle: "Collection & Disposal",
            text: "Report missed garbage pickups or request bulk waste collection services.",
            phone: "+91 1800-234-5678",
            email: "wastemanagement@municipality.gov.in"
          },
          {
            title: "Water Supply",
            subtitle: "Water Issues & Complaints",
            text: "Report water supply interruptions, leaks, or billing inquiries.",
            phone: "+91 1800-345-6789",
            email: "waterservices@municipality.gov.in"
          },
          {
            title: "Electricity Support",
            subtitle: "Outages & Maintenance",
            text: "Report power outages, streetlight issues, or schedule maintenance.",
            phone: "+91 1800-456-7890",
            email: "electricity@municipality.gov.in"
          },
          {
            title: "Emergency Services",
            subtitle: "Police, Fire & Medical",
            text: "For emergencies: police (100), fire (101), and ambulance (102).",
            phone: "100 / 101 / 102",
            email: "emergency@municipality.gov.in"
          }
        ].map((info, index) => (
          <div key={index} className="card m-1 h-100" style={{ width: "250px", minHeight: "300px" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title bg-success text-center text-dark rounded p-2">{info.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">{info.subtitle}</h6>
                <p className="card-text">{info.text}</p>
              </div>
              <div>
                <p className="card-text mb-1"><strong>Phone:</strong> {info.phone}</p>
                <p className="card-text"><strong>Email:</strong> <a href={`mailto:${info.email}`}>{info.email}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactHelpline;

// NavContent.jsx
import React from 'react';

function NavContent({ content }) {
  return (
    <div className="position-absolute w-100 bg-light border border-top-0 p-3 shadow-sm" style={{ top: '100%', zIndex: 10 }}>
      <div className="container d-flex align-items-center">
       
       
          <p className="mb-0">{content}</p>
      

      </div>
    </div>
  );
}

export default NavContent;

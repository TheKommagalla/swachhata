import React, { useState } from 'react';
import navData from './NavData';
import logo from './images/websitelogo-bg.png'; // Adjust the path as necessary
function Navbar() {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const hoveredItem = hoveredItemIndex !== null ? navData[hoveredItemIndex] : null;

  return (
    <>
      <div className="container-fluid sticky-top p-0">
        <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
          <div className="container bg-white">
            <a href='/' className="navbar-brand text-dark"><img src={logo} alt="logo w-25 " style={{height:'40px'}}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                {navData.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item position-relative"
                    onMouseEnter={() => setHoveredItemIndex(index)}
                    onMouseLeave={() => setHoveredItemIndex(null)}
                  >
                    <a href={item.path} className="nav-link text-dark">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hover Dropdown Content (Only Content) */}
        {hoveredItem && (
          <div
            className="w-100 bg-light border-top shadow-sm position-absolute"
            style={{ top: '100%', left: 0, zIndex: 1050 }}
            onMouseLeave={() => setHoveredItemIndex(null)}
          >
            <div className="container py-3">
              <p className="mb-0">{hoveredItem.content}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

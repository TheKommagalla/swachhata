// NavItem.jsx
import React from 'react';
import NavContent from './NavContent';

function NavItem({ item, index, hoveredIndex, setHoveredIndex }) {
  return (
    <li
      className="nav-item position-relative"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <a href={item.path} className="nav-link text-dark">
        {item.label}
      </a>

      {hoveredIndex === index && (
        <NavContent
          content={item.content}
          sublabel={item.sublabel}
          image={item.image}
        />
      )}
    </li>
  );
}

export default NavItem;

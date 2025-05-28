// components/LazyLoadWrapper.jsx
import React, { useEffect, useRef, useState } from 'react';

const LazyLoadWrapper = ({ children, className = '' }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 1s ease-in-out' }}
    >
      {isVisible && children}
    </div>
  );
};

export default LazyLoadWrapper;

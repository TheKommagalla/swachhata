import React, { useState, useEffect, useRef } from 'react';
import img1 from './images/smartphone.png';

function Appdownloders({ end = 999, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            let start = 0;
            const incrementTime = Math.floor(duration / end);
            const counter = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === end) clearInterval(counter);
            }, incrementTime);
            setHasAnimated(true); // Prevents re-triggering
          }
        },
        {
          threshold: 0.5, // 50% of the element should be visible
        }
      );
  
      if (countRef.current) {
        observer.observe(countRef.current);
      }
  
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [end, duration, hasAnimated]);
  return (
    <div className="col m-2 border border-success rounded-4">
              <div className="p-2  rounded-4 d-flex justify-content-center rounded" ref={countRef}>
                    <img src={img1} className="image-fluid" alt="number-one" style={{width:'50px', height:'50px'}} />
                <p className="m-2 text-success text-center" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {count}
                </p>
              </div>
              <p className="text-center" style={{ fontWeight: 'bold' }}>Download Swatchatta</p>
    </div>
  )
}

export default Appdownloders

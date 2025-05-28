import React, { useState, useEffect, useRef } from 'react';
import Appdownloders from './Appdownloders';
import Complaints from './Complaints';
import Closed from './Closed';
 import Pending from './pending';
// import img1 from '.images/smartphone.png';
// import img2 from '.images/checked.png';
// import img3 from '.images/delete.png';
// import img4 from '.images/warning.png';
function Footer3({ end = 910, duration = 2000 }) {
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
    <div className="container overflow-hidden bg-dark"> 
      <div className="row gx-6">
        {/* <div className="col m-2">
          <div className="p-2 border bg-light justify-content-center rounded" style={{ border: '3px solid green' }}>
            <img src={img1} className="image-fluid justify-content-center" alt="number-one" />
            <p className="px-2 pt-3 text-center" style={{ fontWeight: 'bold' }}>Call Us: 3331115557</p>
          </div>
        </div> */}
      {/* App downloader */}
          <Appdownloders/>
      {/* Complaints */}
            <Complaints/>
      {/* Closed */}
           <Closed/>
      {/* Pending */}
             <Pending/>
        

        
      </div>
      <hr />
    </div>
  );
}

export default Footer3;

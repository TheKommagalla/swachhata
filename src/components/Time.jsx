import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date().toLocaleDateString());
    };
    
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="col m-2 border border-success rounded-4">
        <div className="p-2  rounded-4 d-flex justify-content-center rounded">
          <p className="text-center" style={{ fontWeight: 'bold' }}>{time}</p>
        </div>
        <p className="text-center" style={{ fontWeight: 'bold' }}>{date}</p>
      </div>
    </>
  );
}

export default Time;
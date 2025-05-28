

import { useState } from 'react'
import Latestevents from './Latestevents'
import Latestnews from './Latestnews';

function Latest() {
  const [active, setActive] = useState('Latest News'); // Default is "Latest News"

  const handleButtonClick = (buttonName) => {
    setActive(buttonName); // Change active button
   
    }

  return (
    <>
      <div className='latest-container  p-2'>
        <div className="d-flex justify-content-center align-items-center">
          
          <button
            type="button"
            onClick={() => handleButtonClick('Latest News')}
            className={`btn btn-outline-success m-1 ${active === 'Latest News' ? 'active' : ''}`}
          >
            Latest News
          </button>

          <button
            type="button"
            onClick={() => handleButtonClick('Latest Events')}
            className={`btn btn-outline-success m-1 ${active === 'Latest Events' ? 'active' : ''}`}
          >
            Latest Events
          </button>

        </div>
          {/* Conditionally render components based on active state */}
      {active === 'Latest News' && <Latestnews />}
        {active === 'Latest Events' && <Latestevents />}
      <div className="d-flex justify-content-center align-items-center">
        <button
            type="button"
            onClick={() => handleButtonClick('Latest Events')}
            className={`btn btn-outline-success  m-1 ${active === 'View All' ? 'active' : ''}`}
          >
            View All
          </button>
        </div>

      

      </div>
     
    </>
  );
}

export default Latest;

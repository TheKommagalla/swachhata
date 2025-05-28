import React from 'react'
import CopyRights from './CopyRights'
import Weather from './Weather'
import Time from './Time'
import SocialIcons from './SocialIcons'

function End() {
  return (
    <>
        <div className="footer-sub-container w-100 text-center mt-0">
            <div className="container overflow-hidden bg-dark ">
                 <div className="row gx-6">
                    <CopyRights/>
                    
                    <Time/>
                    {/* <Weather/> */}
                    <SocialIcons/>
                </div>
            </div>
        </div>
    </>
  )
}

export default End

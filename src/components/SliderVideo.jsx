import React from 'react';
import video from './images/bg-video.mp4';
// import './SliderVideo.css'; // Optional if using external CSS

function SliderVideo() {
  return (
    <div className="video-container">
      <video loop muted autoPlay className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SliderVideo;

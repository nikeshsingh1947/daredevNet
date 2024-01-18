import React, { useState } from 'react';
import YouTube from 'react-youtube';
import"./hoverplay.css"
const HoverVideoPlayer = ({ videoId }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const opts = {
    height: '190',
      width: '260',
    playerVars: {
      autoplay: isHovered ? 1 : 0, // Autoplay when hovered
    },
  };

  return (
    <div style={{"background-color":"#2e1f37","align-item":"center","border-radius":"10px"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <YouTube id="vid" videoId={videoId} opts={opts} />
    </div>
  );
};

export default HoverVideoPlayer;

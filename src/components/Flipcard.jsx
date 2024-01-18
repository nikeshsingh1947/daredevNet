// FlipCard.js
import React, { useState } from 'react';
import "./Flipcard.css";
import { Image } from '@chakra-ui/react';
const FlipCard = ({ image,caption,title ,para }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };
 
  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image id='flipcardimage' src={image} alt={"image"}/>
           <div id="captionholder">
          <p>{caption}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h3 >{title}</h3>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

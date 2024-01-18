// RhombusButton.js
import React from 'react';
import './RhombusButton.css';

const RhombusButton = ({ onClick, text }) => {
  return (
    <button className="rhombus-button" onClick={onClick}>
      {text}
    </button>
  );
};
 
export default RhombusButton;

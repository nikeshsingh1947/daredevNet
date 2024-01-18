// FloatingButton.js
import React from 'react';
import './FloatButton.css';

const FloatButton = ({ onClick}) => {
  return (
    <button className="floating-button" onClick={onClick}>
      "REGISTER"
    </button>
  );
};

export default FloatButton;

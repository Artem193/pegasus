import React, { useState } from 'react';
import './explanation.scss';

export const Explanation = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="explanation">
      <div className="explanation__question" onClick={handleToggle}>
        <span className="explanation__title">
          {title}
        </span>
        <span className={`explanation__icon ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="explanation__text">
          {text}
        </div>
      )}
    </div>
  );
};

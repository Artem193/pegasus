import React, { useState } from 'react';
import './explanationQA.scss';

export const ExplanationQA = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="explanationQA">
      <div className="explanationQA__question" onClick={handleToggle}>
        <span className="explanationQA__title">
          {title}
        </span>
        <span className={`explanationQA__icon ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="explanationQA__text">
          {text}
        </div>
      )}
    </div>
  );
};

import React from 'react';
import './stepIndicator.scss';

export const StepIndicator = ({ currentStep }) => {
  const steps = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <div className="stepIndicator">
      {steps.map((step) => (
        <div key={step} className="stepIndicator__item">
          <div
            className={`stepIndicator__circle ${
              currentStep === step ? 'active' : ''
            }`}
          >
            {step}
          </div>
          <div
            className={`stepIndicator__label ${
              currentStep === step ? 'active' : ''
            }`}
          >
            Шаг {step}
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const steps = [
    { label: 'Postcode', active: false, completed: true },
    { label: 'Waste Type', active: false, completed: true },
    { label: 'Select Skip', active: true, completed: false },
    { label: 'Permit Check', active: false, completed: false },
    { label: 'Choose Date', active: false, completed: false },
    { label: 'Payment', active: false, completed: false },
  ];

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`progress-step ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}`}>
              <div className="step-circle">
                {step.completed ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                ) : (
                  <span className="step-number">{index + 1}</span>
                )}
              </div>
              <span className="step-label">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`progress-connector ${step.completed ? 'completed' : ''}`}>
                <div className="connector-line"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
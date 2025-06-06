import React, { useState, useEffect } from 'react';
import SkipCard from '../SkipCard/SkipCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import useSkipsData from '../../hooks/useSkipsData';
import { calculateTotalPrice } from '../../utils/helpers';
import './SkipSelector.css';

const SkipSelector = () => {
  const { skips, loading, error } = useSkipsData();
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    // Add entrance animation
    setAnimateHeader(true);
  }, []);

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip.id === selectedSkip?.id ? null : skip);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      alert(`Selected: ${selectedSkip.size} Yard Skip - £${calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat)}`);
      // Here you would typically navigate to the next page
    }
  };

  if (loading) return <LoadingSpinner />;
  
  if (error && skips.length === 0) {
    return (
      <div className="error-container">
        <div className="error-icon">❌</div>
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="skip-selector-app">
      <ProgressBar />
      
      {/* Fixed Continue Button */}
      {selectedSkip && (
        <div className="fixed-continue-bar">
          <div className="continue-content">
            <div className="selected-info">
              <span className="selected-size">{selectedSkip.size} Yard Skip</span>
              <span className="selected-price">£{calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat)}</span>
            </div>
            <button className="continue-button" onClick={handleContinue}>
              Continue <span className="continue-icon">→</span>
            </button>
          </div>
        </div>
      )}
      
      <div className="main-content">
        <div className={`header-section ${animateHeader ? 'animate-in' : ''}`}>
          <h1>Choose Your Skip Size</h1>
          <p className="subtitle">Select the skip size that best suits your needs</p>
          <div className="location-info">
            <span className="location-icon">📍</span> 
            Delivering to Lowestoft, NR32
          </div>
          
          {/* Theme toggle positioned below the progress bar */}
          <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>
        </div>
        
        <div className="skips-grid">
          {skips.map((skip, index) => (
            <div 
              className="card-wrapper" 
              style={{ animationDelay: `${index * 0.1}s` }}
              key={skip.id}
            >
              <SkipCard
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={handleSkipSelect}
              />
            </div>
          ))}
        </div>
        
        {/* Spacer for fixed button */}
        {selectedSkip && <div className="bottom-spacer"></div>}
      </div>
    </div>
  );
};

export default SkipSelector;
import React from 'react';
import { calculateTotalPrice, getSkipDescription } from '../../utils/helpers';
import './SkipCard.css';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
  
  return (
    <div className={`skip-card ${isSelected ? 'selected' : ''} ${!skip.allowed_on_road ? 'road-restricted' : ''}`}>
      {!skip.allowed_on_road && (
        <div className="restriction-badge">
          ⚠️ Not Allowed On Road
        </div>
      )}
      
      <div className="skip-visual">
        <div className="skip-icon">
          🗃️
        </div>
        <div className="skip-size">{skip.size} Yards</div>
      </div>
      
      <div className="skip-details">
        <h3>{skip.size} Yard Skip</h3>
        <p className="skip-description">{getSkipDescription(skip.size)}</p>
        
        <div className="skip-features">
          <div className="feature">
            <span className="feature-icon">📅</span>
            <span>{skip.hire_period_days} day hire period</span>
          </div>
          
          {skip.allows_heavy_waste && (
            <div className="feature">
              <span className="feature-icon">💪</span>
              <span>Heavy waste allowed</span>
            </div>
          )}
          
          {skip.allowed_on_road && (
            <div className="feature">
              <span className="feature-icon">🛣️</span>
              <span>Road placement OK</span>
            </div>
          )}
        </div>
        
        <div className="pricing">
          <div className="price-breakdown">
            <span className="price-before-vat">£{skip.price_before_vat} + VAT</span>
          </div>
          <div className="total-price">£{totalPrice}</div>
        </div>
        
        <button 
          className={`select-button ${isSelected ? 'selected' : ''}`}
          onClick={() => onSelect(skip)}
          disabled={skip.forbidden}
        >
          {isSelected ? 'Selected ✓' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <button
      className={`theme-toggle ${isAnimating ? 'animating' : ''}`}
      onClick={handleToggleClick}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-track-stars"></div>
        <div className="toggle-track-clouds"></div>
        <div className="toggle-thumb">
          <div className="toggle-icon">
            {isDark ? (
              // Moon icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              // Sun icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5"/>
                <path d="m12 1-1.5 1.5M12 1l1.5 1.5M20 12l1.5-1.5M20 12l1.5 1.5M12 23l-1.5-1.5M12 23l1.5-1.5M4 12l-1.5-1.5M4 12l-1.5 1.5"/>
                <path d="m16.24 7.76 1.42-1.42M16.24 7.76l1.42 1.42M6.34 17.66l-1.42-1.42M6.34 17.66l-1.42 1.42M16.24 16.24l1.42 1.42M16.24 16.24l1.42-1.42M6.34 6.34l-1.42 1.42M6.34 6.34l-1.42-1.42"/>
              </svg>
            )}
          </div>
        </div>
        <span className="mode-label">{isDark ? 'Dark' : 'Light'}</span>
      </div>
    </button>
  );
};

export default ThemeToggle;
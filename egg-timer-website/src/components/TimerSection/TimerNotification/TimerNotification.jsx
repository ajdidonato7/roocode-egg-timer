import React from 'react';
import './TimerNotification.css';

const TimerNotification = ({ isComplete, selectedPreset, onClose }) => {
  if (!isComplete) {
    return null;
  }
  
  return (
    <div className="notification-container">
      <div className="notification">
        <div className="notification-icon">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
        </div>
        <div className="notification-content">
          <h3>Your {selectedPreset.name} eggs are ready!</h3>
          <p>{selectedPreset.description}</p>
        </div>
        <button 
          className="notification-close" 
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
      
    </div>
  );
};

export default TimerNotification;
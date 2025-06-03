import React from 'react';
import './TimerDisplay.css';

const TimerDisplay = ({ timeRemaining, totalTime }) => {
  // Convert seconds to minutes and seconds
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  
  // Calculate progress percentage
  const progressPercentage = ((totalTime - timeRemaining) / totalTime) * 100;
  
  return (
    <div className="timer-display">
      <div className="time-remaining">
        <span className="time-value">{minutes.toString().padStart(2, '0')}</span>
        <span className="time-separator">:</span>
        <span className="time-value">{seconds.toString().padStart(2, '0')}</span>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
        ></div>
      </div>
    </div>
  );
};

export default TimerDisplay;
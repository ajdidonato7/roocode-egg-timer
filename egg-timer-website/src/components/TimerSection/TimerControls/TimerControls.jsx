import React from 'react';
import './TimerControls.css';

const TimerControls = ({ isRunning, isComplete, onStart, onPause, onReset }) => {
  return (
    <div className="timer-controls">
      {!isRunning && !isComplete && (
        <button 
          className="control-button start-button" 
          onClick={onStart}
          aria-label="Start Timer"
        >
          Start
        </button>
      )}
      
      {isRunning && (
        <button 
          className="control-button pause-button" 
          onClick={onPause}
          aria-label="Pause Timer"
        >
          Pause
        </button>
      )}
      
      <button 
        className="control-button reset-button" 
        onClick={onReset}
        aria-label="Reset Timer"
        disabled={!isRunning && !isComplete}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
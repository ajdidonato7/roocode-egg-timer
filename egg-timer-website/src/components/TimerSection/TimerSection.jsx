import React, { useState, useEffect, useRef } from 'react';
import './TimerSection.css';

// Import timer components
import TimerControls from './TimerControls/TimerControls';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerNotification from './TimerNotification/TimerNotification';

// Import timer presets
import timerPresets from '../../data/timerPresets';

const TimerSection = () => {
  // State for selected preset
  const [selectedPresetId, setSelectedPresetId] = useState('medium');
  
  // Get the selected preset object
  const selectedPreset = timerPresets.find(preset => preset.id === selectedPresetId);
  
  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(selectedPreset.time);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Ref for interval
  const timerIntervalRef = useRef(null);
  
  // Effect to handle timer countdown
  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerIntervalRef.current);
            setIsRunning(false);
            setIsComplete(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning && timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    // Cleanup interval on unmount
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [isRunning, timeRemaining]);
  
  // Effect to reset timer when preset changes
  useEffect(() => {
    handleReset();
  }, [selectedPresetId]);
  
  // Timer control handlers
  const handleStart = () => {
    setIsRunning(true);
  };
  
  const handlePause = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setIsComplete(false);
    setTimeRemaining(selectedPreset.time);
  };
  
  const handlePresetChange = (presetId) => {
    setSelectedPresetId(presetId);
  };
  
  const handleNotificationClose = () => {
    setIsComplete(false);
  };
  
  return (
    <section id="timer" className="timer-section">
      <h2>Egg Timer</h2>
      
      <div className="preset-selector">
        {timerPresets.map(preset => (
          <button
            key={preset.id}
            className={`preset-button ${selectedPresetId === preset.id ? 'active' : ''}`}
            onClick={() => handlePresetChange(preset.id)}
          >
            {preset.name}
            <span className="preset-description">{preset.description}</span>
          </button>
        ))}
      </div>
      
      <TimerDisplay 
        timeRemaining={timeRemaining} 
        totalTime={selectedPreset.time} 
      />
      
      <TimerControls 
        isRunning={isRunning} 
        isComplete={isComplete}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
      
      <TimerNotification 
        isComplete={isComplete}
        selectedPreset={selectedPreset}
        onClose={handleNotificationClose}
      />
    </section>
  );
};

export default TimerSection;
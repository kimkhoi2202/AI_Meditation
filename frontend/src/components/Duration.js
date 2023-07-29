import React, { useState } from 'react';
import Button from './Button';

const durations = ['5', '10', '15', '20', '30', '45', '60', '∞'];

function Duration() {
  const [selectedDuration, setSelectedDuration] = useState(null);

  return (
    <div className="quadrant duration">
      <h2>Duration</h2>
      <div className="duration-options">
        {durations.map((duration, index) => (
          <Button
            key={index}
            text={duration}
            isSelected={selectedDuration === duration}
            onClick={() => setSelectedDuration(duration)}
          />
        ))}
      </div>
    </div>
  );
}

export default Duration;
import React, { useState } from 'react';
import Button from './Button';

const voices = ['Rachel', 'Thomas', 'Emily'];

function Voice() {
  const [selectedVoice, setSelectedVoice] = useState(null);

  return (
    <div className="quadrant voice">
      <h2>Voice</h2>
      <div className="voice-options">
        {voices.map((voice, index) => (
          <Button
            key={index}
            text={voice}
            isSelected={selectedVoice === voice}
            onClick={() => setSelectedVoice(voice)}
          />
        ))}
      </div>
    </div>
  );
}

export default Voice;
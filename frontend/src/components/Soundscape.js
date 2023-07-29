import React, { useState, useEffect } from 'react';
import Button from './Button';

const sounds = ['Music', 'Nature', 'Rain', 'Celestial', 'Beach', 'Chimes', 'Storm', 'White Noise'];

function Soundscape() {
  const [selectedSound, setSelectedSound] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const [audioElement, setAudioElement] = useState(null);

  const fetchCombinedAudio = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/combine_audio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          background: selectedSound,
          username: 'test',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the audio file');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const playAudio = () => {
    if (selectedSound && audioSrc) {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
      const newAudioElement = new Audio(audioSrc);
      setAudioElement(newAudioElement);
      newAudioElement.play();
    }
  };

  useEffect(() => {
    playAudio();

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, [audioSrc]);

  return (
    <div className="quadrant soundscape">
      <h2>Soundscape</h2>
      <div className="soundscape-options">
        {sounds.map((sound, index) => (
          <Button
            key={index}
            text={sound}
            isSelected={selectedSound === sound}
            onClick={() => {
              setSelectedSound(sound);
              fetchCombinedAudio();
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Soundscape;

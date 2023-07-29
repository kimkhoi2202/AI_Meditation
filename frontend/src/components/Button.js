import React from 'react';

const SmallButton = ({ text, isSelected, onClick }) => {
  const buttonClass = isSelected ? 'button selected' : 'button';
  return (
    <div className={buttonClass} onClick={onClick}>
      <div className="button-text">
        {text}
      </div>
    </div>
  );
};

export default SmallButton;
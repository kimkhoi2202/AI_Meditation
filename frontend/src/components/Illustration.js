import React from 'react';

const Illustration = () => {
  return (
    <div className="illustration">
      <img src={`${process.env.PUBLIC_URL}/assets/Illustration.png`} alt="Illustration" />
    </div>
  );
};

export default Illustration;
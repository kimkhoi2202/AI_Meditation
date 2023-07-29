import React from 'react';
import LogoTopLeft from './Logo';
import Illustration from './Illustration';

const Header = () => {
    return (
      <div className="header">
        <LogoTopLeft />
        <Illustration />
        <img src={`${process.env.PUBLIC_URL}/assets/New_User.png`} alt="profile" className="profile" />
      </div>
    );
};

export default Header;
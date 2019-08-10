import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt'
import LogoIcon from './Logo-100.png';

const Logo = () => {
  return (
    <div className='ma4 mt0' id="logo">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"> <img src={LogoIcon} alt="Logo"/> </div>
      </Tilt>
    </div>
  );
}

export default Logo;
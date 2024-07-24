import React from 'react';
import './Hero.css';
import ips from '../../assets/Ips.jpg';

const Hero = () => {
  return (
    <div className='container'>
    
      <div className='image'>
      <h1> Welcome to Ips Student Club</h1>
        <img src={ips} alt="VR Experience" />

      </div>
     
    </div>
    
  );
}

export default Hero;

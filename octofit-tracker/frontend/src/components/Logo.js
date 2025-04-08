import React from 'react';
import logo from '../public/octofitapp-small.png';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Octofit Logo" />
      <h1>Octofit</h1>
    </div>
  );
}

export default Logo;

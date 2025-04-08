import React from 'react';

function Logo() {
  return (
    <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/octofitapp-small.png`} alt="Octofit Logo" />
      <h1>Octofit</h1>
    </div>
  );
}

export default Logo;

import React from 'react';
import './HeaderBanner.css';

const HeaderBanner = ({ theme }) => {
  return (
    <div className={`header-banner ${theme}`}>
      <h1 className="name">Dimitrios P. Panagoulias, PhD</h1>
      <p className="subtitle">AI Researcher <span>|</span> MLOps Specialist</p>
    </div>
  );
};

export default HeaderBanner;
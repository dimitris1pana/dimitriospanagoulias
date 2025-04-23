import React from 'react';
import './HeaderBanner.css';

const HeaderBanner = ({ theme }) => {
  return (
    <div className={`header-banner ${theme}`}>
      <h1 className="name">Dimitrios P. Panagoulias, PhD</h1>
      <p className="subtitle">AI Researcher <span>|</span> MLOps Specialist</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/dimitris-panagoulias-17a05217/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span> | </span>
        <a href="https://diskinside.com" target="_blank" rel="noopener noreferrer">Website</a>
        <span> | </span>
        <a href="https://github.com/dimitris1pana" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default HeaderBanner;
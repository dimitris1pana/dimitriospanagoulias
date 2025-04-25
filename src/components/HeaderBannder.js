import React, { useEffect } from 'react';
import './HeaderBanner.css';

const HeaderBanner = ({ theme }) => {
  const [profile, setProfile] = React.useState(null);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/header.json`)
      .then((res) => res.json())
      .then(setProfile)
      .catch((err) => console.error("Error loading profile:", err));
  }, []);
  if (!profile) return null; // or loading state

  return (
    <div className={`header-banner ${theme}`}>
      <h1 className="name">{profile.name}</h1>
      <p className="subtitle">{profile.subtitle}</p>
      <div className="social-links">
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span> | </span>
        <a href={profile.links.website} target="_blank" rel="noopener noreferrer">Website</a>
        <span> | </span>
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">Other</a>
      </div>
    </div>
  );
};

export default HeaderBanner;
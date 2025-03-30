import React from "react";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram   } from "react-icons/ai";

import '../componentCss/ProfileCardCss.css';

export default function ProfileCard({ image, name, designation, socialLinks }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-designation">{designation}</p>
      <div className="social-icons">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle  />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <AiFillInstagram  />
        </a>
      </div>
    </div>
  );
}

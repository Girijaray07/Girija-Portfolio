import React, { useState } from 'react';
import './IconCTAButton.css';

function IconCTAButton({ icon: Icon, label, tooltip, href, external = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="icon-cta-btn"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="icon-cta-icon">
        <Icon size={18} />
      </span>
      <span className={`icon-cta-label ${isHovered ? 'visible' : ''}`}>
        {label}
      </span>
      <span className={`icon-cta-tooltip ${isHovered ? 'visible' : ''}`}>
        {tooltip}
      </span>
    </a>
  );
}

export default IconCTAButton;

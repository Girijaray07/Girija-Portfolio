import React from 'react';
import './MarqueeTicker.css';

const marqueeText = [
  { name: 'Full Stack Developer' },
  { name: 'ML Engineer' },
  { name: 'AI Developer' },
  { name: 'MERN Stack Developer' },
];

function MarqueeTicker() {
  const loopItems = [...marqueeText, ...marqueeText, ...marqueeText]; // duplicate

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {loopItems.map((text, i) => (
          <span key={i} className="ticker-item">{text.name}</span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeTicker;
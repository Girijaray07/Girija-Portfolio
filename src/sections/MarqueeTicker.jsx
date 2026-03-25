import React from 'react';

function MarqueeTicker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {Array(10).fill('Frontend Developer').map((text, i) => (
          <span key={i} className="ticker-item">{text}</span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeTicker;

import React from 'react';
import './PageLoader.css';

/**
 * Styled loading indicator for Suspense fallbacks.
 * Matches the retro design system.
 */
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-inner">
        <div className="page-loader-spinner" />
        <span className="page-loader-text">Loading...</span>
      </div>
    </div>
  );
}

export default PageLoader;

import React from 'react';

const SorryElement = () => (
  <div className="loading-container">
    <h2>{'Sorry. We couldn\'t find an anime that matches this category'}</h2>
    <iframe
      title="Sorry GIF"
      src="https://giphy.com/embed/13LunYkkBppSBa"
      width="480"
      height="245"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
  </div>
);

export default SorryElement;

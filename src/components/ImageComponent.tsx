// src/ImageComponent.js
import React from "react";

const ImageComponent = ({ src, alt }) => {
  const proxyUrl = `http://localhost:3001/image?url=${encodeURIComponent(src)}`;
  return <img src={proxyUrl} alt={alt} />;
};

export default ImageComponent;

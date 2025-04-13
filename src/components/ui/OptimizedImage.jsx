import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  placeholderSrc = '/images/placeholder.jpg'
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect="blur"
      loading={priority ? "eager" : "lazy"}
      placeholderSrc={placeholderSrc}
      wrapperClassName="w-full h-full"
    />
  );
};

export default OptimizedImage;
'use client';

import React, { useState, useEffect, useRef } from 'react';

export function ImageWithFallback({ 
  src, 
  fallbackKeyword = 'business',
  alt, 
  ...props 
}: any) {
  const [errorCount, setErrorCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setErrorCount(0);
  }, [src]);

  useEffect(() => {
    const checkImage = () => {
      if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
        setErrorCount(prev => prev + 1);
      }
    };
    checkImage();
    const timer = setTimeout(checkImage, 1000);
    return () => clearTimeout(timer);
  }, [src, errorCount]);

  let currentSrc = src;
  if (errorCount === 1) {
    currentSrc = `/api/fallback-image?keyword=${encodeURIComponent(fallbackKeyword)}&retry=${errorCount}`;
  } else if (errorCount > 1) {
    currentSrc = `https://placehold.co/800x600/eeeeee/999999?text=${encodeURIComponent(alt || 'Image Unavailable')}`;
  }

  return (
    <img 
      ref={imgRef}
      key={`${src}-${errorCount}`}
      src={currentSrc} 
      alt={alt} 
      onError={() => setErrorCount(prev => prev + 1)} 
      {...props} 
    />
  );
}

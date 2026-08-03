import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  mobileWidth?: number;
  desktopWidth?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  fallbackSrc?: string;
}

/**
 * Optimized Image component with responsive srcset for CDNs (e.g. Unsplash),
 * and clean fallback rendering for local asset imports.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  width,
  height,
  mobileWidth = 480,
  desktopWidth = 1080,
  sizes = '(max-width: 640px) 100vw, 50vw',
  className = '',
  priority = false,
  quality = 80,
  fallbackSrc = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=75',
  style,
  onError,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const isUnsplash = typeof src === 'string' && src.includes('images.unsplash.com');

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (onError) {
      onError(e);
    }
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  const imgClassName = `transition-opacity duration-300 ${
    isLoaded ? 'opacity-100' : 'opacity-80'
  } ${className.includes('object-') || className.includes('w-') || className.includes('h-') ? className : 'w-full h-full object-cover'}`;

  // Standard img element for local static assets (Vite asset imports) or direct URLs
  if (!isUnsplash) {
    return (
      <picture className={`block overflow-hidden ${className.includes('w-') ? '' : 'w-full'} ${className.includes('h-') ? '' : 'h-full'}`} style={style}>
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={imgClassName}
          referrerPolicy="no-referrer"
          {...props}
        />
      </picture>
    );
  }

  // Dynamic formatting for Unsplash image service
  const getUnsplashUrl = (url: string, w: number, formatWebp: boolean = true): string => {
    if (!url) return '';
    const cleanUrl = url.split('?')[0];
    const fm = formatWebp ? '&fm=webp' : '';
    return `${cleanUrl}?auto=format${fm}&fit=crop&q=${quality}&w=${w}`;
  };

  const mobileWebp = getUnsplashUrl(src, mobileWidth, true);
  const desktopWebp = getUnsplashUrl(src, desktopWidth, true);
  const mobileOrig = getUnsplashUrl(src, mobileWidth, false);
  const desktopOrig = getUnsplashUrl(src, desktopWidth, false);

  const webpSrcSet = `${mobileWebp} ${mobileWidth}w, ${desktopWebp} ${desktopWidth}w`;
  const origSrcSet = `${mobileOrig} ${mobileWidth}w, ${desktopOrig} ${desktopWidth}w`;

  return (
    <picture className={`block overflow-hidden ${className.includes('w-') ? '' : 'w-full'} ${className.includes('h-') ? '' : 'h-full'}`} style={style}>
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      <img
        src={currentSrc}
        srcSet={origSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={imgClassName}
        referrerPolicy="no-referrer"
        {...props}
      />
    </picture>
  );
});

OptimizedImage.displayName = 'OptimizedImage';


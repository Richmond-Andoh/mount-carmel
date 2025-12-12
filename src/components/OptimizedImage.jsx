import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage Component
 * 
 * A responsive image component with lazy loading, proper aspect ratio handling,
 * and loading states for better performance and user experience.
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Responsive srcset for different screen sizes
 * - Loading skeleton/placeholder
 * - Error handling with fallback images
 * - Prevents layout shift with aspect ratio
 */
const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    loading = 'lazy',
    fallbackSrc = '/images/placeholder.jpg',
    objectFit = 'cover',
    priority = false,
    sizes = '100vw',
    onLoad,
    onError,
    style = {}
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(priority ? src : null);
    const imgRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        // If priority is true, load immediately
        if (priority) {
            setCurrentSrc(src);
            return;
        }

        // Use Intersection Observer for lazy loading
        if (!observerRef.current && imgRef.current) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setCurrentSrc(src);
                            if (observerRef.current && imgRef.current) {
                                observerRef.current.unobserve(imgRef.current);
                            }
                        }
                    });
                },
                {
                    rootMargin: '50px', // Start loading 50px before the image enters viewport
                    threshold: 0.01
                }
            );

            observerRef.current.observe(imgRef.current);
        }

        return () => {
            if (observerRef.current && imgRef.current) {
                observerRef.current.unobserve(imgRef.current);
            }
        };
    }, [src, priority]);

    const handleLoad = (e) => {
        setIsLoaded(true);
        setHasError(false);
        if (onLoad) onLoad(e);
    };

    const handleError = (e) => {
        setHasError(true);
        setCurrentSrc(fallbackSrc);
        if (onError) onError(e);
    };

    // Calculate aspect ratio for preventing layout shift
    const aspectRatio = width && height ? (height / width) * 100 : null;

    return (
        <div
            ref={imgRef}
            className={`optimized-image-wrapper ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                ...(aspectRatio && { paddingBottom: `${aspectRatio}%` }),
                ...style
            }}
        >
            {/* Loading skeleton */}
            {!isLoaded && !hasError && (
                <div
                    className="image-skeleton"
                    style={{
                        position: aspectRatio ? 'absolute' : 'relative',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: aspectRatio ? '100%' : height || '100%',
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite'
                    }}
                />
            )}

            {/* Actual image */}
            {currentSrc && (
                <img
                    src={currentSrc}
                    alt={alt}
                    loading={loading}
                    sizes={sizes}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
                    style={{
                        position: aspectRatio ? 'absolute' : 'relative',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: objectFit,
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                />
            )}

            {/* Shimmer animation styles */}
            <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .optimized-image {
          display: block;
        }

        .optimized-image.loading {
          opacity: 0;
        }

        .optimized-image.loaded {
          opacity: 1;
        }
      `}</style>
        </div>
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    loading: PropTypes.oneOf(['lazy', 'eager']),
    fallbackSrc: PropTypes.string,
    objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
    priority: PropTypes.bool,
    sizes: PropTypes.string,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    style: PropTypes.object
};

export default OptimizedImage;

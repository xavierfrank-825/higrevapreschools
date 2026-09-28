import { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, alt, className = '', placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"%3E%3Crect fill="%23f0f0f0" width="16" height="9"/%3E%3C/svg%3E' }) {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;

    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef);
    }
    return () => observer?.disconnect();
  }, [imageRef, imageSrc, placeholder, src]);

  return (
    <img
      ref={(ref) => {
        imgRef.current = ref;
        setImageRef(ref);
      }}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      style={{
        transition: 'opacity 0.3s ease',
        opacity: imageSrc === placeholder ? 0.5 : 1,
      }}
    />
  );
}

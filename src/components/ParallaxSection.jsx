import { useEffect, useRef, useState } from 'react';

export default function ParallaxSection({ children, speed = 0.5, className = '' }) {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const elementOffset = window.innerHeight - rect.top;
      const newOffset = elementOffset * speed;
      
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        transform: `translateY(${offset * 0.5}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
}

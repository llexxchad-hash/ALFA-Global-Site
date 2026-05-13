'use client';

import { useEffect, useRef, useState } from 'react';

const HIDDEN_CLASS = {
  up:    'aos-hidden',
  down:  'aos-fade-down',
  left:  'aos-slide-left',
  right: 'aos-slide-right',
  zoom:  'aos-zoom-in',
};

export default function AnimateOnScroll({ children, className = '', delay = 0, animation = 'up' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const hiddenClass = HIDDEN_CLASS[animation] || 'aos-hidden';

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'aos-visible' : hiddenClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

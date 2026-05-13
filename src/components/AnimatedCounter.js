'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 1500 }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function animate() {
    const numericValue = parseInt(value, 10);

    // If the value isn't a pure number, just reveal it
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue);
      setDisplayValue(current.toString());

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  return <span ref={ref}>{displayValue}</span>;
}

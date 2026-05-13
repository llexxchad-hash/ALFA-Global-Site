'use client';

import { useEffect, useRef, useCallback } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;

    const getWidth = () => canvas.offsetWidth || 400;

    const initGlobe = () => {
      if (globeRef.current) return;

      const width = getWidth();

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta: 0.15,
        dark: 0,
        diffuse: 1.4,
        mapSamples: width < 500 ? 12000 : 20000,
        mapBrightness: 5,
        baseColor: [0.90, 0.85, 0.75],
        markerColor: [0.78, 0.60, 0.12],
        glowColor: [0.88, 0.82, 0.65],
        markers: [
          { location: [6.4281, -9.4295], size: 0.06 },
          { location: [5.6037, -0.1870], size: 0.04 },
          { location: [-1.2921, 36.8219], size: 0.04 },
          { location: [6.5244, 3.3792], size: 0.04 },
          { location: [-33.9249, 18.4241], size: 0.04 },
          { location: [9.0820, 7.4951], size: 0.04 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.004;
          const w = getWidth();
          state.width = w * dpr;
          state.height = w * dpr;
        },
      });

      setTimeout(() => {
        if (canvas) canvas.style.opacity = '1';
      }, 100);
    };

    // Small delay to ensure canvas is mounted and sized
    const timer = setTimeout(initGlobe, 50);

    const onResize = () => {
      // cobe handles resize via onRender state updates
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(timer);
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="globe-container">
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'opacity 1s ease',
        }}
      />
      <div className="globe-glow-ring" />
    </div>
  );
}

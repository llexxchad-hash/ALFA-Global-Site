'use client';

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouse = { x: null, y: null };

    const mobile = () => window.innerWidth < 768;
    const COUNT = () => (mobile() ? 28 : 58);
    const CONNECT = () => (mobile() ? 88 : 130);

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.spawn();
      }
      spawn() {
        const w = canvas.width;
        const h = canvas.height;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        const spd = (mobile() ? 0.28 : 0.42) * (0.5 + Math.random() * 0.7);
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * spd;
        this.vy = Math.sin(angle) * spd;
        this.r = Math.random() * 1.4 + 0.4;
        this.gold = Math.random() > 0.68;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        const w = canvas.width;
        const h = canvas.height;
        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
        if (this.y < -10) this.y = h + 10;
        if (this.y > h + 10) this.y = -10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.gold
          ? 'rgba(154,120,21,0.80)'
          : 'rgba(26,54,104,0.60)';
        ctx.fill();
      }
    }

    const drawLines = () => {
      const dist = CONNECT();
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            const op = (1 - d / dist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(26,54,104,${op})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        // Gold lines to mouse on desktop
        if (mouse.x !== null && !mobile()) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 170) {
            const op = (1 - d / 170) * 0.48;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(154,120,21,${op})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
    };

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      animId = requestAnimationFrame(frame);
    };

    const init = () => {
      setSize();
      particles = Array.from({ length: COUNT() }, () => new Particle());
    };

    const onResize = () => {
      setSize();
      const target = COUNT();
      while (particles.length < target) particles.push(new Particle());
      if (particles.length > target) particles.length = target;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = null; mouse.y = null; };

    init();
    frame();

    window.addEventListener('resize', onResize, { passive: true });
    const section = canvas.parentElement;
    section?.addEventListener('mousemove', onMouseMove, { passive: true });
    section?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      section?.removeEventListener('mousemove', onMouseMove);
      section?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}

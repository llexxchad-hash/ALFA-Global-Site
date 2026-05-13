'use client';

import { useState, useEffect, useRef } from 'react';

const PHRASES = [
  { pre: 'Building Digital ', gold: 'Innovation', post: ' Across Africa' },
  { pre: 'Powering ', gold: 'Next-Gen', post: ' Enterprise' },
  { pre: 'Driving ', gold: 'Pan-African', post: ' Growth' },
];

export default function HeroHeading() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);
  const timer = useRef(null);

  const phrase = PHRASES[idx];
  const full = phrase.pre + phrase.gold + phrase.post;

  useEffect(() => {
    if (!deleting && chars < full.length) {
      timer.current = setTimeout(() => setChars(c => c + 1), 48);
    } else if (!deleting && chars === full.length) {
      timer.current = setTimeout(() => setDeleting(true), 2600);
    } else if (deleting && chars > 0) {
      timer.current = setTimeout(() => setChars(c => c - 1), 24);
    } else if (deleting && chars === 0) {
      setDeleting(false);
      setIdx(i => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(timer.current);
  }, [chars, deleting, full.length]);

  useEffect(() => {
    const id = setInterval(() => setCursor(c => !c), 520);
    return () => clearInterval(id);
  }, []);

  // Slice displayed text, apply gold to the highlighted word range
  const text = full.slice(0, chars);
  const preEnd = phrase.pre.length;
  const goldEnd = preEnd + phrase.gold.length;

  const before = text.slice(0, Math.min(chars, preEnd));
  const gold = chars > preEnd ? text.slice(preEnd, Math.min(chars, goldEnd)) : '';
  const after = chars > goldEnd ? text.slice(goldEnd) : '';

  return (
    <h1 className="animate-fade-in-up">
      {before}
      {gold && <span className="text-gold-gradient">{gold}</span>}
      {after}
      <span className="hero-cursor" style={{ opacity: cursor ? 1 : 0 }}>|</span>
    </h1>
  );
}

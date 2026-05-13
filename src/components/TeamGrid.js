'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function TeamGrid({ members }) {
  const [selected, setSelected] = useState(null);

  // Close on Escape key
  useEffect(() => {
    if (!selected) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selected]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      <div className="team-grid">
        {members.map((member) => (
          <div
            key={member.name}
            className={`team-card${member.featured ? ' featured' : ''}`}
          >
            {/* Photo area */}
            <div className="team-photo-wrap">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="team-photo-img"
                  style={{ objectPosition: member.imagePosition || 'center top' }}
                />
              ) : (
                <div className={`team-avatar ${member.color || 'charcoal'}`}>
                  {member.initials}
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="team-card-body">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <button
                className="team-learn-more"
                onClick={() => setSelected(member)}
                aria-label={`Learn more about ${member.name}`}
              >
                Learn More <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bio Modal — rendered in <body> via portal to avoid ancestor transform containing block */}
      {selected && typeof document !== 'undefined' && createPortal(
        <div
          className="bio-modal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} profile`}
        >
          <div
            className="bio-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Always-visible close button */}
            <button
              className="bio-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bio-modal-header">
              <div className="bio-modal-photo-wrap">
                {selected.image ? (
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={80}
                    height={80}
                    className="bio-modal-photo"
                    style={{ objectFit: 'cover', objectPosition: selected.imagePosition || 'center top' }}
                  />
                ) : (
                  <div
                    className={`team-avatar ${selected.color || 'charcoal'}`}
                    style={{ width: 80, height: 80, borderRadius: '50%', fontSize: 22, flexShrink: 0 }}
                  >
                    {selected.initials}
                  </div>
                )}
              </div>
              <h2 className="bio-modal-name">{selected.name}</h2>
              <p className="bio-modal-role">{selected.role}</p>
              <div className="bio-modal-divider" />
            </div>

            {/* Body */}
            <p className="bio-modal-text">{selected.bio}</p>
          </div>
        </div>
      , document.body)}
    </>
  );
}

'use client';

import { useState } from 'react';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${formData.name} — ALFA Global Website`,
          from_name: 'ALFA Global Website',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try emailing us directly at alfagloballtd4@gmail.com');
      }
    } catch {
      setError('Unable to send message. Please email us directly at alfagloballtd4@gmail.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">Get in Touch</span>
          <h1 className="section-title animate-fade-in-up">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ══════ CONTACT CONTENT ══════ */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 96 }}>
        <div className="container">
          <div className="contact-layout">

            {/* ── Left: Contact Form ── */}
            <div className="contact-form-card">
              <h2>Send a Message</h2>
              <p>Fill out the form and we&apos;ll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We&apos;ll be in touch within 24–48 hours.</p>
                  <button className="form-reset-btn" onClick={() => setSubmitted(false)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-field">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="form-input"
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're thinking..."
                      className="form-input form-textarea"
                    />
                  </div>

                  {error && (
                    <p className="form-error">{error}</p>
                  )}

                  <button type="submit" disabled={sending} className="form-submit">
                    {sending ? (
                      <>
                        <svg className="spinner" viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18 }}>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" style={{ opacity: 0.25 }} />
                          <path d="M12 2C6.48 2 2 6.48 2 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16 }}>
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Right: Contact Info ── */}
            <div className="contact-info">

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3 5L10 10L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3>Email</h3>
                <p><a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a></p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 18C10 18 16 13 16 9C16 5.68629 13.3137 3 10 3C6.68629 3 4 5.68629 4 9C4 13 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3>Registered In</h3>
                <p>Republic of Liberia</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="7" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 7V5C7 3.89543 7.89543 3 9 3H11C12.1046 3 13 3.89543 13 5V7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 11H17" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3>Company</h3>
                <p>ALFA Global Ltd</p>
              </div>

              <div className="contact-note">
                <p>We typically respond within 24–48 hours on business days. For urgent matters, please note it in your message.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

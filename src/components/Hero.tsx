import React from 'react';
import { theme } from '../theme';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        scrollMarginTop: '100px',
        width: '100%',
        minWidth: 0,
        minHeight: 'calc(100vh - 24px)',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(110px, 12vh, 130px) 0 clamp(1rem, 3vw, 1.5rem) 0',
        background: theme.colors.background,
        color: theme.colors.text,
        boxSizing: 'border-box',
        overflow: 'visible',
        flexDirection: 'column',
      }}
    >
      {/* Faint background accent in lower-left */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 'clamp(200px, 40vw, 300px)',
          height: 'clamp(200px, 40vw, 300px)',
          background: 'rgba(59,130,246,0.10)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      
      {/* Main Content Container */}
      <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2rem)', boxSizing: 'border-box' }}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'clamp(1rem, 2vw, 1.4rem)', zIndex: 2, width: '100%', margin: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 9999, background: 'rgba(41,112,255,0.12)', border: `1px solid rgba(41,112,255,0.24)` }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: theme.colors.green, display: 'inline-block' }} />
            <span style={{ color: theme.colors.lightGray, textTransform: 'uppercase', letterSpacing: '0.28em', fontWeight: 700, fontSize: '0.7rem' }}>
              Available for new opportunities
            </span>
          </div>

          <div style={{ maxWidth: 820 }}>
            <h4 style={{ margin: 0, fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 900, lineHeight: 1.02 }}>
              Fullstack Developer
              <br />
              Building Scalable Web, Mobile & Software Solutions
            </h4>
            <p style={{ margin: '18px auto 0', maxWidth: 640, color: theme.colors.softGray, fontSize: 'clamp(1.05rem, 2vw, 1.1rem)', lineHeight: 1.65 }}>
              I design and build scalable software solutions that transform ideas into powerful digital products. I bridge the gap between complex backend systems and intuitive, user-focused interfaces, delivering web and mobile applications that are secure, efficient, and built for growth. My focus is not just writing code, but creating reliable solutions that solve real business problems, improve user experiences, and help brands turn their vision into reality.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://wa.me/2348138091650"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                borderRadius: 12,
                background: theme.colors.accent,
                color: theme.colors.white,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(41,112,255,0.18)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get in Touch →
            </a>
            <a
              href="/maruff_CV.pdf"
              download="maruff_CV.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                borderRadius: 12,
                border: `1px solid ${theme.colors.accent}`,
                background: 'transparent',
                color: theme.colors.text,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(41,112,255,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Download CV
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: 1020, marginTop: '0.9rem' }}>
            {[
              { value: '5+', label: 'Years Experience', detail: 'Industry-standard best practices' },
              { value: '', label: 'Software Solutions Development', detail: 'Scalable web, mobile, and business application delivery.' },
              { value: '', label: 'End-to-End Delivery', detail: 'Architecture, APIs, UI, and deployment' },
            ].map((item) => (
              <div key={item.label} style={{ padding: '0.55rem', borderRadius: 18, background: theme.colors.mediumGray, border: `1px solid ${theme.colors.border}`, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}>
                <p style={{ margin: 0, fontSize: 'clamp(1.1rem, 3vw, 1.45rem)', fontWeight: 800, color: theme.colors.text }}>
                  {item.value}
                </p>
                <p style={{ margin: '0.35rem 0 0', color: theme.colors.text, fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  {item.label}
                </p>
                <p style={{ margin: '0.5rem 0 0', color: theme.colors.lightGray, fontSize: '0.85rem', lineHeight: 1.4 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



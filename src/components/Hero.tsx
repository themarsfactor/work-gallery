import React from 'react';
import { theme } from '../theme';

export const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="hero-section"
      style={{
        scrollMarginTop: '100px',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 'clamp(120px, 16vh, 140px) clamp(1rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 3vw, 2rem)',
        background: theme.colors.background,
        color: theme.colors.white,
        boxSizing: 'border-box',
        overflow: 'hidden',
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
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(240px, 360px)', gap: 'clamp(0.5rem, 1vw, 0.75rem)', alignItems: 'center', zIndex: 2, width: '100%', margin: 0 }}>
        {/* Left: Headline and Description */}
        <div style={{ maxWidth: 'clamp(280px, 90vw, 600px)', zIndex: 2, flex: '1 1 100%', minWidth: 0 }}>
          <div style={{ marginBottom: 'clamp(12px, 2vw, 16px)' }}>
            <span
              style={{
                background: theme.colors.mediumGray,
                color: theme.colors.softGray,
                fontSize: 'clamp(11px, 2vw, 13px)',
                borderRadius: 16,
                padding: '4px 16px',
                letterSpacing: 1,
                fontWeight: 500,
              }}
            >
              Available for new projects
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 7vw, 3.2rem)', fontWeight: 700, margin: 0, lineHeight: 1.1, marginBottom: 'clamp(12px, 2vw, 24px)' }}>
            Fullstack <span style={{ color: theme.colors.accent }}>Developer</span> <br/>
            <span style={{ fontStyle: 'italic', fontSize: 'clamp(1.4rem, 5vw, 2.5rem)' }}> Building Scalable Web Applications</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', margin: 'clamp(16px, 3vw, 24px) 0 clamp(20px, 3vw, 32px) 0', color: theme.colors.softGray }}>
            Hey, I'm Maruff <span role="img" aria-label="waving hand">👋</span>. I bridge the gap between complex backend logic and pixel-perfect interfaces, building scalable applications that users actually love.
          </p>
          
          <div style={{ display: 'flex', gap: 'clamp(12px, 2vw, 16px)', flexWrap: 'wrap' }}>
            <a
              href="/maruff_CV.pdf"
              download="maruff_CV.pdf"
              style={{
                background: theme.colors.accent,
                color: theme.colors.white,
                padding: 'clamp(8px, 2vw, 10px) clamp(16px, 3vw, 20px)',
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.2s',
                minWidth: 'clamp(130px, auto, none)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(41, 112, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              Download CV
            </a>
            <a
              href="https://wa.me/2348138091650"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: theme.colors.accent,
                padding: 'clamp(8px, 2vw, 10px) clamp(16px, 3vw, 20px)',
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                border: `2px solid ${theme.colors.accent}`,
                transition: 'all 0.2s',
                minWidth: 'clamp(130px, auto, none)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(41, 112, 255, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Get in Touch
            </a>
          </div>
          
          <div style={{ display: 'flex', gap: 'clamp(20px, 5vw, 32px)', marginTop: 'clamp(24px, 4vw, 32px)', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'clamp(20px, 3vw, 32px)' }}>
            <div>
              <p style={{ fontSize: 'clamp(1.8rem, 4vw, 2rem)', fontWeight: 700, margin: 0 }}>50+</p>
              <p style={{ color: theme.colors.softGray, margin: 0, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Projects Done</p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1.8rem, 4vw, 2rem)', fontWeight: 700, margin: 0 }}>5+</p>
              <p style={{ color: theme.colors.softGray, margin: 0, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Years Experience</p>
            </div>
          </div>
        </div>
        
        {/* Right: Hero Visual - Hidden on Mobile */}
        <div className="hero-visual" style={{ position: 'relative', width: 'clamp(260px, 70vw, 360px)', height: 'clamp(260px, 70vw, 360px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 auto', minWidth: '220px' }}>
          {/* Rotating Dashed Ring */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px dashed rgba(255,255,255,0.2)',
              borderRadius: '50%',
              animation: 'rotateSkills 20s linear infinite',
              zIndex: 1,
            }}
          />
          {/* Top-right Square Accent */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '96px',
              height: '96px',
              border: '2px solid rgba(59,130,246,0.3)',
              borderRadius: 12,
              transform: 'rotate(12deg)',
              zIndex: 0,
            }}
          />
          {/* Bottom-left Circle Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              width: '128px',
              height: '128px',
              border: '2px solid rgba(167,139,250,0.2)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
          {/* Floating Image */}
          <div
            style={{
              position: 'relative',
              width: '85%',
              height: '85%',
              animation: 'float 6s ease-in-out infinite',
              zIndex: 2,
              boxShadow: '0 0 50px -10px rgba(59,130,246,0.3)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.05)',
              background: '#171717',
            }}
          >
            <img
              alt="Maruff - Fullstack Developer"
              src="/pro.png"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                filter: 'grayscale(1)',
                transition: 'filter 0.7s, transform 0.7s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = 'grayscale(0)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = 'grayscale(1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          {/* Tech Floating Tags */}
          <div
            style={{
              position: 'absolute',
              right: '-16px',
              top: '25%',
              background: '#171717cc',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 18px',
              borderRadius: 16,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              zIndex: 3,
              fontSize: 'clamp(11px, 2vw, 14px)',
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#3b82f6' }}>React.js</span>
          </div>
          <div
            style={{
              position: 'absolute',
              left: '-16px',
              bottom: '25%',
              background: '#171717cc',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 18px',
              borderRadius: 16,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              zIndex: 3,
              fontSize: 'clamp(11px, 2vw, 14px)',
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#7B61FF' }}>Node.js</span>
          </div>
          <div
            style={{
              position: 'absolute',
              right: '40px',
              bottom: '-16px',
              background: '#171717cc',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 18px',
              borderRadius: 16,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              zIndex: 3,
              fontSize: 'clamp(11px, 2vw, 14px)',
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#1ED760' }}>Cloud</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



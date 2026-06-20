import React from 'react';
import { theme } from '../theme';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
        width: '100%',
        minWidth: 0,
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: theme.colors.accent,
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              About Me
            </p>
           
            <div style={{ display: 'grid', gap: '1.25rem', color: theme.colors.lightGray, lineHeight: 1.8, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
              <p>
                I am a Fullstack Developer specializing in building scalable web, mobile, and software solutions. I focus on designing robust backend systems, developing RESTful APIs, and creating responsive, user-centered interfaces that deliver real business value.
              </p>
              <p>
                My expertise spans full-stack development using technologies such as React, Node.js, Express.js, PHP, Laravel, and both SQL and NoSQL databases including MySQL, MongoDB, and Firebase. I also work with API architectures, system integration, and performance-focused application design.
              </p>
              <p>
                I have experience building complete end-to-end applications, from database design and backend development to frontend implementation and deployment. My background in networking and cybersecurity also influences how I design secure, reliable, and scalable systems.
              </p>
              <p>
                This portfolio showcases my work across web, mobile, and software solutions, and reflects my goal of building impactful digital products that solve real-world problems and support business growth.
              </p>
            </div>
          </div>

          <div
            className="about-image-card"
            style={{
              width: '100%',
              borderRadius: 32,
              overflow: 'hidden',
              border: `1px solid ${theme.colors.border}`,
              background: theme.colors.mediumGray,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.18)',
            }}
          >
            <img
              src="/pro.png"
              alt="Maruff profile"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

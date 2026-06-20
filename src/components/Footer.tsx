import React from 'react';
const links = [
  { label: "Privacy Policy", url: "#" },
  { label: "Terms of Service", url: "#" },
  { label: "Cookie Settings", url: "#" },
];

const exploreLinks = [
  { label: "Work", url: "#" },
  { label: "Process", url: "#" },
  { label: "About", url: "#" },
  { label: "Contact", url: "#" },
];

const connectLinks = [
  { icon: "fa-brands fa-github", label: "GitHub", url: "https://github.com/themarsfactor" },
  { icon: "fa-brands fa-linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/maruff-shadu" },
  { icon: "fa-brands fa-x-twitter", label: "X", url: "https://x.com/maruff_olayemi" },
];

import { theme } from '../theme';

const Footer: React.FC = () => (
  <footer
    className="site-footer"
    style={{
      background: theme.colors.background,
      color: theme.colors.lightGray,
      width: "100%",
      minWidth: 0,
      padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
      boxSizing: "border-box",
      position: "relative",
      fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    }}
  >
    <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "minmax(200px, 320px) 1fr 1fr 1fr", gap: "clamp(1.5rem, 3vw, 2rem)", width: "100%", alignItems: "start", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Logo & Description */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <span
            style={{
              background: theme.colors.accent,
              borderRadius: 8,
              width: 'clamp(32px, 5vw, 40px)',
              height: 'clamp(32px, 5vw, 40px)',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <i className="fa-solid fa-compass-drafting" style={{ color: theme.colors.white, fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }} />
          </span>
          <span style={{ color: theme.colors.text, fontWeight: 700, fontSize: "clamp(1.1rem, 2vw, 1.3rem)", letterSpacing: 1 }}>Marsbold</span>
        </div>
        <div style={{ color: theme.colors.lightGray, fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", lineHeight: 1.5 }}>
          Building digital structures with precision and purpose. Focused on minimalist design systems and robust architectural patterns.
        </div>
      </div>
      {/* Explore */}
      <div>
        <div style={{ color: theme.colors.accent, fontWeight: 700, marginBottom: 12, letterSpacing: 1, fontSize: "clamp(0.95rem, 1.5vw, 1rem)" }}>EXPLORE</div>
        {exploreLinks.map((link) => (
          <div key={link.label} style={{ marginBottom: 8 }}>
            <span style={{ color: theme.colors.lightGray, textDecoration: "none", fontWeight: 600, fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", cursor: "default", opacity: 0.75 }}>
              {link.label}
            </span>
          </div>
        ))}
      </div>
      {/* Connect */}
      <div>
        <div style={{ color: theme.colors.accent, fontWeight: 700, marginBottom: 12, letterSpacing: 1, fontSize: "clamp(0.95rem, 1.5vw, 1rem)" }}>CONNECT</div>
        {connectLinks.map((link) => (
          <div key={link.label} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <span style={{ border: `1px solid ${theme.colors.accent}`, borderRadius: 6, width: 'clamp(28px, 5vw, 32px)', height: 'clamp(28px, 5vw, 32px)', display: "flex", alignItems: "center", justifyContent: "center", marginRight: 10, transition: 'all 0.2s' }}>
              <i className={link.icon} style={{ color: theme.colors.accent, fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }} />
            </span>
            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.text, textDecoration: "none", fontWeight: 600, fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = theme.colors.accent}
              onMouseOut={(e) => e.currentTarget.style.color = theme.colors.text}
            >{link.label}</a>
          </div>
        ))}
      </div>
      {/* Back to Top & System Status */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <button
          className="footer-btn"
          style={{
            background: theme.colors.accent,
            color: theme.colors.white,
            border: "none",
            borderRadius: 8,
            padding: "clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 2vw, 2rem)",
            fontWeight: 700,
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            cursor: "pointer",
            marginBottom: 24,
            boxShadow: "0 2px 8px rgba(41,112,255,0.15)",
            letterSpacing: 1,
            transition: 'all 0.2s',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(41, 112, 255, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(41,112,255,0.15)';
          }}
        >
          BACK TO TOP <span style={{ marginLeft: 8 }}>&uarr;</span>
        </button>
        <div style={{ color: theme.colors.lightGray, fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", textAlign: "left" }}>
          SYSTEM STATUS: OPERATIONAL<br />V. 2.4.0
        </div>
      </div>
    </div>
    <hr style={{ border: "none", borderTop: `1px solid ${theme.colors.mediumGray}`, margin: "clamp(1.5rem, 2vw, 2rem) 0 clamp(0.8rem, 1.5vw, 1rem) 0" }} />
    <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap', maxWidth: 1400, margin: "0 auto", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", color: theme.colors.lightGray, gap: '1rem' }}>
      <div className="footer-links" style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 1.5rem)', flexWrap: 'wrap' }}>
        {links.map((link) => (
          <a key={link.label} href={link.url} style={{ color: theme.colors.lightGray, textDecoration: "none", fontWeight: 600, letterSpacing: 0.5, transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = theme.colors.accent}
            onMouseOut={(e) => e.currentTarget.style.color = theme.colors.lightGray}
          >{link.label}</a>
        ))}
      </div>
      <div className="footer-copy" style={{ textAlign: "right" }}>
        &copy; {new Date().getFullYear()} Marsbold. All rights reserved. Engineered for excellence.
      </div>
    </div>
  </footer>
);

export default Footer;

import React, { useState, useEffect } from 'react';
import { theme, applyTheme } from '../theme';

const navLinks = [
  { label: 'About', href: '#about', targetId: 'about' },
  { label: 'Projects', href: '#projects', targetId: 'projects' },
  { label: 'Skills', href: '#skills', targetId: 'skills' },
  { label: 'Education', href: '#education', targetId: 'education' },
  { label: 'Blog', href: '#blog', targetId: 'blog' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('About');
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    try {
      const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('site-theme') : null;
      return saved === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string, label: string) => {
    event.preventDefault();
    setActiveTab(label);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isContactActive = activeTab === 'Contact';

  return (
    <nav
      style={{
        width: '100%',
        background: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.border}`,
        padding: 'clamp(0.5rem, 1.5vw, 1rem) 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'clamp(60px, 8vw, 72px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxSizing: 'border-box',
        flexWrap: 'wrap',
      }}
    >
    <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {/* Left: Logo and Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(4px, 1vw, 8px)', flex: '0 0 auto' }}>
        <div>
          <span style={{ color: theme.colors.text, fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '23px', lineHeight: '23px' }}>
            MARS
          </span>
          <span style={{ color: theme.colors.accent, fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '23px', lineHeight: '23px' }}>
            BOLD
          </span>
          {/* <div className="nav-subtitle" style={{ color: theme.colors.softGray, fontSize: 'clamp(8px, 1vw, 10px)', letterSpacing: 1 }}>
            SOFTWARE ENGINEERING SERIES
          </div> */}
        </div>
      </div>

      {/* Hamburger Menu Button - Mobile Only */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="navbar-hamburger"
        style={{
          background: theme.colors.mediumGray,
          border: 'none',
          borderRadius: 8,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: 24,
          color: theme.colors.text,
        }}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Center: Navigation Links and Contact Button - Desktop Only */}
      <div className="navbar-center" style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 'clamp(16px, 2vw, 32px)'
      }}>
        {navLinks.map((link) => {
          const isActive = activeTab === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: isActive ? theme.colors.white : theme.colors.text,
                background: isActive ? theme.colors.accent : 'transparent',
                textDecoration: 'none',
                fontWeight: isActive ? 700 : 500,
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                transition: 'all 0.2s',
                margin: '0 4px',
                padding: isActive ? 'clamp(8px, 1vw, 10px) clamp(16px, 2vw, 24px)' : 0,
                borderRadius: isActive ? 8 : 0,
                boxShadow: isActive ? '0 2px 8px rgba(41,112,255,0.10)' : 'none',
              }}
              onClick={(e) => { handleNavClick(e, link.targetId, link.label); e.currentTarget.style.color = isActive ? theme.colors.white : theme.colors.text; }}
              onMouseOver={(e) => {
                if (!isActive) e.currentTarget.style.color = theme.colors.accent;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = isActive ? theme.colors.white : theme.colors.text;
              }}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href="#contact"
          style={{
            color: isContactActive ? theme.colors.white : theme.colors.text,
            background: isContactActive ? theme.colors.accent : 'transparent',
            textDecoration: 'none',
            fontWeight: isContactActive ? 700 : 500,
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            marginLeft: 'clamp(8px, 2vw, 24px)',
            transition: 'all 0.2s',
            padding: isContactActive ? 'clamp(8px, 1vw, 10px) clamp(16px, 2vw, 24px)' : 0,
            borderRadius: isContactActive ? 8 : 0,
            boxShadow: isContactActive ? '0 2px 8px rgba(41,112,255,0.10)' : 'none',
          }}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('Contact');
            const target = document.getElementById('contact');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          onMouseOver={(e) => {
            if (!isContactActive) e.currentTarget.style.color = theme.colors.accent;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = isContactActive ? theme.colors.white : theme.colors.text;
          }}
        >
          Contact
        </a>
        {/* make Contact match active tab styling */}
      </div>

      {/* Right: Theme Toggle - Desktop Only */}
      <div className="navbar-right" style={{ 
        alignItems: 'center', 
        gap: 'clamp(4px, 1vw, 8px)', 
        flex: '0 0 auto'
      }}>
        <button
          aria-label={mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
          style={{
            background: theme.colors.mediumGray,
            border: 'none',
            borderRadius: 8,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ color: theme.colors.text, fontSize: 20 }}>{mode === 'light' ? '☀️' : '🌙'}</span>
        </button>
      </div>

      {/* Mobile Menu - Full Width Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: '1rem 0',
          borderTop: `1px solid ${theme.colors.border}`,
          marginTop: 12,
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: theme.colors.text,
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                padding: '0.5rem 1rem',
                transition: 'color 0.2s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: theme.colors.accent,
                color: theme.colors.text,
              fontWeight: 600,
              fontSize: 'clamp(14px, 2vw, 16px)',
              borderRadius: 8,
              padding: '0.75rem 1rem',
              textDecoration: 'none',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(41,112,255,0.10)',
              transition: 'background 0.2s',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </div>
    </nav>
  );
};

export default Navbar;

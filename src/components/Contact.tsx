import React from 'react';
import { theme } from "../theme"; // Adjust the path as needed

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        scrollMarginTop: '100px',
        background: theme.colors.background,
        color: theme.colors.text,
        width: "100%",
        minWidth: 0,
        margin: 0,
        padding: "clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
        <h2 style={{ fontSize: "clamp(1.9rem, 6vw, 3rem)", fontWeight: 700, marginBottom: 12, color: theme.colors.text }}>
          Contact
        </h2>
        <p style={{ color: theme.colors.lightGray, maxWidth: 680, margin: "0 auto", fontSize: "clamp(1rem, 2vw, 1.1rem)", lineHeight: 1.8 }}>
          If you are hiring for a full stack role or need help with a web application, dashboard, MVP, API integration, or ongoing product support, contact me directly. I am open to full-time opportunities and select freelance engagements.
        </p>
      </div>

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1.5rem, 3vw, 2rem)",
          padding: "0 clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        <div
          className="contact-card"
          style={{
            width: "100%",
            background: theme.colors.mediumGray,
            borderRadius: 28,
            padding: "clamp(1.75rem, 3vw, 2.25rem)",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.08)",
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <div className="contact-grid" style={{ display: "grid", gap: "1rem" }}>
            {[
              { label: "Email", value: "marsbold.effect@gmail.com", link: "mailto:marsbold.effect@gmail.com" },
              { label: "Location", value: "Lagos, Nigeria" },
              { label: "Availability", value: "Accepting new freelance projects" },
              { label: "Work Mode", value: "Remote and hybrid-friendly" },
              { label: "LinkedIn", value: "linkedin.com/in/maruff-shadu", link: "https://www.linkedin.com/in/maruff-shadu" },
              { label: "GitHub", value: "github.com/themarsfactor", link: "https://github.com/themarsfactor" },
            ].map((item) => (
              <div
                key={item.label}
                className="contact-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <span className="contact-label" style={{ fontWeight: 700, color: theme.colors.text }}>{item.label}:</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                    style={{
                      color: theme.colors.accent,
                      textDecoration: "none",
                      fontWeight: 500,
                      wordBreak: "break-all",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-value" style={{ color: theme.colors.lightGray, fontWeight: 500, wordBreak: "break-all" }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(1rem, 2vw, 1.25rem)",
            width: "100%",
          }}
        >
          {[
            { icon: "fa-solid fa-envelope", label: "Email", link: "mailto:marsbold.effect@gmail.com", primary: true },
            { icon: "fa-brands fa-whatsapp", label: "WhatsApp", link: "https://wa.me/2348138091650" },
            { icon: "fa-brands fa-linkedin", label: "LinkedIn", link: "https://www.linkedin.com/in/maruff-shadu" },
            { icon: "fa-brands fa-github", label: "GitHub", link: "https://github.com/themarsfactor" },
          ].map((action) => (
            <a
              key={action.label}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "clamp(1rem, 1.2vw, 1.1rem)",
                borderRadius: 16,
                border: action.primary ? "none" : `1px solid ${theme.colors.border}`,
                background: action.primary ? theme.colors.accent : "transparent",
                color: action.primary ? theme.colors.white : theme.colors.text,
                textDecoration: "none",
                fontWeight: 600,
                transition: "transform 0.2s ease, background 0.2s ease, border-color 0.2s ease",
                boxShadow: action.primary ? "0 14px 28px rgba(41, 112, 255, 0.18)" : "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                if (!action.primary) e.currentTarget.style.background = theme.colors.border;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                if (!action.primary) e.currentTarget.style.background = "transparent";
              }}
            >
              <i className={action.icon} />
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

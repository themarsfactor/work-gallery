import React from "react";
import { theme } from "../theme";

const skills = [
  {
    category: "Frontend",
    icon: "fa-solid fa-laptop-code",
    subtitle: "INTERFACE ENGINE",
    items: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "Vite", icon: "fa-solid fa-bolt" },
      {name: "Zustand", icon: "fa-solid fa-cubes" },
      { name: "TailwindCSS", icon: "fa-brands fa-css3-alt" },
    ],
  },
  {
    category: "Backend",
    icon: "fa-solid fa-database",
    subtitle: "LOGIC & DATA",
    items: [
      {name: "MySQL", icon: "fa-solid fa-database" },
      { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "Laravel", icon: "fa-solid fa-laravel" },
      { name: "PHP", icon: "fa-solid fa-code" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express", icon: "fa-solid fa-server" },
      { name: "MongoDB", icon: "fa-solid fa-database" },
      { name: "REST API", icon: "fa-solid fa-plug" },
      { name: "GraphQL", icon: "fa-solid fa-code-branch" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "fa-solid fa-network-wired",
    subtitle: "INFRASTRUCTURE",
    items: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Docker", icon: "fa-brands fa-docker" },
      { name: "Kubernetes", icon: "fa-solid fa-cubes" },
      { name: "CI/CD", icon: "fa-solid fa-cogs" },
      { name: "AWS", icon: "fa-brands fa-aws" },
      { name: "Linux", icon: "fa-solid fa-terminal" },
      //{ name: "Jenkins", icon: "fa-solid fa-cogs" },
      { name: "Terraform", icon: "fa-solid fa-cubes" },
      { name: "VS Code", icon: "fa-solid fa-code" },
    ],
  },
];

const SkillSet: React.FC = () => {
  return (
    <section
      id="skills"
      style={{
        scrollMarginTop: '100px',
        background: theme.colors.background,
        color: theme.colors.white,
        width: "100vw",
        margin: 0,
        padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
        boxSizing: "border-box",
        position: "relative",
        left: "50%",
        right: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)", paddingLeft: 'clamp(0.5rem, 2vw, 1rem)', paddingRight: 'clamp(0.5rem, 2vw, 1rem)' }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)", fontWeight: 700, marginBottom: 8, color: theme.colors.white }}>
          Architectural <span style={{ color: theme.colors.accent, textShadow: `0 0 16px ${theme.colors.accent}` }}>Tech Stack</span>
        </h2>
        <p style={{ color: theme.colors.lightGray, fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: 700, margin: "0 auto" }}>
          A high-performance ecosystem built with modern standards, precision engineering, and scalable system design principles.
        </p>
      </div>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(clamp(300px, 90vw, 400px), 1fr))", 
        gap: "clamp(1.5rem, 3vw, 2rem)", 
        justifyContent: "center", 
        marginBottom: "clamp(2rem, 5vw, 3rem)",
        maxWidth: "1400px",
        margin: "0 auto clamp(2rem, 5vw, 3rem) auto",
        paddingLeft: "clamp(0.5rem, 2vw, 1rem)",
        paddingRight: "clamp(0.5rem, 2vw, 1rem)",
      }}>
        {skills.map((group) => (
          <div
            key={group.category}
            style={{
              background: theme.colors.mediumGray,
              borderRadius: 24,
              boxShadow: `0 4px 24px ${theme.colors.accent}22`,
              padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(1rem, 2vw, 2rem) clamp(1rem, 2vw, 2rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              border: `1px solid ${theme.colors.accent}33`,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 8px 32px ${theme.colors.accent}44`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 24px ${theme.colors.accent}22`;
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
              <span style={{ background: theme.colors.accent, borderRadius: 8, width: 'clamp(32px, 5vw, 36px)', height: 'clamp(32px, 5vw, 36px)', display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 }}>
                <i className={group.icon} style={{ color: theme.colors.white, fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }} />
              </span>
              <span style={{ color: theme.colors.white, fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>{group.category}</span>
            </div>
            <div style={{ color: theme.colors.accent, fontWeight: 600, fontSize: "clamp(0.9rem, 1.5vw, 1rem)", marginBottom: 18 }}>{group.subtitle}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(0.8rem, 1.5vw, 1rem)" }}>
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  style={{
                    background: theme.colors.background,
                    color: theme.colors.white,
                    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                    padding: "0.35rem 0.8rem",
                    borderRadius: 12,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    border: "none",
                    boxShadow: "none",
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = theme.colors.accent;
                    e.currentTarget.style.color = theme.colors.white;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = theme.colors.background;
                    e.currentTarget.style.color = theme.colors.white;
                  }}
                >
                  {skill.icon && <i className={skill.icon} style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", color: 'inherit' }} />}
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(150px, 45vw, 250px), 1fr))", gap: "clamp(2rem, 4vw, 3rem)", marginTop: "clamp(1.5rem, 3vw, 2rem)", paddingLeft: "clamp(0.5rem, 2vw, 1rem)", paddingRight: "clamp(0.5rem, 2vw, 1rem)" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: theme.colors.accent, fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: 4 }}>99.9%</div>
          <div style={{ color: theme.colors.white, fontWeight: 600, fontSize: "clamp(0.9rem, 2vw, 1.1rem)", marginBottom: 2 }}>UPTIME RELIABILITY</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: theme.colors.accent, fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: 4 }}>&lt;200ms</div>
          <div style={{ color: theme.colors.white, fontWeight: 600, fontSize: "clamp(0.9rem, 2vw, 1.1rem)", marginBottom: 2 }}>LATENCY RESPONSE</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: theme.colors.accent, fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: 4 }}>Scalable</div>
          <div style={{ color: theme.colors.white, fontWeight: 600, fontSize: "clamp(0.9rem, 2vw, 1.1rem)", marginBottom: 2 }}>ARCHITECTURE</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: theme.colors.accent, fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: 4 }}>Secure</div>
          <div style={{ color: theme.colors.white, fontWeight: 600, fontSize: "clamp(0.9rem, 2vw, 1.1rem)", marginBottom: 2 }}>BY DESIGN</div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;

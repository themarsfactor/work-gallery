import { useState, useEffect } from "react";
import { theme } from "../theme";
import "../App.css";

const projects = [
  {
    year: "2024",
    title: "React Shipping & Logistics Platform",
    description:
      "A modern logistics application built with React, TypeScript, and Vite for managing shipments, deliveries, invoices, and customer operations.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "Material UI (@mui/material)",
      "Lucide React icons",
      "Firebase Firestore",
      "Firebase Cloud Functions",
      "Firebase Authentication",
      "React Quill",
    ],
    image: "/ac.png",
    liveUrl: "https://shoppermayor.com",
    codeUrl: "",
    private: true,
    category: ["React", "Full Stack Development", "TypeScript"],
  },
  {
    year: "2025",
    title: "Procurement Calculator for Shipping",
    description:
      "A lightweight procurement cost calculator tailored for shipping operations — estimates rates, fees, and recommended carriers based on input parameters.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "Material UI (@mui/material)",
      "Firebase Firestore",
      "Firebase Cloud Functions",
      "Firebase Authentication",
    ],
    image: "proc.png",
    liveUrl: "https://shoppermayor.com/procurement-calculator",
    codeUrl: "https://github.com/themarsfactor/logistics-procurement-calculator",
    category: ["Logistics", "Calculator"],
  },
  {
    year: "2026",
    title: "Blog Platform",
    description:
      "A full-featured blog experience for ShopperMayor with admin publishing, secure Firebase backend, and public reader routes.",
    technologies: [
      "React + TypeScript",
      "Firebase Firestore ",
      "Firebase Cloud Functions",
      "React Router admin routes",
      "Material UI components",
      "React Quill rich text editor",
      "Component state/hooks",
        "BlogManagement page",
        "BlogPostCard component",
      "BlogPostDetail component",
    ],
    image: "blog.png",
    liveUrl: "https://shoppermayor.com/blog",
    codeUrl: "",
    private: true,
    category: ["React", "TypeScript", "Firebase"],
  },
  ];



const FeaturedProjects = () => {
  const [notification, setNotification] = useState<string>("");
  const [privateClicked, setPrivateClicked] = useState<number | null>(null);
  const [expandedTech, setExpandedTech] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!notification) return;
    const timeout = setTimeout(() => {
      setNotification("");
      setPrivateClicked(null);
    }, 3200);
    return () => clearTimeout(timeout);
  }, [notification]);

  const filteredProjects = projects;

  return (
    <section
      id="projects"
      className="featured-projects-section"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
        borderRadius: 0,
        width: "100vw",
        minWidth: 0,
        margin: 0,
        padding: "clamp(2rem, 5vw, 3rem) 0",
        boxSizing: "border-box",
        position: "relative",
        left: "50%",
        right: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)", paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)", fontWeight: 700, marginBottom: 8, color: theme.colors.text }}>
          Featured <span style={{ color: theme.colors.accent, textShadow: `0 0 16px ${theme.colors.accent}` }}>Projects</span>
        </h2>
        <p style={{ color: theme.colors.lightGray, fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: 700, margin: "0 auto" }}>
          Explore my latest works showcasing a blend of creativity, technical expertise, and attention to detail.
        </p>
      </div>

      {notification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: theme.colors.accent,
            color: theme.colors.white,
            padding: "12px 24px",
            borderRadius: 8,
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(41, 112, 255, 0.3)",
            zIndex: 9999,
            animation: "fadeInOut 3.2s ease-in-out",
          }}
        >
          {notification}
        </div>
      )}

      <div
        className="featured-cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 90vw, 440px), 1fr))",
          gap: "clamp(1rem, 3vw, 2rem)",
          justifyContent: "center",
          padding: "0 clamp(1rem, 3vw, 2rem)",
          marginBottom: "clamp(2rem, 5vw, 3rem)",
          maxWidth: "1400px",
          margin: "0 auto clamp(2rem, 5vw, 3rem) auto",
        }}
      >
        {filteredProjects.map((project, idx) => (
          <div
            className="featured-card"
            key={idx}
            style={{
              background: theme.colors.mediumGray,
              borderRadius: 24,
              boxShadow: `0 4px 24px ${theme.colors.accent}22`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              border: `1px solid ${theme.colors.accent}33`,
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
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
            <img
              src={project.image}
              alt={project.title}
              className="featured-image"
              style={{
                width: "100%",
                height: 'clamp(180px, 40vw, 230px)',
                objectFit: "cover",
                borderBottom: `1px solid ${theme.colors.background}`,
              }}
            />
            <div className="featured-card-content" style={{ padding: "clamp(0.75rem, 2vw, 1.5rem)", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3
                className="featured-card-title"
                style={{
                    color: theme.colors.text,
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  fontWeight: 600,
                  margin: "0.4rem 0",
                }}
              >
                {project.title}
              </h3>
              <p
                className="featured-card-desc"
                style={{
                    color: theme.colors.text,
                  fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
                  marginBottom: "0.7rem",
                  lineHeight: 1.4,
                }}
              >
                {project.description}
              </p>
              <div className="featured-tech" style={{ marginBottom: "0.7rem" }}>
                <span
                  className="featured-tech-label"
                  style={{
                    fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                    fontWeight: 500,
                    color: theme.colors.text,
                  }}
                >
                  Technologies
                </span>
                <div
                  className="featured-tech-list"
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    marginTop: "0.2rem",
                  }}
                >
                  {(() => {
                    const visibleTech = expandedTech[idx]
                      ? project.technologies
                      : project.technologies.slice(0, 3);
                    const hiddenCount = project.technologies.length - 3;
                    return (
                      <>
                        {visibleTech.map((tech, i) => (
                          <span
                            className="featured-tech-item"
                            key={i}
                            style={{
                              background: theme.colors.background,
                              color: theme.colors.lightGray,
                              fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
                              padding: "0.15rem 0.6rem",
                              borderRadius: 12,
                              fontWeight: 600,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {hiddenCount > 0 ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedTech((prev) => ({
                                ...prev,
                                [idx]: !prev[idx],
                              }));
                            }}
                            style={{
                              background: "transparent",
                              border: `1px solid ${theme.colors.accent}`,
                              color: theme.colors.accent,
                              fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
                              padding: "0.15rem 0.6rem",
                              borderRadius: 12,
                              cursor: "pointer",
                              fontWeight: 600,
                            }}
                          >
                            {expandedTech[idx]
                              ? "Show less"
                              : `+${hiddenCount} more`}
                          </button>
                        ) : null}
                      </>
                    );
                  })()}
                </div>
              </div>
              <div className="featured-actions" style={{ display: "flex", gap: "clamp(0.3rem, 1vw, 0.5rem)", marginTop: "auto" }}>
                <a
                  href={project.liveUrl}
                  className="featured-btn live"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                        flex: 1,
                    textAlign: "center",
                    padding: "clamp(0.35rem, 1.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)",
                    borderRadius: 8,
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                    fontWeight: 600,
                    textDecoration: "none",
                    background: theme.colors.accent,
                    color: theme.colors.white,
                    border: "none",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#185adf';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = theme.colors.accent;
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  View Live
                </a>
                {project.private ? (
                  <button
                    type="button"
                    className="featured-btn code"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "clamp(0.35rem, 1.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)",
                      borderRadius: 8,
                      fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                      fontWeight: 600,
                        background: theme.colors.background,
                        color: theme.colors.text,
                      border: "none",
                      transition: "background 0.2s, transform 0.2s",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPrivateClicked(idx);
                      setNotification("This is a private project. Code is unavailable.");
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = theme.colors.accent + '44';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = theme.colors.background;
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {privateClicked === idx ? "Private Project" : "Code"}
                  </button>
                ) : (
                  <a
                    href={project.codeUrl}
                    className="featured-btn code"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "clamp(0.35rem, 1.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)",
                      borderRadius: 8,
                      fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                      fontWeight: 600,
                      textDecoration: "none",
                        background: theme.colors.background,
                        color: theme.colors.text,
                      border: "none",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = theme.colors.accent + '44';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = theme.colors.background;
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

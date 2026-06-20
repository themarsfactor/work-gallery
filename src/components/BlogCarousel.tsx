import React, { useState, useEffect } from "react";
import { theme } from "../theme";

type DevToArticle = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  cover_image: string | null;
  tag_list: string[];
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
};


const BlogCarousel: React.FC = () => {
  const [posts, setPosts] = useState<DevToArticle[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch latest software engineering articles from Dev.to
    fetch("https://dev.to/api/articles?tag=softwareengineering&per_page=5")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load articles.");
        setLoading(false);
      });
  }, []);

  const handlePrev = () => setActive((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  const handleNext = () => setActive((prev) => (prev === posts.length - 1 ? 0 : prev + 1));

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!posts.length) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [posts, active]);

  return (
    <section
      id="blog"
      style={{
        scrollMarginTop: '100px',
        background: theme.colors.background,
        color: theme.colors.text,
        width: "100vw",
        minWidth: 0,
        margin: 0,
        padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
        boxSizing: "border-box",
        position: "relative",
        left: "50%",
        right: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div style={{ maxWidth: '90vw', margin: "0 auto", padding: "0 clamp(0.5rem, 2vw, 1rem)" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)", fontWeight: 700, marginBottom: 8, color: theme.colors.text }}>
            Software Engineering <span style={{ color: theme.colors.accent, textShadow: `0 0 16px ${theme.colors.accent}` }}>Blog</span>
          </h2>
          <p style={{ color: theme.colors.lightGray, maxWidth: 600, margin: "0 auto clamp(1rem, 2vw, 2rem) auto", fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
            Latest software engineering articles from Dev.to
          </p>
        </div>
        {loading ? (
          <div style={{ color: theme.colors.lightGray, textAlign: "center", margin: "2rem 0", fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>Loading articles...</div>
        ) : error ? (
          <div style={{ color: "#ff6b6b", textAlign: "center", margin: "2rem 0", fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>{error}</div>
        ) : posts.length === 0 ? (
          <div style={{ color: theme.colors.lightGray, textAlign: "center", margin: "2rem 0", fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>No articles found.</div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "clamp(1.5rem, 3vw, 2rem)", gap: "clamp(0.8rem, 2vw, 1rem)", flexWrap: 'wrap' }}>
              <button
                className="carousel-btn"
                onClick={handlePrev}
                style={{
                  background: theme.colors.mediumGray,
                  color: theme.colors.accent,
                  border: "none",
                  borderRadius: 8,
                  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(0.8rem, 2vw, 1.2rem)",
                  fontWeight: 700,
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  cursor: "pointer",
                  transition: 'all 0.2s',
                }}
                aria-label="Previous"
                onMouseOver={(e) => {
                  e.currentTarget.style.background = theme.colors.accent;
                  e.currentTarget.style.color = theme.colors.white;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = theme.colors.mediumGray;
                  e.currentTarget.style.color = theme.colors.accent;
                }}
              >
                &#8592;
              </button>
              <div style={{ display: "flex", gap: 'clamp(1rem, 2vw, 1.5rem)', width: "100%", maxWidth: '900px', justifyContent: "center", flexWrap: 'wrap' }}>
                {posts.map((post, idx) => (
                  <div
                    key={post.id}
                    style={{
                      display: idx === active ? "flex" : "none",
                      flexDirection: "column",
                      width: '100%',
                      maxWidth: 'clamp(280px, 90vw, 700px)',
                      background: theme.colors.mediumGray,
                      borderRadius: 16,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                      overflow: "hidden",
                      transition: "box-shadow 0.2s",
                    }}
                  >
                    <img
                      src={post.cover_image || post.user.profile_image}
                      alt={post.title}
                      style={{ width: "100%", height: 'clamp(200px, 50vw, 380px)', objectFit: "cover", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                    />
                    <div style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
                      <span
                        style={{
                          background: theme.colors.accent,
                          color: theme.colors.white,
                          fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                          fontWeight: 600,
                          borderRadius: 12,
                          padding: "0.2rem 0.8rem",
                          marginBottom: 8,
                          display: "inline-block",
                        }}
                      >
                        {post.tag_list && post.tag_list.length > 0 ? post.tag_list[0] : "Software Engineering"}
                      </span>
                      <div style={{ color: theme.colors.lightGray, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", margin: "8px 0" }}>
                        <i className="fa-regular fa-calendar" style={{ marginRight: 6 }} />
                        {new Date(post.published_at).toLocaleDateString()}
                      </div>
                      <h3 style={{ color: theme.colors.text, fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 700, marginBottom: 8 }}>{post.title}</h3>
                      <div style={{ color: theme.colors.lightGray, fontSize: "clamp(0.9rem, 1.5vw, 1rem)", marginBottom: 12, lineHeight: 1.4 }}>{post.description}</div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: theme.colors.accent, fontWeight: 600, fontSize: "clamp(0.9rem, 1.5vw, 1rem)", textDecoration: "none", transition: 'all 0.2s' }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.textDecoration = 'underline';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.textDecoration = 'none';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        Read More <span style={{ marginLeft: 4 }}>&rarr;</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-btn"
                onClick={handleNext}
                style={{
                  background: theme.colors.mediumGray,
                  color: theme.colors.accent,
                  border: "none",
                  borderRadius: 8,
                  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(0.8rem, 2vw, 1.2rem)",
                  fontWeight: 700,
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  cursor: "pointer",
                  transition: 'all 0.2s',
                }}
                aria-label="Next"
                onMouseOver={(e) => {
                  e.currentTarget.style.background = theme.colors.accent;
                  e.currentTarget.style.color = theme.colors.white;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = theme.colors.mediumGray;
                  e.currentTarget.style.color = theme.colors.accent;
                }}
              >
                &#8594;
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {posts.map((_, idx) => (
                <span
                  key={idx}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: idx === active ? theme.colors.accent : theme.colors.mediumGray,
                    display: "inline-block",
                    cursor: "pointer",
                    transition: 'background 0.2s',
                  }}
                  onClick={() => setActive(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogCarousel;

const contactDetails = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "marsbold.effect@gmail.com",
    color: "#2970FF",
    link: "mailto:marsbold.effect@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    value: "+2348138091650",
    color: "#25D366",
    link: "https://wa.me/2348138091650",
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+2347016866859",
    color: "#7B61FF",
    link: "tel:+2347016866859",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Lagos, Nigeria",
    color: "#FF5630",
    link: "https://maps.google.com/?q=Lagos,Nigeria",
  },
];

import { theme } from "../theme"; // Adjust the path as needed

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        scrollMarginTop: '100px',
        background: theme.colors.background,
        color: theme.colors.white,
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
      <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)", fontWeight: 700, marginBottom: 8, color: theme.colors.white }}>
          Let's Create <span style={{ color: theme.colors.accent, textShadow: `0 0 16px ${theme.colors.accent}` }}>Something Amazing</span>
        </h2>
        <p style={{ color: theme.colors.lightGray, maxWidth: 600, margin: "0 auto", fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
          Ready to bring your vision to life? Let's discuss your project and make something extraordinary together.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(260px, 90vw, 400px), 1fr))",
          gap: "clamp(1rem, 2vw, 1.5rem)",
          margin: "0 auto clamp(1.5rem, 3vw, 2rem) auto",
          maxWidth: "1000px",
          padding: "0 clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        {contactDetails.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 'clamp(12px, 2vw, 18px)',
              background: theme.colors.mediumGray,
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              padding: "clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 2rem)",
              textDecoration: "none",
              color: theme.colors.white,
              fontWeight: 500,
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              transition: "all 0.2s",
              minHeight: "clamp(70px, auto, none)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(41, 112, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)';
            }}
          >
            <span
              style={{
                background: item.color,
                color: "#fff",
                borderRadius: "50%",
                width: 'clamp(40px, 8vw, 48px)',
                height: 'clamp(40px, 8vw, 48px)',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                boxShadow: `0 0 8px ${item.color}55`,
                flexShrink: 0,
              }}
            >
              <i className={item.icon} />
            </span>
            <div>
              <div style={{ fontWeight: 600, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", marginBottom: 4 }}>{item.label}</div>
              <div style={{ color: theme.colors.lightGray, fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>{item.value}</div>
            </div>
          </a>
        ))}
      </div>
      
    </section>
  );
};

export default Contact;

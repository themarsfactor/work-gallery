
import { theme } from "../theme";

const education = [
  
  {
    degree: "BSc in Telecommunication Science",
    institution: "University of Ilorin, Kwara State, Nigeria",
    period: "2014 — 2017",
    status: "Completed",
    details: "Focused on data communication, wireless and mobile networks, network security, and telecommunication systems design. Gained hands-on experience in network configuration, intrusion detection systems, and secure communication protocols, with a strong interest in cybersecurity and intelligent network defense."
  },
  {
    degree: "National Diploma in Computer Science",
    institution: "Kwara State Polytechnic, Kwara State, Nigeria",
    period: "2011 — 2013",
    status: "Completed",
    details: "Focused on foundational computing concepts including programming, database management, computer systems, and basic networking. Developed practical skills in software development, problem-solving, and system analysis, building a strong foundation for advanced studies in telecommunication and cybersecurity."
  },
  
];

const certifications = [
  {
  icon: "fa-solid fa-brain",
  title: "AI Career Essentials",
  id: "ZHL9R3MfNS",
  url: "https://intranet.alxswe.com/certificates/ZHL9R3MfNS",
   issued: "AUG. 2024"
},
 {
  icon: "fa-solid fa-code",
  title: "Advanced Diploma in Software Engineering",
  id: "Null",
  // url: "https://intranet.alxswe.com/certificates/ZHL9R3MfNS",
  issued: "OCT 2020"
},
  
  {
    icon: "fa-solid fa-cloud",
    title: "Professional Training In DevOps",
    id: "Null",
     issued: "JAN 2023",
  },
];

const Education: React.FC = () => (
  <section
    id="education"
    style={{
      scrollMarginTop: '100px',
      background: theme.colors.background,
      color: theme.colors.text,
      width: "100vw",
      minWidth: 0,
      margin: 0,
      padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(1rem, 3vw, 2rem)",
      boxSizing: "border-box",
      position: "relative",
      left: "50%",
      right: "50%",
      transform: "translateX(-50%)",
    }}
  >
    <div className="education-container" style={{ maxWidth: 1300, margin: "0 auto" }}>
      {/* Education Timeline */}
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 'clamp(1.5rem, 3vw, 2rem)', flexWrap: 'wrap', gap: 'clamp(0.5rem, 2vw, 1rem)' }}>
          <span style={{ background: theme.colors.accent, borderRadius: 8, width: 'clamp(36px, 5vw, 40px)', height: 'clamp(36px, 5vw, 40px)', display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-compass-drafting" style={{ color: theme.colors.white, fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }} />
          </span>
          <span style={{ color: theme.colors.text, fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: 1 }}>FORMAL EDUCATION</span>
        </div>
        <div style={{ borderLeft: `3px solid ${theme.colors.accent}33`, paddingLeft: 'clamp(1.5rem, 2vw, 2rem)', position: "relative" }}>
          {education.map((item) => (
            <div key={item.degree} style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', position: "relative" }}>
              <span style={{ position: "absolute", left: 'clamp(-32px, -5vw, -44px)', top: 8, width: 24, height: 24, background: theme.colors.background, border: `4px solid ${theme.colors.accent}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }} />
              <div style={{ color: theme.colors.accent, fontWeight: 700, fontSize: "clamp(0.85rem, 1.5vw, 1rem)", marginBottom: 2, letterSpacing: 1 }}>
                {item.period} &nbsp; / &nbsp; {item.status.toUpperCase()}
              </div>
              <div style={{ fontWeight: 700, fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", color: theme.colors.text, marginBottom: 2 }}>{item.degree}</div>
              <div style={{ color: theme.colors.lightGray, fontSize: "clamp(1rem, 1.8vw, 1.1rem)", marginBottom: 8 }}>{item.institution}</div>
              {item.details && (
                <div style={{ background: `${theme.colors.accent}10`, color: theme.colors.accent, fontStyle: "italic", borderRadius: 8, padding: "clamp(0.8rem, 2vw, 1.2rem)", margin: "12px 0 0 0", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>{item.details}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 'clamp(1.5rem, 3vw, 2rem)', flexWrap: 'wrap', gap: 'clamp(0.5rem, 2vw, 1rem)' }}>
          <span style={{ background: theme.colors.accent, borderRadius: 8, width: 'clamp(36px, 5vw, 40px)', height: 'clamp(36px, 5vw, 40px)', display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fa-solid fa-gear" style={{ color: theme.colors.white, fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }} />
          </span>
          <span style={{ color: theme.colors.text, fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: 1 }}>CERTIFICATIONS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 2vw, 1.5rem)" }}>
          {certifications.map((cert) => (
            <div key={cert.title} style={{ background: theme.colors.mediumGray, borderRadius: 12, padding: "clamp(0.9rem, 2vw, 1.5rem)", display: "flex", alignItems: "center", gap: 'clamp(12px, 2vw, 18px)', boxShadow: "0 2px 12px rgba(0,0,0,0.08)", transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(41, 112, 255, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
              }}
            >
              <span style={{ background: theme.colors.accent, borderRadius: 8, width: 'clamp(40px, 6vw, 48px)', height: 'clamp(40px, 6vw, 48px)', display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className={cert.icon} style={{ color: theme.colors.white, fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ color: theme.colors.text, fontWeight: 700, fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", marginBottom: 2 }}>{cert.title}</div>
                <div style={{ color: theme.colors.accent, fontWeight: 600, fontSize: "clamp(0.85rem, 1.3vw, 0.98rem)", marginBottom: 2, wordBreak: 'break-all' }}>
                  ID: <a href={cert.url} style={{ color: theme.colors.accent, textDecoration: "underline" }}>{cert.id}</a>
                </div>
                <div style={{ color: theme.colors.lightGray, fontSize: "clamp(0.85rem, 1.2vw, 0.97rem)" }}>ISSUED: {cert.issued}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;

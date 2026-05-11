export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="hero-pill">
            <span className="dot"></span>
            Open to opportunities
          </span>
          <div className="hero-meta">
            <div><b>Based in</b><br />Bengaluru, IN</div>
            <div><b>Looking for</b><br />my first role</div>
          </div>
        </div>

        <div>
          <h1 className="hero-title">Hey there,<br />I'm Rohith.</h1>
          <p className="hero-sub"><span className="accent">UX/UI</span> Designer</p>
        </div>

        <div>
          <p className="hero-blurb">
            I design intuitive, user‑centered digital experiences that solve real problems. As a passionate fresher in UI/UX, I focus on clean interfaces backed by thoughtful research and usability principles.
          </p>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const skills = [
    'User Research', 'UX Strategy', 'Information Architecture',
    'Personas & Journey Mapping', 'Wireframing', 'Usability & Accessibility',
    'Visual Design', 'Design Systems', 'Interaction Design', 'Prototyping',
  ];
  const items = [...skills, ...skills];
  return (
    <div className="marquee" style={{ marginTop: 64 }}>
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

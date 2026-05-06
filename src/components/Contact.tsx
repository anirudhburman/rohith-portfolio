export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Let's Make It Happen</h2>
        <p className="contact-sub">Always open to new opportunities and creative challenges. Drop a line and let's talk.</p>
        <a className="contact-mail" href="mailto:rohith@example.com">
          rohith@example.com
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>

        <div className="contact-socials">
          <a className="social" href="#" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18H5.67V9.67h2.67V18zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zM18.34 18h-2.66v-4.05c0-.97-.02-2.22-1.35-2.22-1.36 0-1.57 1.06-1.57 2.15V18H10.1V9.67h2.56v1.14h.04c.36-.68 1.23-1.4 2.54-1.4 2.72 0 3.22 1.79 3.22 4.12V18z"/>
            </svg>
          </a>
          <a className="social" href="#" aria-label="Behance">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.5 11.5c.83 0 1.5-.45 1.5-1.25s-.67-1.25-1.5-1.25H6v2.5h3.5zm.3 1.5H6v3h3.8c1 0 1.7-.5 1.7-1.5s-.7-1.5-1.7-1.5zM18 10h-4v1h4v-1zm-7 5.5c0 1.93-1.57 3.5-3.5 3.5H4V7h3.6c1.93 0 3.4 1.07 3.4 3 0 1.04-.5 1.85-1.3 2.35.95.45 1.3 1.55 1.3 3.15zm10.5-1.5c0 2.5-1.84 4.05-4.5 4.05-2.7 0-4.5-1.85-4.5-4.55s1.85-4.5 4.5-4.5S22 10.55 22 13c0 .35-.05.7-.05 1H15c.1 1.4 1 2.05 2 2.05.95 0 1.6-.45 1.85-1.05h2.65zM18.6 12.3c-.1-1.1-.85-1.7-1.85-1.7-1.05 0-1.65.6-1.8 1.7h3.65z"/>
            </svg>
          </a>
          <a className="social" href="mailto:rohith@example.com" aria-label="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="m3 7 9 6 9-6"/>
            </svg>
          </a>
          <a className="social" href="#" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <div className="footer">
          <div>© 2025 Rohith. Designed & built with care.</div>
          <a
            className="back-top"
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}

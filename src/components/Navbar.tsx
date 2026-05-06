import { useEffect, useState } from 'react';

interface NavbarProps {
  activeSection: string;
  route: string;
  navigate: (route: string, sectionId?: string, caseId?: string) => void;
}

export default function Navbar({ activeSection, route, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [route]);

  const items = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (route !== 'home') {
      navigate('home', id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); navigate('home', 'top'); }}>
          Rohith
        </a>

        {route === 'home' ? (
          <div className="nav-links" role="tablist">
            {items.map(it => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`nav-link ${activeSection === it.id ? 'is-active' : ''}`}
                onClick={(e) => handleNav(e, it.id)}
              >
                {it.label}
              </a>
            ))}
          </div>
        ) : (
          <button className="nav-back" onClick={() => navigate('home', 'work')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            All work
          </button>
        )}

        <a className="nav-cta" href="#" onClick={(e) => e.preventDefault()}>
          Resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8"/>
          </svg>
        </a>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    </nav>
  );
}

import { useEffect, useState } from 'react';
import { caseStudies, type Block, type CardItem, type MetricItem, type PersonaData, type RoadmapItem, type CaseStudyData } from '../data';

interface CaseStudyProps {
  caseId: string;
  navigate: (route: string, sectionId?: string, caseId?: string) => void;
}

export default function CaseStudy({ caseId, navigate }: CaseStudyProps) {
  const data = caseStudies[caseId];
  const [activeToc, setActiveToc] = useState(data.sections[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [caseId]);

  useEffect(() => {
    const ids = data.sections.map(s => s.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 200) current = id;
      }
      setActiveToc(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [caseId, data.sections]);

  const handleToc = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };

  const ids = Object.keys(caseStudies);
  const idx = ids.indexOf(caseId);
  const next = caseStudies[ids[(idx + 1) % ids.length]];

  return (
    <main className="casestudy">
      <div className="container">
        <header className="cs-hero">
          <div>
            <div className="cs-eyebrow">{data.kind}</div>
            <h1>{data.title}</h1>
            <p className="lede">{data.lede}</p>
            <div className="cs-pills">
              {data.tags.map(t => <span key={t} className="cs-pill">{t}</span>)}
            </div>
          </div>
          <div className={`cs-visual ${data.thumb}`}>
            <CaseVisual data={data} />
          </div>
        </header>

        <div className="cs-meta">
          {data.meta.map((m, i) => (
            <div className="cell" key={i}>
              <div className="key">{m.k}</div>
              <div className="val">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="cs-layout">
          <aside className="cs-toc">
            <div className="cs-toc-title">On this page</div>
            <ul className="cs-toc-list">
              {data.sections.map(s => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={activeToc === s.id ? 'is-active' : ''}
                    onClick={(e) => handleToc(e, s.id)}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {data.sections.map(s => (
              <section key={s.id} id={s.id} className="cs-section">
                <div className="cs-eyebrow">{s.eyebrow}</div>
                <h2>{s.title}</h2>
                {s.body.map((b, i) => renderBlock(b, i))}
              </section>
            ))}

            <div className="cs-next">
              <div>
                <div className="label">Next case study</div>
                <h3>{next.title}</h3>
              </div>
              <button className="case-cta" onClick={() => navigate('case', undefined, next.id)}>
                Read next <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function CaseVisual({ data }: { data: CaseStudyData }) {
  if (data.heroImg) {
    const isSvg = data.heroImg.endsWith('.svg');
    return <img src={data.heroImg} alt={`${data.title} screens`} className={`cs-hero-img${isSvg ? ' cs-hero-img--svg' : ''}`} />;
  }
  if (data.thumb === 'h2o') {
    return (
      <div className="placeholder h2o">
        <div className="ph-ring"></div>
        <div className="ph-label">Daily hydration · 1.7L of 2.5L</div>
      </div>
    );
  }
  return (
    <div className="placeholder gor">
      <div style={{ height: 24, background: '#1A59FF', borderRadius: 8, margin: '8px 0' }}></div>
      <div style={{ height: 80, background: 'linear-gradient(135deg, #4DA8FF, #1A59FF)', borderRadius: 12, marginBottom: 12 }}></div>
      <div style={{ height: 14, background: '#E5EBFF', borderRadius: 6, marginBottom: 6 }}></div>
      <div style={{ height: 14, background: '#E5EBFF', borderRadius: 6, marginBottom: 12, width: '70%' }}></div>
      <div style={{ height: 40, background: '#1A59FF', borderRadius: 10, marginTop: 'auto' }}></div>
    </div>
  );
}

function renderBlock(b: Block, i: number): React.ReactNode {
  if (b.t === 'p') {
    return <p key={i} dangerouslySetInnerHTML={{ __html: b.c as string }} />;
  }
  if (b.t === 'pull') {
    return (
      <blockquote key={i} className="cs-pull">
        {b.c as string}
        {b.cite && <cite>— {b.cite}</cite>}
      </blockquote>
    );
  }
  if (b.t === 'cards') {
    return (
      <div key={i} className="cs-cards">
        {(b.c as CardItem[]).map((card, j) => (
          <div key={j} className="cs-card">
            <div className="icon">{card.i}</div>
            <h4>{card.h}</h4>
            <p>{card.p}</p>
          </div>
        ))}
      </div>
    );
  }
  if (b.t === 'persona') {
    const p = b.c as PersonaData;
    return (
      <div key={i} className="persona">
        <div className="persona-avatar">{p.initials}</div>
        <div>
          <h5>{p.name}</h5>
          <div className="persona-role">{p.role}</div>
          <div className="persona-quote">"{p.quote}"</div>
        </div>
      </div>
    );
  }
  if (b.t === 'metrics') {
    return (
      <div key={i} className="metric-row">
        {(b.c as MetricItem[]).map((m, j) => (
          <div key={j} className="metric">
            <div className="v">{m.v}</div>
            <div className="l">{m.l}</div>
          </div>
        ))}
      </div>
    );
  }
  if (b.t === 'roadmap') {
    return (
      <div key={i} className="htd-roadmap-grid">
        {(b.c as RoadmapItem[]).map((item, j) => (
          <div key={j} className="htd-roadmap-card">
            <h4>{item.h}</h4>
            <p>{item.p}</p>
          </div>
        ))}
      </div>
    );
  }
  if (b.t === 'figure') {
    const isSvg = b.src?.endsWith('.svg');
    return (
      <figure key={i} className={`cs-figure${b.src ? (isSvg ? ' cs-figure--svg' : ' cs-figure--img') : ''}`}>
        {b.src
          ? <img src={b.src} alt={b.cap ?? b.label ?? ''} className="cs-figure-img" />
          : <div className="viz" style={{ minHeight: b.h ?? 240 }}>{b.label}</div>
        }
        {b.cap && <figcaption className="cs-figure-cap">{b.cap}</figcaption>}
      </figure>
    );
  }
  if (b.t === 'ui-screens' && b.images) {
    return (
      <div key={i} className="cs-ui-screens-grid">
        {b.images.map((src) => (
          <img
            key={src}
            src={encodeURI(src)}
            alt=""
            className="cs-ui-screen-img"
          />
        ))}
      </div>
    );
  }
  return null;
}

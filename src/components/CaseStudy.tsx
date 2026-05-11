import { useEffect, useState } from 'react';
import { caseStudies, type Block, type CardItem, type DesignProcessData, type KddItem, type KeyInsightData, type MetricItem, type PersonaData, type ProblemSolutionData, type RoadmapItem, type CaseStudyData } from '../data';

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
          {(p.goals || p.frustrations) && (
            <div className="persona-gf">
              {p.goals && (
                <div className="persona-gf-col">
                  <h6>Goals</h6>
                  <ul>
                    {p.goals.map((g, j) => <li key={j}>{g}</li>)}
                  </ul>
                </div>
              )}
              {p.frustrations && (
                <div className="persona-gf-col">
                  <h6>Frustrations</h6>
                  <ul>
                    {p.frustrations.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
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
  if (b.t === 'kdd') {
    return (
      <div key={i} className="kdd-grid">
        {(b.c as KddItem[]).map((item, j) => {
          const labels = item.variant === 'cs'
            ? { top: 'Challenge', bottom: 'Solution' }
            : { top: 'Principle', bottom: 'Decision' };
          return (
            <div key={j} className={`kdd-card kdd-card--${item.variant}`}>
              <span className="kdd-pill kdd-pill--top">{labels.top}</span>
              <h4 className="kdd-heading">{item.topHeading}</h4>
              <p className="kdd-sub">{item.topSub}</p>
              <span className="kdd-pill kdd-pill--bottom">{labels.bottom}</span>
              <p className="kdd-body">{item.bottomBody}</p>
            </div>
          );
        })}
      </div>
    );
  }
  if (b.t === 'problem-solution') {
    const ps = b.c as ProblemSolutionData;
    return (
      <div key={i} className="ps-block">
        {b.images && b.images.length > 0 && (
          <div className="ps-images">
            {b.images.map((src, j) => (
              <img key={j} src={src} alt="" className="ps-image" />
            ))}
          </div>
        )}
        <div className="ps-cards">
          <div className="ps-card ps-card--problem">
            <div className="ps-card-head">
              <span className="ps-card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A0522D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2V7a4 4 0 0 0-4-4z" />
                  <path d="M9 13h6M9 17h4" />
                </svg>
              </span>
              <span className="ps-card-title">Problem</span>
            </div>
            <p className="ps-card-body">{ps.problem}</p>
          </div>
          <div className="ps-card ps-card--solution">
            <div className="ps-card-head">
              <span className="ps-card-icon ps-card-icon--check" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#2F8A40" />
                  <path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="ps-card-title">Solution</span>
            </div>
            <p className="ps-card-body">
              {ps.solutionLead && <strong>{ps.solutionLead} </strong>}
              {ps.solution}
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (b.t === 'design-process') {
    const dp = b.c as DesignProcessData;
    return (
      <div key={i} className="dp-block">
        {dp.rows.map((row, ri) => (
          <div key={ri} className="dp-row" data-count={row.length}>
            {row.map((phase, pi) => (
              <div key={pi} className="dp-card">
                <h4 className="dp-card-title">{phase.title}</h4>
                <ul className="dp-card-list">
                  {phase.items.map((it, ii) => <li key={ii}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (b.t === 'key-insight') {
    const ki = b.c as KeyInsightData;
    return (
      <div key={i} className="key-insight">
        <h3 className="key-insight-heading">{ki.heading}</h3>
        <ul className="key-insight-list">
          {ki.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      </div>
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

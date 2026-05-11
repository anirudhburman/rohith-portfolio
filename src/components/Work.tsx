import type { HomeCase } from '../data';

const base = import.meta.env.BASE_URL;
const thumbSvg: Record<string, string> = {
  h2o: `${base}hydrotrack.svg`,
  gor: `${base}goround.svg`,
};

interface WorkProps {
  cases: HomeCase[];
  navigate: (route: string, sectionId?: string, caseId?: string) => void;
}

export default function Work({ cases, navigate }: WorkProps) {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <div className="rule"></div>
          <div>
            <div className="label">02 — Selected Work</div>
            <h2>My Work...</h2>
          </div>
          <div className="meta">{cases.length} case studies</div>
        </div>

        <div className="work-list">
          {cases.map((c, i) => (
            <article
              key={c.id}
              className="case"
              onClick={() => navigate('case', undefined, c.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('case', undefined, c.id); }}
            >
              <div className={`case-thumb ${c.thumb}`}>
                {thumbSvg[c.thumb] && (
                  <img className="floats" src={thumbSvg[c.thumb]} alt="" aria-hidden="true" />
                )}
              </div>
              <div className="case-body">
                <div className="case-eyebrow">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span>·</span>
                  <span>{c.kind}</span>
                </div>
                <h4>{c.title}</h4>
                <p className="case-desc">{c.desc}</p>
                <div className="case-tags">
                  {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <button
                  className="case-cta"
                  onClick={(e) => { e.stopPropagation(); navigate('case', undefined, c.id); }}
                >
                  View case study
                  <span className="arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

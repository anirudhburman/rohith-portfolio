export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div className="rule"></div>
          <div>
            <div className="label">01 — About</div>
            <h2>About</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>I'm a self-taught UX/UI designer who enjoys solving everyday problems through simple and functional design.</p>
            <p>I work across the entire design process—from research and ideation to wireframing, prototyping, and visual design. I'm continuously sharpening my skills with real‑world inspired projects, and I love turning complex user needs into clean digital experiences.</p>

            <div className="factgrid">
              <div className="fact">
                <div className="num">6+</div>
                <div className="lab">months self-studying design</div>
              </div>
              <div className="fact">
                <div className="num">4</div>
                <div className="lab">end-to-end mock projects</div>
              </div>
              <div className="fact">
                <div className="num">12</div>
                <div className="lab">user interviews conducted</div>
              </div>
              <div className="fact">
                <div className="num">∞</div>
                <div className="lab">cups of coffee</div>
              </div>
            </div>
          </div>

          <div className="about-portrait">
            <img src="portrait.jpg" alt="Rohith portrait" />
            <div className="about-caption">
              <div>
                <b>Rohith</b>
                Bengaluru · UX/UI
              </div>
              <div>'25</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

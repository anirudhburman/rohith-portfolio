interface Props {
  navigate: (r: string, s?: string, id?: string) => void;
}

export default function HydroTrackDetail({ navigate: _navigate }: Props) {
  return (
    <div className="htd">
      {/* Hero */}
      <section className="htd-hero">
        <div className="htd-hero-deco-circle" />
        <div className="htd-hero-right">
          <h1 className="htd-hero-title">HydroTrack</h1>
          <p className="htd-hero-subtitle">
            A health-tech mobile app that makes daily hydration effortless through personalised goals, smart logging, and weekly habit insights.
          </p>
          <div className="htd-pills">
            <span className="htd-pill">UX/UI</span>
            <span className="htd-pill">Figma</span>
          </div>
        </div>
        <div className="htd-hero-phones">
          <img src="hydrotrack/h2.png" alt="HydroTrack app screens" className="htd-section-img" />
        </div>
      </section>

      {/* Meta strip */}
      <div className="htd-divider" />
      <section className="htd-meta-strip">
        <div className="htd-meta-item">
          <span className="htd-meta-label">Role</span>
          <span className="htd-meta-value">UX/UI Designer (Solo)</span>
        </div>
        <div className="htd-meta-item">
          <span className="htd-meta-label">Platform</span>
          <span className="htd-meta-value">Mobile App</span>
        </div>
        <div className="htd-meta-item">
          <span className="htd-meta-label">Duration</span>
          <span className="htd-meta-value">4 Weeks</span>
        </div>
        <div className="htd-meta-item">
          <span className="htd-meta-label">Tool</span>
          <span className="htd-meta-value">Figma · Figjam</span>
        </div>
        <div className="htd-meta-item">
          <span className="htd-meta-label">Type</span>
          <span className="htd-meta-value">Mock case study</span>
        </div>
      </section>

      <div className="htd-container">

        {/* Project Brief */}
        <section className="htd-section">
          <p className="htd-eyebrow">Project Brief</p>
          <h2 className="htd-section-heading">The Problem &amp; the Opportunity</h2>
          <div className="htd-two-cards">
            <div className="htd-problem-card">
              <div className="htd-card-accent htd-card-accent--red" />
              <div className="htd-card-inner">
                <div className="htd-card-dot htd-card-dot--red" />
                <h3 className="htd-card-title">The Problem</h3>
                <p className="htd-card-body">
                  Most people know hydration matters, but consistently forget to drink water throughout the day — especially during deep work or back-to-back meetings. People also have no idea how much water they personally need. A one-size-fits-all "8 glasses a day" rule ignores factors like body weight, activity level.
                </p>
              </div>
            </div>
            <div className="htd-opportunity-card">
              <div className="htd-card-accent htd-card-accent--green" />
              <div className="htd-card-inner">
                <div className="htd-card-dot htd-card-dot--green" />
                <h3 className="htd-card-title">The opportunity</h3>
                <p className="htd-card-body">
                  Design a hydration companion that feels calm and frictionless — one that calculates a personalised daily goal, makes logging water a 2-second gesture, delivers smart reminders, and leverages weekly data to build lasting habits over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Thinking Process */}
        <section className="htd-section">
          <h2 className="htd-section-heading">Design Thinking Process</h2>
          <img src="hydrotrack/design-thinking-process.png" alt="Design thinking process diagram" className="htd-section-img" />
        </section>

        {/* Research & User Insights */}
        <section className="htd-section">
          <p className="htd-eyebrow">Discovery</p>
          <h2 className="htd-section-heading">Research &amp; User Insights</h2>
          <p className="htd-body-text">
            To understand the real problem, I conducted 5 user interviews with professionals aged 22–35 — a mix of remote workers, gym-goers, and busy students. I synthesised findings using an empathy map and affinity diagram.
          </p>

          {/* User Interview Questions */}
          <h3 className="htd-sub-heading">User Interview Question</h3>
          <div className="htd-questions-card">
            <ol className="htd-questions-list">
              <li>Walk me through your typical day - when do you usually drink water?</li>
              <li>How do you currently keep track of how much water you drink?</li>
              <li>What tells you that you&apos;re dehydrated? What are your personal signs?</li>
              <li>Do you use any bottles or containers? What size are they?</li>
              <li>Has your drinking habit changed over the years? How?</li>
              <li>Tell me about a time you realized you hadn&apos;t drunk enough water. What happened?</li>
              <li>What&apos;s the hardest part about staying hydrated for you?</li>
              <li>Have you ever tried to increase your water intake? What worked and what didn&apos;t?</li>
              <li>When do you MOST often forget to drink water?</li>
              <li>How would you know you&apos;re &apos;successful&apos; at hydration?</li>
              <li>Is there anything we haven&apos;t talked about that you think is important?</li>
            </ol>
          </div>
        </section>

        {/* Affinity Mapping */}
        <section className="htd-section">
          <h2 className="htd-section-heading">Affinity Mapping</h2>
          <img src="hydrotrack/affinity-map.png" alt="Affinity mapping diagram" className="htd-section-img" />
        </section>

        {/* Empathy Map */}
        <section className="htd-section">
          <h2 className="htd-section-heading">Empathy Map</h2>
          <img src="hydrotrack/empathy-map.png" alt="Empathy map" className="htd-section-img" />
        </section>

        {/* User Persona */}
        <section className="htd-section">
          <p className="htd-sub-label">User Persona</p>
          <h2 className="htd-section-heading">Who Are We Designing For?</h2>
          <p className="htd-body-text htd-centered">
            From the research synthesis, one primary persona emerged — representing the busy professional who wants to build healthier habits without adding cognitive load to their already full workday.
          </p>
          <div className="htd-persona-card">
            <div className="htd-persona-avatar" />
            <div className="htd-persona-info">
              <h3 className="htd-persona-name">Arjun Kumar</h3>
              <p className="htd-persona-subtitle">Software Engineer · 27 yrs · Bangalore</p>
              <p className="htd-persona-quote">
                &ldquo;I work from home and lose track of time. By 4pm I realise I&apos;ve only had one glass of water all day.&rdquo;
              </p>
              <div className="htd-persona-cols">
                <div>
                  <p className="htd-persona-col-title">Goals</p>
                  <ul className="htd-persona-list">
                    <li>Build a sustainable hydration habit</li>
                    <li>Know his exact daily water target</li>
                    <li>Track progress without effort</li>
                    <li>See improvement over weeks</li>
                  </ul>
                </div>
                <div>
                  <p className="htd-persona-col-title">Frustrations</p>
                  <ul className="htd-persona-list">
                    <li>Forgets to drink during deep work</li>
                    <li>Doesn&apos;t know how much water he needs</li>
                    <li>Existing apps feel too complex</li>
                    <li>No meaningful weekly feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Experience Map */}
        <section className="htd-section">
          <p className="htd-sub-label">Ideate</p>
          <h2 className="htd-section-heading">User Experience Map</h2>
          <img src="hydrotrack/ux-map.png" alt="User experience map" className="htd-section-img" />
        </section>

        {/* How Might We */}
        <section className="htd-section">
          <p className="htd-sub-label">Problem Framing</p>
          <p className="htd-hmw-intro">Translating research insights into design questions that guided the solution space:</p>
          <h2 className="htd-section-heading">How Might We..</h2>
          <img src="hydrotrack/how-might-we.png" alt="How Might We questions" className="htd-section-img" />
        </section>

        {/* User Flow */}
        <section className="htd-section">
          <h2 className="htd-section-heading">User Flow</h2>
          <img src="hydrotrack/user-flow.png" alt="User flow diagram" className="htd-section-img" />
        </section>

        {/* Design */}
        <section className="htd-section">
          <h2 className="htd-section-heading">Design</h2>
          <img src="hydrotrack/design-mockups.png" alt="HydroTrack design mockups" className="htd-section-img" />
        </section>

        {/* Design Rationale */}
        <section className="htd-section">
          <p className="htd-sub-label">Design Rationale</p>
          <h2 className="htd-section-heading">Key Design Decisions</h2>
          <p className="htd-body-text htd-centered">
            Several deliberate choices shaped the final design. Each decision was grounded in a research finding or UX principle:
          </p>
          <div className="htd-decision-grid">
            <div className="htd-decision-card">
              <span className="htd-badge htd-badge--challenge">Challenge</span>
              <p className="htd-decision-title">Users abandon apps with complex logging</p>
              <span className="htd-badge htd-badge--solution">Solution</span>
              <p className="htd-decision-body">
                Quick-add preset buttons (200ml, 300ml, 500ml) make the most common log a single tap. A custom option is always accessible but not the default path.
              </p>
            </div>
            <div className="htd-decision-card">
              <span className="htd-badge htd-badge--challenge">Challenge</span>
              <p className="htd-decision-title">Generic goals feel irrelevant and demotivating</p>
              <span className="htd-badge htd-badge--solution">Solution</span>
              <p className="htd-decision-body">
                HydroCalc makes the goal feel &ldquo;earned and scientific.&rdquo; When users calculate their own number, they&apos;re more invested in hitting it — this is the Endowment Effect in habit design.
              </p>
            </div>
            <div className="htd-decision-card">
              <span className="htd-badge htd-badge--principle">Principle</span>
              <p className="htd-decision-title">Positive framing in weekly insights</p>
              <span className="htd-badge htd-badge--decision">Decision</span>
              <p className="htd-decision-body">
                The weekly summary leads with &ldquo;Days you hit your goal&rdquo; before showing missed days. Win streaks are celebrated; misses are shown in neutral grey, not red.
              </p>
            </div>
            <div className="htd-decision-card">
              <span className="htd-badge htd-badge--principle">Principle</span>
              <p className="htd-decision-title">Progress ring over a simple number</p>
              <span className="htd-badge htd-badge--decision">Decision</span>
              <p className="htd-decision-body">
                A visual progress ring taps into the Goal Gradient Effect — people accelerate effort as they get closer to a visible finish line.
              </p>
            </div>
          </div>
        </section>

        {/* Usability Testing */}
        <section className="htd-section">
          <p className="htd-sub-label">Validation</p>
          <h2 className="htd-section-heading">Usability Testing &amp; Outcomes</h2>
          <p className="htd-body-text htd-centered">
            I conducted moderated usability testing with 4 participants using an interactive Figma prototype.
          </p>
          <h3 className="htd-sub-heading">What Users Said</h3>
          <div className="htd-quotes-list">
            <div className="htd-quote-card">
              <p>&ldquo;HydroCalc is what sold me. I&apos;ve always wondered if 2 litres is right for me. Getting a number calculated from my own weight just feels trustworthy.&rdquo;</p>
            </div>
            <div className="htd-quote-card">
              <p>&ldquo;The quick-add buttons are perfect. I just tap 300ml and it&apos;s done. Takes less time than unlocking my phone.&rdquo;</p>
            </div>
            <div className="htd-quote-card">
              <p>&ldquo;I liked that the weekly screen highlighted my best day rather than making me feel bad about missing two. It felt encouraging.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="htd-section">
          <p className="htd-sub-label">Future Roadmap</p>
          <h2 className="htd-section-heading">What I&apos;d Explore Next</h2>
          <div className="htd-roadmap-grid">
            <div className="htd-roadmap-card">
              <h4>AI-Powered Smart Reminders</h4>
              <p>Learn user patterns and send reminders at the moments they&apos;re most likely to forget — not just on a fixed schedule.</p>
            </div>
            <div className="htd-roadmap-card">
              <h4>Weather-Adaptive Goals</h4>
              <p>Increase daily target automatically on hot days or after a workout is detected via Health App integration.</p>
            </div>
            <div className="htd-roadmap-card">
              <h4>Social Accountability</h4>
              <p>Optional &ldquo;hydration buddy&rdquo; feature — share streaks with a friend and get notified if they&apos;re falling behind.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="htd-footer">
        <p>Designed by <strong>Rohith</strong> · UX/UI Designer · Bangalore, India</p>
        <p>HydroTrack · Mock Case Study · Built with Figma &amp; Design Thinking</p>
      </footer>
    </div>
  );
}

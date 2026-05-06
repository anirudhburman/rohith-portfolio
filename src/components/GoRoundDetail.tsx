interface Props {
  navigate: (r: string, s?: string, id?: string) => void;
}

export default function GoRoundDetail({ navigate: _navigate }: Props) {
  return (
    <div className="grd">
      {/* Hero */}
      <section className="grd-hero">
        <div className="grd-hero-circle grd-hero-circle--lg" />
        <div className="grd-hero-circle grd-hero-circle--sm1" />
        <div className="grd-hero-circle grd-hero-circle--sm2" />
        <div className="grd-hero-circle grd-hero-circle--sm3" />
        <div className="grd-hero-circle grd-hero-circle--sm4" />
        <div className="grd-hero-inner">
          <h1 className="grd-hero-title">GO Round</h1>
          <p className="grd-hero-subtitle">Easy your trip with AI planner</p>
        </div>
        <div className="grd-hero-phones">
          <div className="grd-phone grd-phone--left" />
          <div className="grd-phone grd-phone--center" />
          <div className="grd-phone grd-phone--right" />
        </div>
      </section>

      <div className="grd-container">

        {/* Overview */}
        <section className="grd-section">
          <h2 className="grd-section-heading">Overview</h2>
          <p className="grd-body-text">
            <span className="grd-brand">Go Round</span> - is an all-in-one travel planning platform designed to simplify every stage of the travel experience. From discovering destinations and booking stays to selecting the best transportation options — including bus, train, car, and flight — Go Round ensures a seamless journey for every traveler. The app features an integrated AI assistant &apos;Redna&apos; which helps users plan personalized itineraries, review upcoming schedules, and even store trip memories through photos.
          </p>
        </section>

        {/* My Role */}
        <section className="grd-section">
          <div className="grd-role-card">
            <p className="grd-role-label">My role:</p>
            <p className="grd-role-body">
              To design a single, intelligent travel platform that allows users to easily discover, plan, and manage trips from start to finish — with a smart AI assistant to automate itinerary creation and scheduling.
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grd-section">
          <div className="grd-ps-grid">
            <div className="grd-ps-item">
              <div className="grd-ps-img-placeholder" />
              <div className="grd-ps-box grd-ps-box--problem">
                <p className="grd-ps-box-title">Problem</p>
                <p className="grd-ps-box-body">
                  Travelers struggle to plan trips because they must use multiple apps for inspiration, planning, and booking, which causes decision fatigue and fragmented experiences.
                </p>
              </div>
            </div>
            <div className="grd-ps-item">
              <div className="grd-ps-img-placeholder" />
              <div className="grd-ps-box grd-ps-box--solution">
                <p className="grd-ps-box-title">Go Round</p>
                <p className="grd-ps-box-body">
                  We propose a mood-based travel planning app that unifies discovery, itinerary building, and booking into one seamless experience. By starting with user intent (travel mood), providing smart auto-generated itineraries, and offering a calm, guided interface, the app simplifies trip planning and supports users before, during, and after their journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="grd-section">
          <div className="grd-process-card">
            <h2 className="grd-section-heading">Design Process</h2>
            <div className="grd-process-grid">
              <div className="grd-process-item">
                <p className="grd-process-item-title">Empathize</p>
                <p className="grd-process-item-body">User Research<br />Observation<br />Competitive analysis</p>
              </div>
              <div className="grd-process-item">
                <p className="grd-process-item-title">Define</p>
                <p className="grd-process-item-body">Affinity mapping<br />Identify pain points &amp; needs<br />Define user goals</p>
              </div>
              <div className="grd-process-item">
                <p className="grd-process-item-title">Ideate</p>
                <p className="grd-process-item-body">User flows<br />Information architecture</p>
              </div>
              <div className="grd-process-item">
                <p className="grd-process-item-title">Prototype</p>
                <p className="grd-process-item-body">Low-fidelity wireframes<br />UI screens<br />Interactive prototype</p>
              </div>
              <div className="grd-process-item">
                <p className="grd-process-item-title">Test</p>
                <p className="grd-process-item-body">Usability testing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Empathize */}
        <section className="grd-section">
          <h2 className="grd-section-heading">Empathize</h2>
          <p className="grd-body-text">
            To gain insights by understanding the user&apos;s Behavior and their needs, how the app should be designed. Conducted interview with number of people where a set of open ended questions were asked in order to know how they respond and make decision, and to understand their pain point depending on their responses by empathizing with them.
          </p>
        </section>

        {/* User Statements */}
        <section className="grd-section">
          <h2 className="grd-section-heading">User Statement</h2>
          <div className="grd-statements-grid">
            <div className="grd-statement-card">&ldquo;I dont want plan everything. Just tell me whats best.&rdquo;</div>
            <div className="grd-statement-card">&ldquo;After booking, the app is useless.&rdquo;</div>
            <div className="grd-statement-card">&ldquo;I use Instagram for ideas, Google for place, Airbnb for stay and MakeMyTrip for flights&rdquo;</div>
            <div className="grd-statement-card">&ldquo;There are too many option. I don&apos;t know where to start&rdquo;</div>
            <div className="grd-statement-card">&ldquo;Need to switch between multiple app for one trip&rdquo;</div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="grd-section">
          <h2 className="grd-section-heading">Competitive Analysis</h2>
          <p className="grd-body-text">
            To identify the strengths and weakness of the established apps in the market. I conducted an in depth competitive analysis on two well-known apps, Airbnb &amp; MakeMyTrip.
          </p>
          <div className="grd-table-wrap">
            <table className="grd-comp-table">
              <thead>
                <tr className="grd-comp-header">
                  <th className="grd-comp-th grd-comp-th--feature">Feature</th>
                  <th className="grd-comp-th">Airbnb</th>
                  <th className="grd-comp-th">MakeMyTrip</th>
                  <th className="grd-comp-th grd-comp-th--goround">GoRound</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grd-comp-row">
                  <td className="grd-comp-td grd-comp-td--feature">Mood-based discovery</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                </tr>
                <tr className="grd-comp-row">
                  <td className="grd-comp-td grd-comp-td--feature">Smart itinerary builder</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                </tr>
                <tr className="grd-comp-row">
                  <td className="grd-comp-td grd-comp-td--feature">In-trip assistant</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                </tr>
                <tr className="grd-comp-row">
                  <td className="grd-comp-td grd-comp-td--feature">Calm minimal UX</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                </tr>
                <tr className="grd-comp-row">
                  <td className="grd-comp-td grd-comp-td--feature">End-to-end booking</td>
                  <td className="grd-comp-td grd-comp-td--no">&#10007;</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                  <td className="grd-comp-td grd-comp-td--yes">&#10003;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grd-insight-box">
            <p className="grd-insight-title">Key Insight</p>
            <ul className="grd-insight-list">
              <li>Allow user to choose destination according to their mood which makes user to select their travel without confusion</li>
              <li>Navigates user End-to-End from Discovering Destination, select Stay and Book transportation</li>
              <li>Go-round helps user to Plan their trip itinerary with Built-in AI Support &apos;Redna&apos;</li>
            </ul>
          </div>
        </section>

        {/* Affinity Mapping */}
        <section className="grd-section">
          <h2 className="grd-section-heading">Affinity Mapping</h2>
          <p className="grd-body-text">
            After the interviews, I&apos;ve analyzed the Data collected, by arranging the similar information&apos;s into a specific set of separate groups by using the process called affinity mapping.
          </p>
          <div className="grd-affinity-grid">
            <div className="grd-affinity-col grd-affinity-col--pink">
              <p className="grd-affinity-col-title">User Statement</p>
              <div className="grd-sticky-note">Too many steps to complete booking</div>
              <div className="grd-sticky-note">Sudden price change and hidden charges</div>
              <div className="grd-sticky-note">Fake or misleading photos</div>
              <div className="grd-sticky-note">Confusing cancellation rules</div>
              <div className="grd-sticky-note">Slow loading during search</div>
            </div>
            <div className="grd-affinity-col grd-affinity-col--yellow">
              <p className="grd-affinity-col-title">Goals</p>
              <div className="grd-sticky-note">Book trip quickly with minimum steps</div>
              <div className="grd-sticky-note">See final price upfront without surprises</div>
              <div className="grd-sticky-note">Trust hotel info before paying</div>
              <div className="grd-sticky-note">Feel secure about cancellation and refund</div>
              <div className="grd-sticky-note">Fast loading</div>
            </div>
            <div className="grd-affinity-col grd-affinity-col--blue">
              <p className="grd-affinity-col-title">Pain Points</p>
              <div className="grd-sticky-note">Confusing checkout flow</div>
              <div className="grd-sticky-note">Hidden costs</div>
              <div className="grd-sticky-note">Slow app performance</div>
              <div className="grd-sticky-note">Under policies</div>
              <div className="grd-sticky-note">Trust issues with listing</div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="grd-section">
          <h2 className="grd-section-heading">User Personas</h2>

          {/* Persona 1 */}
          <div className="grd-persona-card">
            <div className="grd-persona-photo-placeholder" />
            <div className="grd-persona-content">
              <div className="grd-persona-quote-box">
                <span className="grd-persona-quote-label">Quote : </span>
                <span>I just want a quick plan that fits my mood. Planning takes more time than the trip.</span>
              </div>
              <div className="grd-persona-details-box">
                <div className="grd-persona-field"><span className="grd-persona-field-label">Name</span><span>Arjun</span></div>
                <hr className="grd-persona-divider" />
                <div className="grd-persona-field"><span className="grd-persona-field-label">Age</span><span>28</span></div>
                <hr className="grd-persona-divider" />
                <div className="grd-persona-field"><span className="grd-persona-field-label">Profession</span><span>Engineer</span></div>
                <hr className="grd-persona-divider" />
                <div className="grd-persona-field"><span className="grd-persona-field-label">Location</span><span>Bangalore</span></div>
              </div>
              <div className="grd-persona-gp-boxes">
                <div className="grd-persona-gp-box">
                  <p className="grd-persona-gp-title">Goal</p>
                  <p>Discover new places quickly<br />Minimal planning effort<br />Unique &amp; meaningful experiences</p>
                </div>
                <div className="grd-persona-gp-box">
                  <p className="grd-persona-gp-title">Pain Point</p>
                  <p>Too many options confuse him<br />Switching between multiple apps<br />Doesn&apos;t want to plan everything manually</p>
                </div>
              </div>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="grd-persona-card">
            <div className="grd-persona-photo-placeholder" />
            <div className="grd-persona-content">
              <div className="grd-persona-quote-box">
                <span className="grd-persona-quote-label">Quote : </span>
                <span>I want everything planned in one place so I don&apos;t forget anything</span>
              </div>
              <div className="grd-persona-details-box">
                <div className="grd-persona-field"><span className="grd-persona-field-label">Name</span><span>Priya</span></div>
                <hr className="grd-persona-divider" />
                <div className="grd-persona-field"><span className="grd-persona-field-label">Age</span><span>35</span></div>
                <hr className="grd-persona-divider" />
                <div className="grd-persona-field"><span className="grd-persona-field-label">Profession</span><span>HR Manager</span></div>
                <hr className="grd-persona-divider" />
                <div className="grd-persona-field"><span className="grd-persona-field-label">Location</span><span>Bangalore</span></div>
              </div>
              <div className="grd-persona-gp-boxes">
                <div className="grd-persona-gp-box">
                  <p className="grd-persona-gp-title">Goal</p>
                  <p>Clear itinerary<br />Safe, reliable Stay</p>
                </div>
                <div className="grd-persona-gp-box">
                  <p className="grd-persona-gp-title">Pain Point</p>
                  <p>Managing multiple bookings<br />No single view of the trip</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Map */}
        <section className="grd-section">
          <h2 className="grd-section-heading">User Journey Map</h2>
          <p className="grd-body-text">
            User journey Map was created on the basis of MARCUS TAYLOR persona. Emotions expressed at different stages shows happiness, sad and frustration of a user. By this activity we can know a user&apos;s response, behavior and pain points at different stages of process.
          </p>
          <div className="grd-table-wrap">
            <table className="grd-journey-table">
              <thead>
                <tr>
                  <th className="grd-jth">Phase</th>
                  <th className="grd-jth">Action</th>
                  <th className="grd-jth">Pain Point</th>
                  <th className="grd-jth">Emotion</th>
                  <th className="grd-jth">Opportunity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="grd-jtd grd-jtd--phase">Inspiration</td>
                  <td className="grd-jtd">Browses ideas</td>
                  <td className="grd-jtd">No direction</td>
                  <td className="grd-jtd">&#128528;</td>
                  <td className="grd-jtd">Mood-based discovery</td>
                </tr>
                <tr>
                  <td className="grd-jtd grd-jtd--phase">Research</td>
                  <td className="grd-jtd">Compares apps</td>
                  <td className="grd-jtd">Too many options</td>
                  <td className="grd-jtd">&#128543;</td>
                  <td className="grd-jtd">Curated suggestions</td>
                </tr>
                <tr>
                  <td className="grd-jtd grd-jtd--phase">Planning</td>
                  <td className="grd-jtd">Creates itinerary</td>
                  <td className="grd-jtd">Manual effort</td>
                  <td className="grd-jtd">&#128547;</td>
                  <td className="grd-jtd">Auto itinerary</td>
                </tr>
                <tr>
                  <td className="grd-jtd grd-jtd--phase">Booking</td>
                  <td className="grd-jtd">Books stays &amp; travel</td>
                  <td className="grd-jtd">App switching</td>
                  <td className="grd-jtd">&#128533;</td>
                  <td className="grd-jtd">Unified booking</td>
                </tr>
                <tr>
                  <td className="grd-jtd grd-jtd--phase">Pre-trip</td>
                  <td className="grd-jtd">Prepares trip</td>
                  <td className="grd-jtd">Missed details</td>
                  <td className="grd-jtd">&#128528;</td>
                  <td className="grd-jtd">Trip dashboard</td>
                </tr>
                <tr>
                  <td className="grd-jtd grd-jtd--phase">During trip</td>
                  <td className="grd-jtd">Follows plan</td>
                  <td className="grd-jtd">No guidance</td>
                  <td className="grd-jtd">&#128543;</td>
                  <td className="grd-jtd">In-trip assistant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Wireframes */}
        <section className="grd-section">
          <h2 className="grd-section-heading">Wireframes</h2>
          <p className="grd-body-text">
            Designed end-to-end journey for Go Round covering onboarding, booking, AI Chat, and profile to ensure a clear, intuitive structure that balances usability, accessibility and flexibility.
          </p>
          <div className="grd-wireframe-grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="grd-wireframe-phone" />
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="grd-section">
          <h2 className="grd-section-heading">Typography</h2>
          <div className="grd-typo-card">
            <p className="grd-typo-name">Inter</p>
            <div className="grd-typo-weights">
              <span style={{ fontWeight: 400 }}>Regular</span>
              <span style={{ fontWeight: 500 }}>Medium</span>
              <span style={{ fontWeight: 600 }}>SemiBold</span>
              <span style={{ fontWeight: 700 }}>Bold</span>
            </div>
          </div>
        </section>


      </div>

      {/* Footer / Thank you */}
      <div className="grd-thankyou">
        <h2 className="grd-thankyou-title">Thank you for scrolling!</h2>
        <p className="grd-thankyou-sub">Hope you enjoyed exploring Go Round - a smarter, friendlier way to plan your travels.</p>
      </div>
    </div>
  );
}

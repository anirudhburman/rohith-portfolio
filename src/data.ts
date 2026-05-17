export interface CaseMeta {
  k: string;
  v: string;
}

export type BlockType = 'p' | 'pull' | 'cards' | 'persona' | 'metrics' | 'figure' | 'roadmap' | 'ui-screens' | 'kdd' | 'problem-solution' | 'design-process' | 'key-insight';

export interface CardItem {
  i: string;
  h: string;
  p: string;
}

export interface RoadmapItem {
  h: string;
  p: string;
}

export interface MetricItem {
  v: string;
  l: string;
}

export interface KddItem {
  variant: 'cs' | 'pd';
  topHeading: string;
  topSub: string;
  bottomBody: string;
}

export interface PersonaData {
  initials: string;
  name: string;
  role: string;
  quote: string;
  goals?: string[];
  frustrations?: string[];
}

export interface ProblemSolutionData {
  problem: string;
  solutionLead?: string;
  solution: string;
}

export interface DesignPhase {
  title: string;
  items: string[];
}

export interface DesignProcessData {
  rows: DesignPhase[][];
}

export interface KeyInsightData {
  heading: string;
  items: string[];
}

export interface Block {
  t: BlockType;
  c?: string | CardItem[] | MetricItem[] | PersonaData | RoadmapItem[] | KddItem[] | ProblemSolutionData | DesignProcessData | KeyInsightData;
  cite?: string;
  label?: string;
  cap?: string;
  h?: number;
  src?: string;
  images?: string[];
}

export interface CaseSection {
  id: string;
  eyebrow: string;
  title: string;
  body: Block[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  kind: string;
  thumb: string;
  glyph: string;
  lede: string;
  tags: string[];
  meta: CaseMeta[];
  sections: CaseSection[];
  heroImg?: string;
}

export interface HomeCase {
  id: string;
  title: string;
  kind: string;
  thumb: string;
  glyph: string;
  desc: string;
  tags: string[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  hydrotrack: {
    id: 'hydrotrack',
    title: 'HydroTrack',
    kind: 'Mobile App · UX Case Study',
    thumb: 'h2o',
    glyph: '💧',
    heroImg: 'hydrotrack/h2.svg',
    lede: 'A health-tech mobile app that makes daily hydration effortless through personalised goals, smart logging, and weekly habit insights.',
    tags: ['UX/UI', 'Mobile', 'Figma', 'Health-tech'],
    meta: [
      { k: 'Role', v: 'UX/UI Designer (solo)' },
      { k: 'Platform', v: 'Mobile App' },
      { k: 'Duration', v: '4 weeks' },
      { k: 'Tools', v: 'Figma · FigJam' },
    ],
    sections: [
      {
        id: 'overview',
        eyebrow: 'The setup',
        title: 'Overview',
        body: [
          { t: 'p', c: 'HydroTrack is a mobile hydration app designed to help busy professionals build a consistent water-drinking habit with minimal effort. It addresses a key problem: <strong>people know hydration matters but often forget</strong> — and most don\'t know what their ideal daily intake actually is.' },
          { t: 'p', c: 'The app pairs a one-tap daily tracker with a personalised goal calculator (HydroCalc), smart reminders, and a non-judgmental weekly insights screen. This mock case study showcases my end-to-end UX process — from research and journeys to wireframes and high-fidelity UI.' },
          { t: 'metrics', c: [
            { v: '5', l: 'User interviews' },
            { v: '5+', l: 'Screens designed' },
            { v: '4 wks', l: 'End-to-end' },
          ]},
        ],
      },
      {
        id: 'problem',
        eyebrow: 'Project brief',
        title: 'The problem & the opportunity',
        body: [
          { t: 'p', c: 'Most people know hydration matters, but consistently forget to drink water throughout the day — especially during deep work or back-to-back meetings. People also have no idea how much water they personally need. A one-size-fits-all "8 glasses a day" rule ignores factors like body weight, activity level.' },
          { t: 'pull', c: '"I download these apps, log water for two days, then forget. By Friday I\'ve uninstalled it."', cite: 'P3, remote worker' },
          { t: 'p', c: 'The opportunity: Design a hydration companion that feels calm and frictionless — one that calculates a personalised daily goal, makes logging water a 2-second gesture, delivers smart reminders, and leverages weekly data to build lasting habits over time.' },
        ],
      },
      {
        id: 'design-thinking',
        eyebrow: 'Process',
        title: 'Design Thinking Process',
        body: [
          { t: 'figure', src: 'hydrotrack/design-thinking-process.png', cap: 'Empathy → Define → Ideate → Prototype → Test.' },
        ],
      },
      {
        id: 'research',
        eyebrow: 'Discovery',
        title: 'Research & user insights',
        body: [
          { t: 'p', c: 'I conducted 5 user interviews with professionals aged 22–35 — a mix of remote workers, gym-goers, and busy students. Findings were synthesised using an empathy map and an affinity diagram.' },
          { t: 'cards', c: [
            { i: '01', h: 'Forgetting, not unwillingness', p: 'Every participant believed in hydration. Friction wasn\'t motivation — it was memory.' },
            { i: '02', h: 'Goal opacity', p: '4 of 5 users had no idea how much water they should drink. Default 8-glass advice felt arbitrary.' },
            { i: '03', h: 'Logging fatigue', p: 'Multi-tap entry kills habits. Users wanted ≤2 taps from notification to logged.' },
            { i: '04', h: 'Shame is a churn vector', p: 'Apps that punished missed days got uninstalled within a week.' },
          ]},
        ],
      },
      {
        id: 'affinity-map',
        eyebrow: 'Affinity',
        title: 'Affinity Map',
        body: [
          { t: 'figure', src: 'hydrotrack/affinity-map.svg', cap: 'Five clusters emerged from 38 sticky notes — Memory, Goal Clarity, Logging Speed, Tone, and Context.' },
        ],
      },
      {
        id: 'empathy-map',
        eyebrow: 'Empathy',
        title: 'Think - Does - Feel',
        body: [
          { t: 'figure', src: 'hydrotrack/empathy-map.png', cap: 'Empathy map synthesising what users say, think, do, and feel around hydration.' },
        ],
      },
      {
        id: 'persona',
        eyebrow: 'Who we\'re designing for',
        title: 'User persona',
        body: [
          { t: 'p', c: 'Arjun captures the dominant persona: tech-fluent, time-poor, mildly health-conscious, and allergic to apps that nag. His mental model is "give me one number to hit, ping me at the right times, and don\'t make me feel bad about Tuesday."' },
          { t: 'persona', c: {
            initials: 'AK',
            name: 'Arjun Kumar',
            role: 'Software engineer, 27 · Bengaluru',
            quote: 'I work from home and lose track of time. By 4pm I realise I\'ve only had one glass of water all day.',
            goals: [
              'Build a sustainable hydration habit',
              'Know his exact daily water target',
              'Track progress without effort',
              'See improvement over weeks',
            ],
            frustrations: [
              'Forgets to drink during deep work',
              'Doesn\'t know how much water he needs',
              'Existing apps feel too complex',
              'No meaningful weekly feedback',
            ],
          }},
          ]
      },
      {
        id: 'ux-map',
        eyebrow: 'Ideate',
        title: 'User Experience Map',
        body: [
          { t: 'figure', src: 'hydrotrack/ux-map.png', cap: 'User experience map tracing Arjun\'s journey across five hydration phases.' },
        ],
      },
      {
        id: 'hmw',
        eyebrow: 'Problem framing',
        title: 'How Might We',
        body: [
          { t: 'figure', src: 'hydrotrack/how-might-we.png', cap: 'How Might We questions that guided the solution space.' },
        ],
      },
      {
        id: 'flows',
        eyebrow: 'IA & flows',
        title: 'Information architecture',
        body: [
          { t: 'p', c: 'I mapped three core flows: <strong>onboarding (HydroCalc)</strong>, <strong>daily logging</strong>, and <strong>weekly review</strong>. Each one was scoped to a target tap-count budget.' },
          { t: 'figure', src: 'hydrotrack/user-flow.png', cap: 'User flow covering onboarding, daily logging, and weekly review paths.' },
        ],
      },
      {
        id: 'design',
        eyebrow: 'Visuals',
        title: 'Design',
        body: [
          { t: 'figure', src: 'hydrotrack/design-mockups.png', cap: 'Hi-fi screen set: home, log sheet, HydroCalc, insights, settings.' },
        ],
      },
      {
        id: 'design-decision',
        eyebrow: 'Design Rationale',
        title: 'Key Design decisions',
        body: [
          { t: 'kdd', c: [
            {
              variant: 'cs',
              topHeading: 'Users abandon apps with complex logging',
              topSub: 'Multi-step logging flows caused the most drop-offs in competing apps',
              bottomBody: 'Quick-add preset buttons (200ml, 300ml, 500ml) make the most common log a single tap. A custom option is always accessible but not the default path.',
            },
            {
              variant: 'cs',
              topHeading: 'Generic goals feel irrelevant and demotivating',
              topSub: 'Users who didn\'t trust their goal stopped tracking against it.',
              bottomBody: 'HydroCalc makes the goal feel "earned and scientific." When users calculate their own number, they\'re more invested in hitting it — this is the Endowment Effect in habit design.',
            },
            {
              variant: 'pd',
              topHeading: 'Positive framing in weekly insights',
              topSub: 'Health apps often shame users for missed days, increasing anxiety.',
              bottomBody: 'The weekly summary leads with "Days you hit your goal" before showing missed days. Win streaks are celebrated; misses are shown in neutral grey, not red.',
            },
            {
              variant: 'pd',
              topHeading: 'Progress ring over a simple number',
              topSub: 'Showing "1850ml" communicates information, but doesn\'t create motivation.',
              bottomBody: 'A visual progress ring taps into the Goal Gradient Effect — people accelerate effort as they get closer to a visible finish line.',
            },
          ]},
        ],
      },
      {
        id: 'testing',
        eyebrow: 'Validation',
        title: 'Usability testing',
        body: [
          { t: 'p', c: 'I conducted moderated usability testing with 4 participants on the high-fi prototype. I observed each task, scored time-on-task, and asked SEQ ratings.' },
          { t: 'metrics', c: [
            { v: '100%', l: 'Completed onboarding' },
            { v: '2.4s', l: 'Avg log time' },
            { v: '6.5/7', l: 'Avg SEQ score' },
          ]},
          { t: 'pull', c: '"HydroCalc is what sold me. I\'ve always wondered if 2 litres is right for me. Getting a number calculated from my own weight just feels trustworthy."', cite: 'Test participant T1' },
          { t: 'pull', c: '"The quick-add buttons are perfect. I just tap 300ml and it\'s done. Takes less time than unlocking my phone."', cite: 'Test participant T2' },
          { t: 'pull', c: '"I liked that the weekly screen highlighted my best day rather than making me feel bad about missing two. It felt encouraging."', cite: 'Test participant T3' },
          { t: 'pull', c: '"I get it instantly. The ring tells me where I am without me having to read."', cite: 'Test participant T4' },
        ],
      },
      {
        id: 'reflections',
        eyebrow: 'Closing',
        title: 'Reflections & next steps',
        body: [
          { t: 'p', c: 'Designing HydroTrack reinforced for me that <strong>tone is a feature</strong>. The same UI with a punishing copy voice would fail. The same UI with a gentle voice retains.' },
          { t: 'p', c: 'Next steps I\'d explore: integrating with Apple Health/Google Fit for activity-aware goal recalibration, and a low-fi watch face complication for one-glance logging without opening the phone.' },
          { t: 'roadmap', c: [
            { h: 'AI-Powered Smart Reminders', p: 'Learn user patterns and send reminders at the moments they\'re most likely to forget — not just on a fixed schedule.' },
            { h: 'Weather-Adaptive Goals', p: 'Increase daily target automatically on hot days or after a workout is detected via Health App integration.' },
            { h: 'Social Accountability', p: 'Optional "hydration buddy" feature — share streaks with a friend and get notified if they\'re falling behind.' },
          ] },
        ],
      },
    ],
  },

  goround: {
    id: 'goround',
    title: 'Go Round',
    kind: 'Travel App · UX Case Study',
    thumb: 'gor',
    glyph: '✈',
    heroImg: 'goRound/gor.svg',
    lede: 'An all-in-one travel app for planning trips, booking stays and transport, with an AI assistant — Redna — that personalises itineraries and manages your journey.',
    tags: ['UX/UI', 'Mobile', 'AI', 'Travel'],
    meta: [
      { k: 'Role', v: 'UX/UI Designer (solo)' },
      { k: 'Platform', v: 'Mobile App' },
      { k: 'Duration', v: '6 weeks' },
      { k: 'Tools', v: 'Figma · Maze' },
    ],
    sections: [
      {
        id: 'overview',
        eyebrow: 'The setup',
        title: 'Overview',
        body: [
          { t: 'p', c: 'Go Round - is an all-in-one travel planning platform designed to simplify every stage of the travel experience. From discovering destinations and booking stays to selecting the best transportation options — including bus, train, car, and flight — Go Round ensures a seamless journey for every traveler. The app features an integrated AI assistant ‘Redna’ which helps users plan personalized itineraries, review upcoming schedules, and even store trip memories through photos.' },
          { t: 'figure', src: 'goRound/myRole.svg'},
        ],
      },
      {
        id: 'problem',
        eyebrow: 'Project brief',
        title: 'Problem & Solution',
        body: [
          { t: 'problem-solution',
            images: ['goRound/prob1.png', 'goRound/prob2.png'],
            c: {
              problem: 'Travelers struggle to plan trips because they must use multiple apps for inspiration, planning, and booking, which causes decision fatigue and fragmented experiences.',
              solutionLead: 'Go Round',
              solution: 'We propose a mood-based travel planning app that unifies discovery, itinerary building, and booking into one seamless experience. By starting with user intent (travel mood), providing smart auto-generated itineraries, and offering a calm, guided interface, the app simplifies trip planning and supports users before, during, and after their journey.',
            },
          },
          { t: 'pull', c: '"I open Maps, Booking, Skyscanner, IRCTC and a Notes doc. By the time I\'ve booked, I\'m already exhausted."', cite: 'P2, frequent traveller' },
        ],
      },
      {
        id: 'process',
        eyebrow: 'Approach',
        title: 'Design Process',
        body: [
          { t: 'p', c: 'From user research to prototype, designed Go Round with user centric approach prioritizing intuitive flow, accessibility, and AI driven travel experience.'},
          { t: 'design-process', c: {
            rows: [
              [
                { title: 'Empathize', items: ['User Research', 'Observation', 'Competitive analysis'] },
                { title: 'Define', items: ['Affinity mapping', 'Identify pain points & needs', 'Define user goals'] },
                { title: 'Ideate', items: ['User flows', 'Information architecture'] },
              ],
              [
                { title: 'Prototype', items: ['Low-fidelity wireframes', 'UI screens', 'Interactive prototype'] },
                { title: 'Test', items: ['Usability testing'] },
              ],
            ],
          }},
        ],
      },
      {
        id: 'research',
        eyebrow: 'Discovery',
        title: 'Research',
        body: [
          { t: 'p', c: 'To identify the strengths and weaknesses of the established apps in the market. I conducted an in-depth competitive analysis on two well-known apps, Airbnb & MakeMyTrip.' },
          { t: 'figure', src: 'goRound/competitive-matrix.png', cap: 'Competitive matrix across planning depth, AI use, and end-to-end booking.' },
          { t: 'key-insight', c: {
            heading: 'Key Insight',
            items: [
              'Allow user to choose destination according to their mood which makes user to select their travel without confusion',
              'Navigates user End-to-End from Discovering Destination, select Stay and Book transportation',
              "Go-round helps user to Plan their trip itinerary with Built-in AI Support 'Redna'",
            ],
          }},
        ],
      },
      {
        id: 'user-statement',
        eyebrow: 'Statement',
        title: 'User Statement',
        body: [
          { t: 'figure', src: 'goRound/userStatement.svg', cap: 'User Statement shows all the problems a user faces generally.' },
        ],
      },
      {
        id: 'affinity-mapping',
        eyebrow: 'User research',
        title: 'Affinity Mapping',
        body: [
          { t: 'p', c: 'After the interviews, I\'ve analyzed the Data collected, by arranging the similar information into a specific set of separate groups by using the process called affinity mapping. This helped me in categorizing the insights that stood out, which gave me possible solutions and pain points more clearly and turning them into design opportunities' },
          { t: 'figure', src: 'goRound/affinity-mapping.svg', cap: 'Affinity map summarizing the User Statement, Goals and the Pain points.' },
        ],
      },
      {
        id: 'define',
        eyebrow: '',
        title: 'Define',
        body: [
          { t: 'p', c: 'On the basis of pattern discovered in affinity mapping, I\'ve created a couple of USER PERSONAS which represents the typical user of this app. Considering their pain points, goals and emotional needs I am able to deduce a typical journey that a user takes and will guide me in making decisions for designing the app' },
        ],
      },
      {
        id: 'users',
        eyebrow: 'Who we\'re designing for',
        title: 'Users Personas',
        body: [
          { t: 'figure', src: 'goRound/user2.svg' },
          { t: 'figure', src: 'goRound/user1.svg' }
        ],
      },
      {
        id: 'empathy-mapping',
        eyebrow: 'User research',
        title: 'Empathy Mapping',
        body: [
          { t: 'p', c: 'After the interviews I synthesised findings into an empathy map — capturing what travellers <strong>say, think, do, and feel</strong> when planning a trip. This surfaced the emotional weight of fragmentation: exhaustion before the trip even starts.' },
          { t: 'figure', src: 'goRound/empathy-mapping.svg', cap: 'Empathy map distilling insights from 6 user interviews across four quadrants.' },
        ],
      },
      {
        id: 'user-journey-map',
        eyebrow: 'Journey',
        title: 'User Journey Map',
        body: [
          { t: 'p', c: 'User journey Map was created on the basis of MARCUS TAYLOR persona. Emotions expressed at different stages show happiness, sadness and frustration of a user. By this activity we can know a user\'s response, behavior and pain points at different stages of process. We see that whenever the curve is moving down there we got opportunities for looking into the matter for why it\'s moving negative and try solving problem to lead a better experience throughout the journey' },
          { t: 'figure', src: 'goRound/journey.png', cap: 'Journey Map highlights the Action, Pain Point, Emotion, Opportunity in a UX.' },
        ],
      },
      {
        id: 'flows',
        eyebrow: 'IA',
        title: 'Flows & architecture',
        body: [
          { t: 'p', c: 'Three primary flows: <strong>chat-to-itinerary</strong> with Redna, <strong>browse & book</strong>, and <strong>day-of-trip companion mode</strong> (live nav, tickets, check-ins).' },
          { t: 'figure', src: 'goRound/user-flow.svg', cap: 'Cross-mode flow: planning collapses into companion mode once a trip starts.' },
        ],
      },
      {
        id: 'design',
        eyebrow: 'Visual & interaction',
        title: 'Design decisions',
        body: [
          { t: 'cards', c: [
            { i: '✦', h: 'Redna as a panel, not a popup', p: 'AI sits in a persistent right-rail panel on tablet, bottom sheet on phone — never a modal that hijacks the trip.' },
            { i: '◇', h: 'Reasoning chips', p: 'Each AI suggestion shows a "why" chip — saves doubt, builds trust.' },
            { i: '⊕', h: 'One-tap accept-or-tweak', p: 'Every itinerary item has Accept / Swap / Remove. No long-form rebuilding.' },
            { i: '⏱', h: 'Companion mode auto-flips', p: 'On trip-day, the home tab swaps to today\'s schedule + map.' },
          ]},
        ],
      },
      {
        id: 'design-process',
        eyebrow: 'Design process',
        title: 'Wireframes',
        body: [
          { t: 'p', c: 'With the flows locked in, I moved to low-fidelity wireframes. The goal was to validate screen structure and the placement of Redna\'s AI panel before committing to visual design. Key decisions made at this stage: bottom-sheet AI on mobile, persistent panel on tablet, and the one-tap accept/swap interaction.' },
          { t: 'figure', src: 'goRound/Wireframe.svg', cap: 'Lo-fi wireframe set covering onboarding, trip planning, and companion mode screens.' },
        ],
      },
      {
        id: 'color-palette',
        eyebrow: 'Visual identity',
        title: 'Colour Palette',
        body: [
          { t: 'p', c: 'The palette draws from open skies and deep ocean — a primary deep navy anchors trust and navigation, while bright horizon blues and warm amber accents inject energy and optimism. The combination keeps the interface feeling premium without the sterility of pure white or the coldness of flat greys.' },
          { t: 'figure', src: 'goRound/color-palette.svg', cap: 'Go Round brand colour palette applied across the app\'s UI surfaces.' },
        ],
      },
      {
        id: 'ui-screens',
        eyebrow: 'High fidelity',
        title: 'UI Screens',
        body: [
          { t: 'ui-screens', images: [
            'goRound/uiScreens/1.png',
            'goRound/uiScreens/2.png',
            'goRound/uiScreens/3.png',
            'goRound/uiScreens/4.png',
            'goRound/uiScreens/5.png',
            'goRound/uiScreens/6.png',
            'goRound/uiScreens/7.png',
            'goRound/uiScreens/8.png',
            'goRound/uiScreens/9.png',
            'goRound/uiScreens/10.png',
            'goRound/uiScreens/11.png',
            'goRound/uiScreens/12.png',
            'goRound/uiScreens/13.png',
            'goRound/uiScreens/14.png',
            'goRound/uiScreens/15.png',
            'goRound/uiScreens/16.png',
            'goRound/uiScreens/17.png',
            'goRound/uiScreens/18.png',
            'goRound/uiScreens/19.png',
          ]},
        ],
      },
      {
        id: 'testing',
        eyebrow: 'Validation',
        title: 'Usability testing',
        body: [
          { t: 'metrics', c: [
            { v: '4/5', l: 'Booked end-to-end' },
            { v: '88%', l: 'AI trust score' },
            { v: '3.1m', l: 'Plan-to-book time' },
          ]},
          { t: 'pull', c: '"Showing me why it picked the hotel is what got me to actually book."', cite: 'Test participant T4' },
        ],
      },
      {
        id: 'reflections',
        eyebrow: 'Closing',
        title: 'Reflections',
        body: [
          { t: 'p', c: 'Conversational planning works <strong>only if the UI honours it</strong> — chips, accept/swap, visible reasoning. Pure chat without scaffolding falls back into "another ChatGPT wrapper" land.' },
          { t: 'p', c: 'Future explorations: group trips with multi-user Redna sessions, and offline companion mode for low-signal regions.' },
        ],
      },
    ],
  },
};

export const homeCases: HomeCase[] = [
  {
    id: 'hydrotrack',
    title: 'HydroTrack',
    kind: 'Mobile · UX Case Study',
    thumb: 'h2o',
    glyph: '💧',
    desc: 'A health-tech mobile app that makes daily hydration effortless through personalised goals, smart logging, and weekly habit insights.',
    tags: ['UX/UI', 'Mobile', 'Figma'],
  },
  {
    id: 'goround',
    title: 'Go Round',
    kind: 'Travel · UX Case Study',
    thumb: 'gor',
    glyph: '✈',
    desc: 'An all-in-one travel app for planning trips, booking stays and transport, with an AI assistant — Redna — to personalise itineraries.',
    tags: ['UX/UI', 'AI', 'Mobile'],
  },
];

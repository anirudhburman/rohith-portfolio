export interface CaseMeta {
  k: string;
  v: string;
}

export type BlockType = 'p' | 'pull' | 'cards' | 'persona' | 'metrics' | 'figure' | 'roadmap' | 'ui-screens';

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

export interface PersonaData {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface Block {
  t: BlockType;
  c?: string | CardItem[] | MetricItem[] | PersonaData | RoadmapItem[];
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
            { v: '12', l: 'Screens designed' },
            { v: '4 wks', l: 'End-to-end' },
          ]},
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
        id: 'problem',
        eyebrow: 'Project brief',
        title: 'The problem & the opportunity',
        body: [
          { t: 'p', c: 'Existing hydration apps fall into two camps: <strong>too gamified</strong> (cute plant grows, cute plant dies — guilt loop) or <strong>too clinical</strong> (charts, percentages, no warmth). Neither matches how busy people actually think about water.' },
          { t: 'pull', c: '"I download these apps, log water for two days, then forget. By Friday I\'ve uninstalled it."', cite: 'P3, remote worker' },
          { t: 'p', c: 'The opportunity: design something <strong>that respects the user\'s time</strong>, removes friction from logging, and makes the weekly check-in feel like a coach rather than a scolding parent.' },
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
          { t: 'figure', src: 'hydrotrack/affinity-map.png', cap: 'Five clusters emerged from 38 sticky notes — Memory, Goal Clarity, Logging Speed, Tone, and Context.' },
          { t: 'figure', src: 'hydrotrack/empathy-map.png', cap: 'Empathy map synthesising what users say, think, do, and feel around hydration.' },
        ],
      },
      {
        id: 'persona',
        eyebrow: 'Who we\'re designing for',
        title: 'User persona',
        body: [
          { t: 'persona', c: { initials: 'AK', name: 'Arjun Kumar', role: 'Software engineer, 27 · Bengaluru', quote: 'I\'ll drink water if you remind me at the right moment. Don\'t shame me if I miss a day — I\'ll just delete the app.' }},
          { t: 'p', c: 'Arjun captures the dominant persona: tech-fluent, time-poor, mildly health-conscious, and allergic to apps that nag. His mental model is "give me one number to hit, ping me at the right times, and don\'t make me feel bad about Tuesday."' },
        ],
      },
      {
        id: 'ux-map',
        eyebrow: 'Ideat',
        title: 'User Experience Map',
        body: [
          { t: 'figure', src: 'hydrotrack/ux-map.png', cap: 'User experience map tracing Arjun\'s journey across five hydration phases.' },
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
        eyebrow: 'Visual & interaction',
        title: 'Design decisions',
        body: [
          { t: 'cards', c: [
            { i: '◐', h: 'Progress ring, not progress bar', p: 'A ring fills more satisfyingly and reads at a glance. Center % is always legible.' },
            { i: '⌁', h: 'Smart, gentle reminders', p: 'Reminders adapt to last-log time and skip after 9pm. No daily-streak shame.' },
            { i: '⊞', h: 'Preset glasses', p: 'Three preset volumes (250/500/750ml) sit on the home screen. Custom is one tap deeper.' },
            { i: '✎', h: 'Weekly insights', p: 'Insights highlight wins first ("you crushed Wednesday"), then offer one gentle nudge.' },
          ]},
          { t: 'figure', src: 'hydrotrack/design-mockups.png', cap: 'Hi-fi screen set: home, log sheet, HydroCalc, insights, settings.' },
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
          { t: 'pull', c: '"I get it instantly. The ring tells me where I am without me having to read."', cite: 'Test participant T2' },
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
          { t: 'p', c: 'Go Round bundles trip planning, stays, and transport into one app, with an AI assistant (<strong>Redna</strong>) that does the heavy lifting of itinerary-building.' },
          { t: 'p', c: 'The challenge: most travel apps are either booking engines (Booking, MMT) or planners (TripIt, Wanderlog) — rarely both, and almost never with conversational AI in the loop in a non-gimmicky way.' },
        ],
      },
      {
        id: 'problem',
        eyebrow: 'Project brief',
        title: 'The problem',
        body: [
          { t: 'p', c: 'Trip planning is fragmented across 5–7 apps and 20+ browser tabs. Users want one surface that <strong>plans and books</strong>, with AI that adapts to "I want a chill 3-day Goa trip under ₹15k" rather than rigid filters.' },
          { t: 'pull', c: '"I open Maps, Booking, Skyscanner, IRCTC and a Notes doc. By the time I\'ve booked, I\'m already exhausted."', cite: 'P2, frequent traveller' },
        ],
      },
      {
        id: 'research',
        eyebrow: 'Discovery',
        title: 'Research',
        body: [
          { t: 'p', c: 'I ran 6 contextual interviews and a competitive teardown of 8 travel apps. Two patterns emerged: users want <strong>conversational input</strong> ("plan me a weekend") and <strong>visible AI reasoning</strong> ("why this hotel, not that one?").' },
          { t: 'figure', src: 'goRound/competitive-matrix.png', cap: 'Competitive matrix across planning depth, AI use, and end-to-end booking.' },
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

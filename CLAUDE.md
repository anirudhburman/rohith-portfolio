# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:5173
npm run build     # tsc type-check then vite build → dist/
npm run lint      # eslint across src/
npm run preview   # serve the dist/ build locally
```

There are no tests.

## Architecture

Single-page app with client-side hash routing — no router library.

**Routing** lives entirely in `src/App.tsx`. Two routes: `home` and `case`. Navigation is driven by `window.location.hash` (`#/case/hydrotrack`, `#/case/goround`). The `navigate()` function is threaded down as a prop to any component that needs to change route or scroll to a section.

**Data** is in `src/data.ts` — a typed record of case studies (`caseStudies`) and the homepage card list (`homeCases`). Adding a new case study means adding an entry to `caseStudies` and pushing to `homeCases`. The `Block` union type drives the case study body renderer in `CaseStudy.tsx`.

**Styling** is plain CSS in `src/index.css` — no Tailwind, no CSS modules. All design tokens are CSS custom properties on `:root` (and overridden under `[data-theme="dark"]`). Component class names match the design system directly (`.case`, `.cs-hero`, `.hero-pill`, etc.).

**Portrait photo** is in `public/portrait.jpg` — referenced as `/portrait.jpg` in `About.tsx`.

**Placeholders to fill in before launch:**
- `src/components/Contact.tsx` — `href="mailto:rohith@example.com"` and social `href="#"` links
- `src/components/Navbar.tsx` — Resume button `href="#"` (needs a PDF link or route)

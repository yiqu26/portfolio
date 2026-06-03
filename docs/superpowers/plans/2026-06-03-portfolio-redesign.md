# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio into an Exaggerated Minimalism (black + `#D4FF00`) single page with all motion driven by GSAP, adding About/Skills/Contact sections.

**Architecture:** Keep Vite + React 19 + TS + Tailwind v4. Replace `motion` with GSAP (`gsap` + `@gsap/react`). Central GSAP plugin registration. Shared project data module. Each page section is its own focused component; `App.tsx` composes them in anchor order. Verification is typecheck + build + visual check (this is visual/animation work, not unit-testable logic), with real checks only where logic exists.

**Tech Stack:** Vite, React 19, TypeScript, Tailwind CSS v4, GSAP (core, ScrollTrigger, SplitText), @gsap/react (useGSAP).

**Project root:** `C:\Users\lanli\source\repos\portfolio` (now a standalone git repo; baseline committed).

**Verification commands used throughout:**
- Typecheck/build: `npm run build`
- Lint: `npm run lint`
- Visual: `npm run dev` then open the local URL

---

## File Structure

- `package.json` — deps: remove `motion`, add `gsap`, `@gsap/react`
- `src/lib/gsap.ts` (CREATE) — register ScrollTrigger + SplitText once
- `src/data/projects.ts` (CREATE) — single source of truth for the 3 projects
- `src/index.css` (MODIFY) — design tokens (accent, type scale), remove glass/marquee/starfield CSS, add minimalism utilities + grain
- `src/components/Grain.tsx` (CREATE) — fixed film-grain overlay
- `src/components/Navbar.tsx` (MODIFY) — minimal
- `src/components/Hero.tsx` (MODIFY) — monumental + SplitText; remove Starfield usage
- `src/components/About.tsx` (CREATE)
- `src/components/Projects.tsx` (MODIFY) — editorial list + ScrollTrigger
- `src/components/Skills.tsx` (CREATE)
- `src/components/Contact.tsx` (CREATE)
- `src/components/Marquee.tsx` (MODIFY) — GSAP seamless loop
- `src/components/Starfield.tsx` (DELETE)
- `src/App.tsx` (MODIFY) — section order + Grain

---

## Task 1: Swap animation dependency

**Files:** Modify `package.json`

- [ ] **Step 1: Remove motion, install GSAP**

```bash
cd "C:/Users/lanli/source/repos/portfolio"
npm uninstall motion
npm install gsap @gsap/react
```

- [ ] **Step 2: Verify no remaining motion imports**

Run: `grep -rn "from 'motion" src || echo "clean"`
Expected: `clean` (if any appear, they are removed in their component's task).

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: builds (any `motion` import errors are resolved by later tasks; if Task order is followed, no component imports motion yet because only data/css changed).

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "build: replace motion with gsap + @gsap/react"
```

---

## Task 2: Central GSAP registration

**Files:** Create `src/lib/gsap.ts`

- [ ] **Step 1: Create the registration module**

```ts
// src/lib/gsap.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export { gsap, ScrollTrigger, SplitText, useGSAP }
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: passes (SplitText ships free with gsap 3.13+).

- [ ] **Step 3: Commit**

```bash
git add src/lib/gsap.ts
git commit -m "feat: central gsap plugin registration"
```

---

## Task 3: Shared project data

**Files:** Create `src/data/projects.ts`

Extract the real data currently duplicated in `Projects.tsx` and `Marquee.tsx`.

- [ ] **Step 1: Create the data module**

```ts
// src/data/projects.ts
export type Project = {
  name: string
  desc: string
  tags: string[]
  link?: string
  github?: string
  status?: 'live' | 'wip'
}

export const projects: Project[] = [
  {
    name: 'Trail Guide',
    desc: '台灣步道導覽平台。步道搜尋、GPS 附近推薦、評論系統、PWA 支援。',
    tags: ['React 19', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    link: 'https://trail-guide-eight.vercel.app',
    github: 'https://github.com/yiqu26/Trail-Guide',
    status: 'live',
  },
  {
    name: 'NGO Management System',
    desc: '非政府組織後台管理系統。活動管理、個案追蹤、物資分配、AI 優化功能。',
    tags: ['C#', 'ASP.NET Core', 'React', 'SQL Server', 'Docker'],
    github: 'https://github.com/yiqu26/NGO-Management-System',
    status: 'live',
  },
  {
    name: 'Hokkori',
    desc: '手作串珠手鏈品牌展示網站。溫暖療癒的日系風格，導流蝦皮購物。',
    tags: ['Next.js 16', 'Tailwind CSS', 'GSAP'],
    status: 'wip',
  },
]

export const CONTACT_EMAIL = 'lanlin1999123@gmail.com'
export const GITHUB_URL = 'https://github.com/yiqu26'
```

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/data/projects.ts
git commit -m "feat: shared project data module"
```

---

## Task 4: Design tokens + global CSS

**Files:** Modify `src/index.css`

Replace glassmorphism/marquee/starfield CSS with minimalism tokens + utilities. Keep `@import "tailwindcss";`.

- [ ] **Step 1: Rewrite index.css**

Key tokens/utilities to define (complete this file):
```css
@import "tailwindcss";

:root {
  --font-display: 'Instrument Serif', serif;
  --font-body: 'Inter', sans-serif;
  --accent: #D4FF00;
  --bg: #000000;
  --type-giant: clamp(3rem, 10vw, 12rem);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: #fff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
#root { width: 100%; }

.font-display { font-family: var(--font-display); }
.text-accent { color: var(--accent); }
.display-giant {
  font-family: var(--font-display);
  font-size: var(--type-giant);
  line-height: 0.9;
  letter-spacing: -0.03em;
  font-weight: 400;
}

/* Film grain overlay */
.grain {
  position: fixed; inset: 0; z-index: 60; pointer-events: none;
  opacity: 0.05; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* SplitText helper: hide lines until animated to avoid FOUC */
.split-prep { visibility: hidden; }
```
(Remove all `.liquid-glass`, `.animate-marquee`, `.animate-fade-rise*` rules — those are replaced by GSAP / new design.)

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes; unused old class names in components are fixed in their tasks)
```bash
git add src/index.css
git commit -m "feat: minimalism design tokens + grain, remove glass css"
```

---

## Task 5: Grain overlay + App shell

**Files:** Create `src/components/Grain.tsx`; Modify `src/App.tsx`

- [ ] **Step 1: Grain component**

```tsx
// src/components/Grain.tsx
export default function Grain() {
  return <div className="grain" aria-hidden="true" />
}
```

- [ ] **Step 2: Rewrite App.tsx with new section order**

```tsx
// src/App.tsx
import './index.css'
import Grain from './components/Grain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Marquee from './components/Marquee'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Grain />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Marquee />
      <Contact />
    </div>
  )
}
```

Note: About/Skills/Contact don't exist yet — create stub files now so the build passes; flesh them out in their tasks.

- [ ] **Step 3: Create stubs for not-yet-built sections**

```tsx
// src/components/About.tsx
export default function About() { return <section id="about" /> }
```
```tsx
// src/components/Skills.tsx
export default function Skills() { return <section id="skills" /> }
```
```tsx
// src/components/Contact.tsx
export default function Contact() { return <section id="contact" /> }
```

- [ ] **Step 4: Build + visual + commit**

Run: `npm run build` (Expected: passes)
Run: `npm run dev` → page renders pure black with grain (Hero/Navbar still old styling, fixed in later tasks).
```bash
git add src/components/Grain.tsx src/App.tsx src/components/About.tsx src/components/Skills.tsx src/components/Contact.tsx
git commit -m "feat: app shell with grain + section order, section stubs"
```

---

## Task 6: Navbar (minimal)

**Files:** Modify `src/components/Navbar.tsx`

Spec: text logo (`奕琦` or `✦`) left; links About/Projects/Skills/Contact center-right; `Hire me` mailto right using `CONTACT_EMAIL`. Remove `.liquid-glass`. Quiet, thin, fixed top. Accent only on `Hire me` hover or active.

- [ ] **Step 1: Implement Navbar** — minimal markup, Tailwind only, links map to `#about` etc., `Hire me` → `mailto:${CONTACT_EMAIL}` (import from `../data/projects`). Use `font-display` for logo, `text-white/70 hover:text-white` for links, accent underline on hover.

- [ ] **Step 2: Build + lint + visual + commit**

Run: `npm run build && npm run lint` (Expected: pass)
```bash
git add src/components/Navbar.tsx
git commit -m "feat: minimal navbar with real anchors + email"
```

---

## Task 7: Hero (SplitText + scrub), remove Starfield

**Files:** Modify `src/components/Hero.tsx`; Delete `src/components/Starfield.tsx`

Spec: full-viewport, monumental headline using `.display-giant`, accent on one word; subtext (current full-stack copy); CTAs (View Projects ↓, GitHub→`GITHUB_URL`). GSAP: SplitText the headline into lines/chars and stagger-reveal on mount; subtle scrub parallax on scroll. Honor reduced-motion (set final state, skip animation).

- [ ] **Step 1: Implement Hero with useGSAP**

Key pattern (complete the component around this):
```tsx
import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '../lib/gsap'
import { GITHUB_URL } from '../data/projects'

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const split = new SplitText('.hero-title', { type: 'lines,chars' })
      gsap.set('.hero-title', { visibility: 'visible' })
      gsap.from(split.chars, { yPercent: 120, opacity: 0, stagger: 0.012, duration: 0.8, ease: 'power3.out' })
      gsap.to(root.current, { backgroundPositionY: '30%', ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      return () => split.revert()
    })
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.hero-title', { visibility: 'visible' })
    })
  }, { scope: root })
  // ...JSX: <section ref={root}> with h1.hero-title.display-giant.split-prep, subtext, CTAs
}
```
Headline content: keep "Building things worth exploring." with `worth exploring.` wrapped in `<span className="text-accent">`. Remove `import Starfield` and its usage.

- [ ] **Step 2: Delete Starfield**

```bash
git rm src/components/Starfield.tsx
```

- [ ] **Step 3: Build + visual + commit**

Run: `npm run build` (Expected: passes)
Run: `npm run dev` → headline animates in by characters; scroll shows subtle parallax; no starfield.
```bash
git add src/components/Hero.tsx
git commit -m "feat: monumental hero with gsap splittext + scrub, drop starfield"
```

---

## Task 8: About section

**Files:** Modify `src/components/About.tsx`

Spec: `id="about"`, oversized section heading (ScrollTrigger reveal), 2-3 sentence intro: 李奕琦, full-stack developer, C#/.NET backends + React frontends, building clean maintainable systems, open to work. Generous whitespace.

- [ ] **Step 1: Implement About** with a reusable reveal: heading uses `.font-display`, big; wrap reveal in `useGSAP` + `gsap.from(..., { scrollTrigger })` guarded by `matchMedia` no-preference (reduced-motion = static). Body text `text-white/60`.

- [ ] **Step 2: Build + visual + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/About.tsx
git commit -m "feat: about section with scrolltrigger reveal"
```

---

## Task 9: Projects (editorial list)

**Files:** Modify `src/components/Projects.tsx`

Spec: `id="projects"`, heading "Selected Work / Things I've built." Render `projects` from `../data/projects` as an editorial list (NOT colored cards): each row = large `.font-display` name, desc, tag row, links (live/github), `wip` shown as a label not a dead `#`. Accent underline/mark on hover. ScrollTrigger staggered row reveal (matchMedia-guarded).

- [ ] **Step 1: Implement Projects** importing `projects`. Each row: name (`text-3xl sm:text-5xl font-display`), hover shows `text-accent`; tags as small `text-white/40`; links conditional on presence (`status==='wip'` → small "In progress" label, no anchor). Stagger reveal via `gsap.from(rows, { y: 40, opacity: 0, stagger: 0.1, scrollTrigger })`.

- [ ] **Step 2: Build + lint + visual + commit**

Run: `npm run build && npm run lint` (Expected: pass; no leftover gradient classes)
```bash
git add src/components/Projects.tsx
git commit -m "feat: editorial projects list with accent + scrolltrigger"
```

---

## Task 10: Skills section

**Files:** Modify `src/components/Skills.tsx`

Spec: `id="skills"`, heading + a minimal typographic list of the stack grouped lightly: Backend (C#, ASP.NET Core, SQL Server, PostgreSQL, Docker), Frontend (React 19, TypeScript, Tailwind, GSAP), Tooling (Vite, Git). No icon library — pure type. Optional accent on group labels. ScrollTrigger reveal (matchMedia-guarded).

- [ ] **Step 1: Implement Skills** as a small local `const groups` array mapped to columns/rows. Keep it text-only and minimal.

- [ ] **Step 2: Build + visual + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/Skills.tsx
git commit -m "feat: minimal typographic skills section"
```

---

## Task 11: Contact section

**Files:** Modify `src/components/Contact.tsx`

Spec: `id="contact"`, large closing statement (e.g. "Let's build something."), big accent `mailto:${CONTACT_EMAIL}` link, GitHub link (`GITHUB_URL`). Import both from `../data/projects`. Generous bottom spacing.

- [ ] **Step 1: Implement Contact** — giant `.font-display` headline, email as oversized `text-accent` anchor with hover underline, secondary GitHub link.

- [ ] **Step 2: Build + visual + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/Contact.tsx
git commit -m "feat: contact section with real email + github"
```

---

## Task 12: Marquee (GSAP seamless loop)

**Files:** Modify `src/components/Marquee.tsx`

Spec: replace CSS `animate-marquee` with a GSAP horizontal seamless loop of kinetic text (project names + a separator like ` ✦ `), using `projects` from data. Pause on `prefers-reduced-motion: reduce`.

- [ ] **Step 1: Implement seamless loop**

Key pattern (complete around this):
```tsx
import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { projects } from '../data/projects'

export default function Marquee() {
  const track = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const loop = gsap.to(track.current, {
        xPercent: -50, ease: 'none', duration: 20, repeat: -1,
      })
      return () => loop.kill()
    })
  }, { scope: track })
  const items = [...projects, ...projects] // duplicate for seamless -50% loop
  // JSX: overflow-hidden section; inner flex track (ref) rendering items as
  // big .font-display text with ✦ separators
}
```

- [ ] **Step 2: Build + visual + commit**

Run: `npm run build` (Expected: passes)
Run: `npm run dev` → text strip scrolls seamlessly; stops under reduced-motion.
```bash
git add src/components/Marquee.tsx
git commit -m "feat: gsap seamless marquee from shared data"
```

---

## Task 13: Final pass — reduced-motion, lint, build, QA

**Files:** any touched as needed

- [ ] **Step 1: Verify reduced-motion** — In OS/browser set "reduce motion"; reload. Expected: all content visible and static (no hidden `.split-prep`), marquee paused.

- [ ] **Step 2: Full build + lint**

Run: `npm run build && npm run lint`
Expected: both pass, zero TS/lint errors.

- [ ] **Step 3: Grep for leftovers**

Run: `grep -rn "liquid-glass\|animate-marquee\|from 'motion\|Starfield\|your@email" src || echo "clean"`
Expected: `clean`.

- [ ] **Step 4: Visual QA checklist** (dev server): all 7 nav anchors scroll to real sections; hero SplitText animates; projects reveal on scroll; accent is `#D4FF00` only; email is real.

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "chore: reduced-motion + cleanup pass"
```

---

## Self-Review

**Spec coverage:** accent #D4FF00 (Task 4), new About/Skills/Contact (Tasks 5,8,10,11), starfield removed → grain (Tasks 4,5,7), email wired (Tasks 6,11), motion→GSAP (Tasks 1,2), SplitText hero (7), ScrollTrigger reveals (8,9,10), seamless marquee (12), reduced-motion (7,12,13), real projects only (3). All spec sections mapped.

**Placeholder scan:** stubs in Task 5 are intentional and replaced in Tasks 8/10/11; no TBD/TODO remain after Task 13.

**Type consistency:** `Project` type + `projects`, `CONTACT_EMAIL`, `GITHUB_URL` defined in Task 3 and imported consistently in Tasks 6/7/9/11/12.

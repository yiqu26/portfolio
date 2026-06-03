# Portfolio Terminal / Dev-OS Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (or subagent-driven-development) to implement task-by-task. Steps use `- [ ]` checkboxes.

**Goal:** Re-skin the existing portfolio as a stylized terminal / dev-OS: JetBrains Mono, black + lime phosphor, sections framed as `> command` + output, with a signature GSAP boot/typing hero.

**Architecture:** Keep the existing redesign-branch structure (sections, `src/lib/gsap.ts`, `src/data/projects.ts`, Grain, `useGSAP` + `matchMedia` reduced-motion). Swap font and rewrite each section's presentation. Add two tiny primitives (`Cursor`, `Prompt`) and a GSAP typewriter in the Hero. Verification = `npm run build` + `npm run lint` + visual check (no unit-test runner in this project).

**Tech Stack:** Vite, React 19, TypeScript, Tailwind v4, GSAP (core, ScrollTrigger, SplitText, TextPlugin), @gsap/react.

**Branch:** `redesign` (continue on it). **Root:** `C:\Users\lanli\source\repos\portfolio`.

**Verify commands:** `npm run build`, `npm run lint`, `npm run dev` (visual).

---

## File Structure

- `index.html` — swap Google Fonts link to JetBrains Mono
- `src/lib/gsap.ts` — also register `TextPlugin`
- `src/index.css` — mono tokens, cursor-blink keyframe, terminal utilities; remove serif/`.display-giant`
- `src/data/projects.ts` — Hokkori → live link, drop wip
- `src/components/Cursor.tsx` (CREATE) — blinking block cursor
- `src/components/Prompt.tsx` (CREATE) — lime `>` prompt + command text
- `src/components/Hero.tsx` — boot/typing signature (TextPlugin timeline)
- `src/components/Navbar.tsx` — editor-style tabs
- `src/components/About.tsx` — `> cat about.md`
- `src/components/Projects.tsx` — `> ls projects/` + expandable rows + correct links
- `src/components/Skills.tsx` — `> cat stack`
- `src/components/Marquee.tsx` — log/status ticker
- `src/components/Contact.tsx` — `> ./hire.sh`

---

## Task 1: Font + terminal CSS + TextPlugin

**Files:** `index.html`, `src/index.css`, `src/lib/gsap.ts`

- [ ] **Step 1: Swap font link in index.html**

Replace the existing `<link ... Instrument+Serif ... Inter ...>` line (line 10) with:
```html
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
```
Also update `<title>` to `李奕琦 — full-stack developer`.

- [ ] **Step 2: Register TextPlugin in src/lib/gsap.ts**

```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin, useGSAP)

export { gsap, ScrollTrigger, SplitText, TextPlugin, useGSAP }
```

- [ ] **Step 3: Rewrite src/index.css**

```css
@import "tailwindcss";

:root {
  --font-mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace;
  --accent: #D4FF00;
  --bg: #000000;
}

body {
  font-family: var(--font-mono);
  background: var(--bg);
  color: #fff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
#root { width: 100%; }

/* Utilities */
.font-mono { font-family: var(--font-mono); }
.text-accent { color: var(--accent); }
.text-dim { color: rgba(255, 255, 255, 0.4); }

/* Blinking block cursor */
@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
.cursor-blink {
  display: inline-block;
  width: 0.6em;
  height: 1.1em;
  background: var(--accent);
  margin-left: 0.15em;
  vertical-align: text-bottom;
  animation: blink 1s steps(1) infinite;
}

/* Film grain overlay */
.grain {
  position: fixed; inset: 0; z-index: 60; pointer-events: none;
  opacity: 0.04; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```
(No unlayered `* { margin/padding }` reset — Tailwind preflight handles it; adding one breaks spacing utilities. Drop `.display-giant`/`.split-prep`.)

- [ ] **Step 4: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add index.html src/index.css src/lib/gsap.ts
git commit -m "feat: jetbrains mono + terminal css tokens + register TextPlugin"
```

---

## Task 2: Update project data

**Files:** `src/data/projects.ts`

- [ ] **Step 1: Set Hokkori live; confirm links**

In `src/data/projects.ts`, update the Hokkori entry to:
```ts
  {
    name: 'Hokkori',
    desc: '手作串珠手鏈品牌展示網站。溫暖療癒的日系風格，導流蝦皮購物。',
    tags: ['Next.js', 'Tailwind CSS', 'GSAP'],
    link: 'https://hokkori.pages.dev/',
    status: 'live',
  },
```
Leave Trail Guide (`link: https://trail-guide-eight.vercel.app`, github) and NGO
(`link: https://ngo-management-hub.com`, github) as-is. Keep `CONTACT_EMAIL`, `GITHUB_URL`.

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/data/projects.ts
git commit -m "feat: hokkori live link, drop wip status"
```

---

## Task 3: Cursor + Prompt primitives

**Files:** Create `src/components/Cursor.tsx`, `src/components/Prompt.tsx`

- [ ] **Step 1: Cursor**

```tsx
// src/components/Cursor.tsx
export default function Cursor() {
  return <span className="cursor-blink" aria-hidden="true" />
}
```

- [ ] **Step 2: Prompt**

```tsx
// src/components/Prompt.tsx
import type { ReactNode } from 'react'

export default function Prompt({ children, symbol = '>' }: { children?: ReactNode; symbol?: string }) {
  return (
    <span>
      <span className="text-accent">{symbol}</span>{' '}
      <span>{children}</span>
    </span>
  )
}
```

- [ ] **Step 3: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/Cursor.tsx src/components/Prompt.tsx
git commit -m "feat: terminal Cursor + Prompt primitives"
```

---

## Task 4: Hero boot/typing (signature interaction)

**Files:** `src/components/Hero.tsx`

Spec: a terminal boot. Lines appear in sequence; commands type out via GSAP TextPlugin,
outputs reveal, a blinking cursor sits on the final line. Reduced-motion: show the
final typed text immediately (no typing).

- [ ] **Step 1: Implement Hero**

Key pattern (complete the component around this):
```tsx
import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import Cursor from './Cursor'
import { GITHUB_URL } from '../data/projects'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    const cmd1 = '#cmd1', out1 = '.out1', cmd2 = '#cmd2', out2 = '.out2'

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set([out1, out2], { autoAlpha: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'none' } })
      tl.to(cmd1, { text: 'whoami', duration: 0.6 })
        .to(out1, { autoAlpha: 1, duration: 0.2 }, '+=0.15')
        .to(cmd2, { text: 'cat ~/intro', duration: 0.7 }, '+=0.35')
        .to(out2, { autoAlpha: 1, duration: 0.2 }, '+=0.15')
        .from('.hero-cta', { autoAlpha: 0, y: 8, stagger: 0.1 }, '+=0.1')
    })
    mm.add('(prefers-reduced-motion: reduce)', () => {
      const c1 = document.querySelector(cmd1); if (c1) c1.textContent = 'whoami'
      const c2 = document.querySelector(cmd2); if (c2) c2.textContent = 'cat ~/intro'
    })
  }, { scope: root })

  return (
    <section ref={root} className="flex min-h-screen items-center px-6 lg:px-12">
      <div className="mx-auto w-full max-w-3xl text-base sm:text-lg leading-relaxed">
        <p><span className="text-accent">$</span> <span id="cmd1" /></p>
        <p className="out1 mt-2 text-2xl sm:text-4xl">
          李奕琦 <span className="text-dim">— full-stack developer (C#/.NET · React)</span>
        </p>
        <p className="mt-6"><span className="text-accent">$</span> <span id="cmd2" /></p>
        <p className="out2 mt-2 max-w-xl text-dim">
          I build clean, maintainable systems and considered interfaces.
          Currently open to new opportunities.<Cursor />
        </p>
        <div className="mt-10 flex gap-6 text-sm">
          <a href="#projects" className="hero-cta text-accent hover:underline">&gt; open projects</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hero-cta text-dim hover:text-white">&gt; gh</a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build + visual + commit**

Run: `npm run build` (Expected: passes). `npm run dev`: hero types `whoami` then prints
identity, types `cat ~/intro`, prints tagline + blinking cursor.
```bash
git add src/components/Hero.tsx
git commit -m "feat: terminal boot/typing hero (textplugin signature)"
```

---

## Task 5: Navbar (editor tabs)

**Files:** `src/components/Navbar.tsx`

Spec: a thin top bar styled like editor tabs. Left: `lanli@portfolio`. Tabs:
`~/about ~/projects ~/skills ~/contact` linking to anchors; right: `hire` →
`mailto:CONTACT_EMAIL`. Active/hover marked lime.

- [ ] **Step 1: Implement** — import `CONTACT_EMAIL`. `const tabs = ['about','projects','skills','contact']`. Render `~/${tab}` links to `#${tab}`, `hover:text-[#D4FF00]`; `hire ↗` mailto. Keep `fixed top-0`, border-bottom `border-white/10`, mono text-sm.

- [ ] **Step 2: Build + lint + commit**

Run: `npm run build && npm run lint` (Expected: pass)
```bash
git add src/components/Navbar.tsx
git commit -m "feat: editor-tab navbar"
```

---

## Task 6: About (`> cat about.md`)

**Files:** `src/components/About.tsx`

Spec: `id="about"`. Header line `> cat about.md` (Prompt). Output: 2-3 sentence intro
(李奕琦, full-stack C#/.NET + React, clean systems, open to work). ScrollTrigger
line-by-line reveal guarded by `matchMedia` no-preference (reduced-motion = static).

- [ ] **Step 1: Implement** — reuse existing reveal pattern: `gsap.from('.about-line', { y: 20, opacity: 0, stagger: 0.1, scrollTrigger:{ trigger: root.current, start:'top 70%' }})` inside matchMedia. Use `<Prompt>cat about.md</Prompt>` header; output paragraphs with class `about-line`, `text-dim` for secondary text.

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/About.tsx
git commit -m "feat: about as cat about.md"
```

---

## Task 7: Projects (`> ls projects/` + expandable + links)

**Files:** `src/components/Projects.tsx`

Spec: `id="projects"`. Header `> ls projects/`. Each project = a row showing name +
short tag line; clicking toggles an expanded `> cat <name>` body (desc, tags, Live/GitHub
links per data). Accent caret (`▸`/`▾`) rotates on expand (GSAP). Links open in new tab.
Use `projects` from data; render `link` as "Live ↗" and `github` as "GitHub ↗" only when
present. ScrollTrigger row reveal (matchMedia-guarded).

- [ ] **Step 1: Implement** — local `useState<string|null>` for expanded name. Map `projects`:
row button `> {name}` (lime on hover), with a caret span animated via gsap on toggle
(or simple CSS rotate). Expanded panel: `desc` (text-dim), tags row, links. Reveal rows
with `gsap.from('.proj-row', { y: 30, opacity: 0, stagger: 0.12, scrollTrigger })`.
Keep readable without interaction (recruiter-friendly): show name+tags always; only
desc/links are behind expand, OR show all expanded by default on first load — choose:
default-expanded first project, others collapsible.

- [ ] **Step 2: Build + lint + visual (verify links) + commit**

Run: `npm run build && npm run lint` (Expected: pass). `npm run dev`: confirm Trail Guide
→ vercel, NGO → ngo-management-hub.com, Hokkori → hokkori.pages.dev all open correctly.
```bash
git add src/components/Projects.tsx
git commit -m "feat: ls projects/ with expandable cat view + correct links"
```

---

## Task 8: Skills (`> cat stack`)

**Files:** `src/components/Skills.tsx`

Spec: `id="skills"`. Header `> cat stack`. Groups Backend / Frontend / Tooling printed
as `key: value` mono lines (label lime, items dim/white). ScrollTrigger reveal.

- [ ] **Step 1: Implement** — `const groups = [{label:'backend', items:[...]}, ...]` (same items as current Skills). Render each as a line: `<span class="text-accent">{label}</span>  {items.join('  ')}`. Reveal with stagger via matchMedia.

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/Skills.tsx
git commit -m "feat: skills as cat stack"
```

---

## Task 9: Marquee (log/status ticker)

**Files:** `src/components/Marquee.tsx`

Spec: restyle the existing GSAP seamless loop as a single-line build-log/status ticker
(mono, smaller, dim with lime markers), e.g. `● trail-guide deployed ✦ ● ngo-system up ✦
● hokkori live ✦ ...`. Keep the existing seamless `xPercent:-50` loop + reduced-motion pause.

- [ ] **Step 1: Implement** — keep the loop logic from current Marquee; change rendered
items to log-style strings built from `projects` (e.g. `● ${p.name} ${p.status==='live'?'live':'up'}`),
`text-sm text-dim`, lime `●`/`✦` separators. Track `flex w-max whitespace-nowrap`.

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/Marquee.tsx
git commit -m "feat: marquee restyled as log ticker"
```

---

## Task 10: Contact (`> ./hire.sh`)

**Files:** `src/components/Contact.tsx`

Spec: `id="contact"`. Header `> ./hire.sh`. Output prints a line then the email as a big
lime `mailto:` link + GitHub link. Import `CONTACT_EMAIL`, `GITHUB_URL`. Blinking Cursor
at the end of the prompt line. ScrollTrigger reveal.

- [ ] **Step 1: Implement** — `<Prompt symbol="$">./hire.sh</Prompt>` then output:
`opening channel...` (text-dim), then `<a href={mailto:CONTACT_EMAIL}>` large `text-accent`
underline, then `> gh` → GITHUB_URL. Reveal lines via matchMedia stagger.

- [ ] **Step 2: Build + commit**

Run: `npm run build` (Expected: passes)
```bash
git add src/components/Contact.tsx
git commit -m "feat: contact as hire.sh"
```

---

## Task 11: Final QA

- [ ] **Step 1: Build + lint**

Run: `npm run build && npm run lint` — Expected: both pass, zero errors.

- [ ] **Step 2: Leftover scan**

Run: `grep -rn "Instrument\|font-display\|display-giant\|Inter:wght\|split-prep" src index.html || echo clean`
Expected: `clean` (no serif/old-font leftovers).

- [ ] **Step 3: Visual QA (dev server, then a Playwright screenshot + console check)**
  - Hero types on load; cursor blinks.
  - All nav tabs scroll to real sections; everything is mono + black + lime.
  - Projects expand; Trail Guide / NGO / Hokkori links open correctly.
  - Console: 0 errors.
  - Toggle OS reduce-motion: text shows fully (typed) and static; marquee paused.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "chore: terminal redesign QA + fixes"
```

---

## Self-Review

**Spec coverage:** JetBrains Mono + TextPlugin (T1), Hokkori live + links (T2,T7), Cursor/Prompt
(T3), signature boot/typing hero (T4), editor-tab navbar (T5), cat about (T6), ls projects +
expand + correct links (T7), cat stack (T8), log ticker marquee (T9), hire.sh contact (T10),
reduced-motion in every animated section (T4/6/7/8/9/10 via matchMedia), QA + leftover scan (T11).
All spec §3–§9 items mapped.

**Placeholder scan:** none; primitives in T3 are used from T4 onward.

**Type consistency:** `gsap, useGSAP, TextPlugin` from `../lib/gsap`; `Prompt`/`Cursor` props as
defined in T3; `projects`, `CONTACT_EMAIL`, `GITHUB_URL` from `../data/projects` used consistently.

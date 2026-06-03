# Portfolio Redesign — Exaggerated Minimalism + GSAP

Date: 2026-06-03
Owner: 李奕琦 (yiqu26)
Status: Approved (design decisions delegated to and locked by implementer)

## 1. Context & Goals

The existing portfolio (Vite + React + TS + Tailwind v4) is a dark glassmorphism
single-page site with a starfield hero, a CSS marquee, and three project cards in
mixed gradient colors. It uses the `motion` library for animation.

Goal: a bold redesign into an **Exaggerated Minimalism** aesthetic on a black base,
with all motion driven by **GSAP** (using the newly installed gsap-* skills together
with ui-ux-pro-max). The result should read as a refined, senior, job-search-ready
developer portfolio.

### Problems in the current site to fix
- Navbar links to `About` / `Skills` / `Contact`, but those sections **do not exist**
  (broken anchors).
- `Hire me` mailto is a placeholder `your@email.com`.
- Hokkori project `link` and `github` are `#` placeholders.
- Multi-color gradient project cards and starfield conflict with single-accent minimalism.

## 2. Locked Decisions

- **Accent color:** electric lime `#D4FF00` (single accent only).
- **New sections:** add real `About`, `Skills`, `Contact` sections (fix broken anchors).
- **Starfield:** removed. Replace with a very subtle film-grain/noise overlay so pure
  black is not flat.
- **Contact email:** `lanlin1999123@gmail.com`.
- **Animation library:** remove `motion`; standardize on GSAP (`gsap` + `@gsap/react`).

## 3. Visual System

- **Background:** pure `#000`. Text in white and white-opacity tints.
- **Accent:** `#D4FF00`, used sparingly (hover states, key marks, one-word emphasis).
- **Typography:**
  - Display: **Instrument Serif** (kept), monumental scale `clamp(3rem, 10vw, 12rem)`,
    tight tracking, low line-height for big headings.
  - Body: **Inter**, light weights, generous line-height.
- **Layout:** extreme negative space, minimal decoration, no gradient fills. Typography
  is the primary visual element.
- **Texture:** faint film-grain overlay (low-opacity, fixed) for depth.

## 4. Page Structure

Single page, anchored sections (matches the navbar):

1. **Navbar** — minimal: text/✦ logo + links (About / Projects / Skills / Contact) +
   `Hire me`. Reduce glass; lighter, quieter.
2. **Hero** — monumental headline (keep message "Building things worth exploring."
   or refined variant) + subtext + CTAs (View Projects, GitHub).
3. **About** (NEW) — short intro: who 李奕琦 is, full-stack C# / .NET + React focus.
4. **Projects** — editorial oversized list (large type, accent hover underline/mark),
   no colored cards. Keep the three real projects (Trail Guide, NGO Management System,
   Hokkori) with their real tags/links.
5. **Skills** (NEW) — tech stack in a minimal, typographic arrangement.
6. **Contact** (NEW) — large CTA with the real email + GitHub.
7. **Marquee** — kept as a kinetic text strip, re-implemented with GSAP seamless loop.

## 5. Animation Plan (GSAP)

All motion via GSAP; managed with `useGSAP` (`gsap-react`). Wrap responsive +
reduced-motion behavior in `gsap.matchMedia()` (`prefers-reduced-motion` honored).

- **Hero:** SplitText reveal (char/line) on the headline + a subtle scrub parallax.
- **Section headers:** ScrollTrigger clip/mask reveal as they enter the viewport.
- **Projects:** ScrollTrigger staggered reveal; accent interaction on hover.
- **Marquee:** GSAP horizontal seamless loop (replaces the CSS `animate-marquee`).
- **Global:** restrained, smooth; no motion when `prefers-reduced-motion: reduce`.

Relevant skills: gsap-core, gsap-timeline, gsap-scrolltrigger, gsap-plugins (SplitText),
gsap-react, gsap-performance. (GSAP is fully free incl. SplitText as of 2025.)

## 6. Tech Changes

- Remove dependency: `motion`.
- Add dependencies: `gsap`, `@gsap/react`.
- Keep: Vite, React 19, TypeScript, Tailwind CSS v4.
- Register GSAP plugins centrally (ScrollTrigger, SplitText) once.
- Delete `Starfield.tsx`; add a small grain/noise overlay utility.

## 7. Content Fixes

- Wire `Hire me` and Contact to `lanlin1999123@gmail.com`.
- Provide real links for Hokkori or mark it clearly as in-progress (no dead `#`).
- Ensure all navbar anchors resolve to real sections.

## 8. Accessibility & Performance

- Maintain WCAG AA contrast (white on black is fine; accent used on dark only).
- Animate transforms/opacity (GPU-friendly); avoid layout thrash (gsap-performance).
- Respect `prefers-reduced-motion`.

## 9. Out of Scope (YAGNI)

- No CMS, no blog, no backend, no i18n framework.
- No multi-page routing — stays a single page.
- No new projects invented; only the three real ones.

## 10. Success Criteria

- Site builds and runs (`npm run dev` / `npm run build`) with no `motion` dependency.
- All seven sections present; every navbar anchor resolves.
- Hero headline animates via GSAP SplitText; marquee loops via GSAP.
- Single black + `#D4FF00` accent system applied consistently; no leftover gradient cards.
- Reduced-motion users get a static, readable site.

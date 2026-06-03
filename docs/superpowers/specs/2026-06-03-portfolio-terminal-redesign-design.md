# Portfolio Redesign v2 — Terminal / Dev-OS

Date: 2026-06-03
Owner: 李奕琦 (yiqu26)
Status: Approved (concept, font, literalness, links confirmed with owner)
Supersedes: the presentation layer of `2026-06-03-portfolio-redesign-design.md`
(structure, GSAP wiring, data module, section list are kept; the *look* changes).

## 1. Why v2

v1 (exaggerated minimalism, Instrument Serif on black) read as generic and did not
showcase the GSAP/ui-ux skills — it felt like the original site rearranged. v2 gives
the site a memory point: it presents as a **living terminal / developer OS**, an
identity that fits a C#/.NET + React engineer and continues the owner's existing
`yiqu26-profile` terminal-typing aesthetic.

## 2. Locked Decisions

- **Concept:** stylized terminal / dev-OS (readable + recruiter-friendly, NOT a
  hardcore "type every command" gimmick that hides content).
- **Font:** Instrument Serif → **JetBrains Mono** (single monospace family throughout).
- **Palette:** keep black `#000` + lime phosphor accent `#D4FF00` + film grain.
- **Signature interaction:** Hero boot/typing sequence (the memory point).
- **Project links (all Live; owner keeps backends up ~08:00–18:00 GMT+8):**
  - Trail Guide — Live `https://trail-guide-eight.vercel.app` + GitHub `https://github.com/yiqu26/Trail-Guide`
  - NGO Management System — Live `https://ngo-management-hub.com` + GitHub `https://github.com/yiqu26/NGO-Management-System`
  - Hokkori — Live `https://hokkori.pages.dev/` (status: live, not wip; no public repo)

## 3. Visual System

- Monospace everywhere (JetBrains Mono). No serif.
- Black bg, white/white-tint text, lime `#D4FF00` for prompts, active state, key marks.
- Terminal cues: `>` / `$` prompt markers, blinking cursor, dim "comment" text
  (`text-white/35`), thin rules as pane separators, optional window chrome bar.
- Keep the film-grain overlay. Subtle, no heavy CRT/scanline (avoid gimmick).

## 4. Sections (reframed as terminal output; same structure/anchors)

1. **Navbar** → editor-style tab bar: `~/about` `~/projects` `~/skills` `~/contact`
   + `hire` action. Active tab marked lime. Logo: `lanli@portfolio` or `✦`.
2. **Hero** → boot + prompt. Types `> whoami`, prints
   `李奕琦 — full-stack developer (C#/.NET · React)`, then `> cat ~/intro` prints the
   tagline; blinking cursor. CTAs as commands: `> open projects` / `> gh`.
3. **About** → `> cat about.md` output block (the intro paragraph).
4. **Projects** → `> ls projects/` listing; each project is a row that expands to a
   `> cat <name>` view (desc, tags, Live/GitHub). Links per §2.
5. **Skills** → `> cat stack` grouped printout (Backend / Frontend / Tooling).
6. **Marquee** → a scrolling build-log / status ticker line (terminal-flavored).
7. **Contact** → `> ./hire.sh` → prints the email (`lanlin1999123@gmail.com`) + GitHub.

## 5. Animation Plan (GSAP — used harder than v1)

- **Hero (signature):** typewriter reveal of `> whoami` and output (timeline of
  char/line steps), blinking cursor (repeating tween). This is the headline interaction.
- **Section entry:** terminal-style line-by-line print on scroll (ScrollTrigger
  stagger), prompt char types in first.
- **Projects:** expand/collapse with GSAP height/opacity; lime caret rotates.
- **Marquee:** existing GSAP seamless loop, restyled as a log ticker.
- **Global:** `gsap.matchMedia()` — reduced-motion shows fully-typed static text
  (no typewriter), marquee paused.

Skills used: gsap-core, gsap-timeline, gsap-scrolltrigger, gsap-react (useGSAP);
ui-ux-pro-max consulted for the terminal style + mono pairing.

## 6. Tech Changes (on top of existing redesign branch)

- Swap font: load JetBrains Mono; replace `--font-display`/`--font-body` usage; drop
  Instrument Serif + Inter. Remove `.display-giant` serif util (or repurpose to mono).
- Add small primitives: `Prompt`/`Cursor` (or a `useTypewriter` helper) — keep focused.
- Keep gsap lib, data module, Grain, reduced-motion patterns, single page.

## 7. Content Fixes (the v1 miss)

- Wire all real links per §2 (no dead "Live").
- Hokkori = live (remove the "in progress" label).

## 8. Out of Scope (YAGNI)

- No real shell/REPL that executes arbitrary input (stylized only).
- No multi-page routing, CMS, backend, or new projects.
- No heavy CRT/scanline/WebGL.

## 9. Success Criteria

- Site builds + lints; runs with no `motion`/serif leftovers.
- Reads unmistakably as a terminal/dev-OS (mono, prompts, lime phosphor) — clearly
  different from v1 at a glance.
- Hero boot-typing plays on load; reduced-motion shows static typed text.
- All three projects link correctly (Live + GitHub per §2); no dead links.
- Navigable and readable for a non-technical recruiter (content never hidden behind
  required typing).

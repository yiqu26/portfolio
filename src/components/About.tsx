import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.about-reveal', {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="about" className="mx-auto max-w-6xl px-6 py-28 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
        <h2 className="about-reveal font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          About<span className="text-accent">.</span>
        </h2>
        <span className="about-reveal font-mono text-xs text-white/30">(01 / WHOAMI)</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <p className="about-reveal font-display text-2xl font-bold leading-snug sm:text-3xl">
          I&apos;m <span className="text-accent">LungYi</span> — a full-stack developer who likes
          shipping real, working systems.
        </p>
        <div className="about-reveal flex flex-col gap-4 text-lg leading-relaxed text-dim">
          <p>
            I work across C# / .NET backends and React frontends. Across my projects I&apos;ve built
            dual-frontend platforms, AI integrations, payment flows and PWAs — and I care about the
            parts that don&apos;t show: clean architecture, security, and code that stays
            maintainable.
          </p>
          <p className="text-white/70">Currently open to my first full-time role.</p>
        </div>
      </div>
    </section>
  )
}

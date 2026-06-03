import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.about-reveal', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="about" className="mx-auto max-w-5xl px-6 py-32 md:py-48">
      <p className="about-reveal mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
        About
      </p>
      <h2 className="about-reveal font-display text-4xl leading-tight tracking-tight sm:text-6xl">
        I'm <span className="text-accent">李奕琦</span> — a full-stack developer building
        clean, reliable systems.
      </h2>
      <p className="about-reveal mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
        I focus on C# / .NET backends and React frontends. I care about code that stays
        maintainable, systems that actually work in production, and interfaces that feel
        considered. Currently open to new opportunities.
      </p>
    </section>
  )
}

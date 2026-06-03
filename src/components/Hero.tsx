import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '../lib/gsap'
import { GITHUB_URL } from '../data/projects'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('.hero-title', { visibility: 'visible' })
        const split = new SplitText('.hero-title', {
          type: 'lines,chars',
          linesClass: 'overflow-hidden',
        })

        const tl = gsap.timeline()
        tl.from(split.chars, {
          yPercent: 120,
          opacity: 0,
          stagger: 0.012,
          duration: 0.8,
          ease: 'power3.out',
        })
        tl.from(
          '.hero-fade',
          { y: 24, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out' },
          '-=0.4',
        )

        gsap.to('.hero-inner', {
          yPercent: 18,
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        return () => split.revert()
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.hero-title', { visibility: 'visible' })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="hero-inner relative z-10 mx-auto max-w-5xl text-center">
        <p className="hero-fade mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
          Available for work
        </p>

        <h1 className="hero-title split-prep display-giant mb-8">
          Building things
          <br />
          <span className="text-accent">worth exploring.</span>
        </h1>

        <p className="hero-fade mx-auto mb-10 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
          Full-stack developer focused on C# / .NET backends and React frontends.
          I build systems that are clean, maintainable, and actually work.
        </p>

        <div className="hero-fade flex flex-wrap items-center justify-center gap-5">
          <a
            href="#projects"
            className="border-b border-white/30 pb-1 text-sm text-white transition-colors hover:border-[#D4FF00] hover:text-[#D4FF00]"
          >
            View Projects ↓
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent pb-1 text-sm text-white/60 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-fade absolute bottom-10 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}

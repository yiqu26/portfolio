import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { GITHUB_URL } from '../data/projects'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
        tl.from('.hero-glow', { scale: 0.6, autoAlpha: 0, duration: 1.4, ease: 'power2.out' })
          .from('.hero-line > span', { yPercent: 115, duration: 1, stagger: 0.12 }, 0.25)
          .from('.hero-rise', { y: 24, autoAlpha: 0, stagger: 0.1, duration: 0.7 }, 0.8)
          .from('.hero-vert', { autoAlpha: 0, x: -12, duration: 0.8 }, 0.7)

        gsap.to('.hero-glow', {
          yPercent: 8,
          xPercent: 6,
          duration: 6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 lg:px-12"
    >
      <div
        className="hero-glow pointer-events-none absolute -top-1/4 left-1/4 h-[60vw] w-[60vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(212,255,0,0.16), transparent 65%)', filter: 'blur(60px)' }}
      />

      <span className="hero-vert absolute left-6 top-1/2 hidden -translate-y-1/2 rotate-180 font-mono text-xs uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-rl] lg:block">
        Portfolio — 2026
      </span>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="hero-rise mb-6 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          ● Available for work · Taipei
        </p>

        <h1 className="font-display font-extrabold leading-[0.86] tracking-[-0.03em]" style={{ fontSize: 'clamp(3rem, 12vw, 11rem)' }}>
          <span className="mask hero-line"><span className="block">Building things</span></span>
          <span className="mask hero-line"><span className="block text-accent">worth exploring.</span></span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="hero-rise max-w-md text-lg leading-relaxed text-dim">
            <span className="font-mono text-sm text-white/40">// </span>
            LungYi — C# / .NET backends &amp; React frontends. Clean, maintainable, shipped.
          </p>
          <div className="hero-rise flex items-center gap-6 font-mono text-sm">
            <a href="#projects" className="group flex items-center gap-2 text-white transition-colors hover:text-accent">
              View work <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <span className="hero-rise absolute bottom-8 right-6 font-mono text-xs tracking-widest text-white/25 lg:right-12">
        (SCROLL ↓)
      </span>
    </section>
  )
}

import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import Cursor from './Cursor'
import { GITHUB_URL } from '../data/projects'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(['.out1', '.out2'], { autoAlpha: 0 })
        const tl = gsap.timeline({ defaults: { ease: 'none' } })
        tl.to('#cmd1', { text: 'whoami', duration: 0.6 })
          .to('.out1', { autoAlpha: 1, duration: 0.2 }, '+=0.15')
          .to('#cmd2', { text: 'cat ~/intro', duration: 0.7 }, '+=0.35')
          .to('.out2', { autoAlpha: 1, duration: 0.2 }, '+=0.15')
          .from('.hero-cta', { autoAlpha: 0, y: 8, stagger: 0.1 }, '+=0.1')
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const c1 = document.querySelector('#cmd1')
        if (c1) c1.textContent = 'whoami'
        const c2 = document.querySelector('#cmd2')
        if (c2) c2.textContent = 'cat ~/intro'
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="flex min-h-screen items-center px-6 lg:px-12">
      <div className="mx-auto w-full max-w-3xl text-base leading-relaxed sm:text-lg">
        <p>
          <span className="text-accent">$</span> <span id="cmd1" />
        </p>
        <p className="out1 mt-2 text-2xl sm:text-4xl">
          LungYi <span className="text-dim">— full-stack developer (C#/.NET · React)</span>
        </p>

        <p className="mt-6">
          <span className="text-accent">$</span> <span id="cmd2" />
        </p>
        <p className="out2 mt-2 max-w-xl text-dim">
          I build clean, maintainable systems and considered interfaces. Currently open to
          new opportunities.
          <Cursor />
        </p>

        <div className="mt-10 flex gap-6 text-sm">
          <a href="#projects" className="hero-cta text-accent hover:underline">
            &gt; open projects
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta text-dim transition-colors hover:text-white"
          >
            &gt; gh
          </a>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import Prompt from './Prompt'

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.about-line', {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="about" className="mx-auto max-w-3xl px-6 py-32 lg:px-12">
      <p className="about-line text-sm">
        <Prompt>cat about.md</Prompt>
      </p>
      <p className="about-line mt-6 text-xl sm:text-2xl">
        I&apos;m <span className="text-accent">李奕琦</span>, a full-stack developer.
      </p>
      <p className="about-line mt-4 max-w-2xl leading-relaxed text-dim">
        I focus on C# / .NET backends and React frontends. I care about code that stays
        maintainable, systems that work in production, and interfaces that feel considered.
        Currently open to new opportunities.
      </p>
    </section>
  )
}

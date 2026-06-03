import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { CONTACT_EMAIL, GITHUB_URL } from '../data/projects'

export default function Contact() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.contact-reveal', {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 80%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="contact" className="mx-auto max-w-6xl px-6 py-32 lg:px-12">
      <span className="contact-reveal font-mono text-xs text-white/30">(04 / CONTACT)</span>
      <h2 className="contact-reveal mt-6 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">
        Let&apos;s build
        <br />
        something<span className="text-accent">.</span>
      </h2>

      <div className="contact-reveal mt-12 flex flex-col items-start gap-4">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group inline-flex items-center gap-3 font-display text-2xl text-accent transition-opacity hover:opacity-70 sm:text-4xl"
        >
          {CONTACT_EMAIL}
          <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-dim transition-colors hover:text-white"
        >
          github.com/yiqu26 ↗
        </a>
      </div>
    </section>
  )
}

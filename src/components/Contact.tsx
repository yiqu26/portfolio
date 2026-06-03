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
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="contact"
      className="mx-auto max-w-5xl px-6 py-32 text-center md:py-56"
    >
      <p className="contact-reveal mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
        Contact
      </p>
      <h2 className="contact-reveal display-giant mb-12">
        Let&apos;s build
        <br />
        something.
      </h2>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="contact-reveal inline-block text-xl text-accent underline decoration-1 underline-offset-8 transition-opacity hover:opacity-70 sm:text-3xl"
      >
        {CONTACT_EMAIL}
      </a>
      <div className="contact-reveal mt-10">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/50 transition-colors hover:text-white"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  )
}

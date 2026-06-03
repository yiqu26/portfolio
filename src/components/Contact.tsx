import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import Prompt from './Prompt'
import Cursor from './Cursor'
import { CONTACT_EMAIL, GITHUB_URL } from '../data/projects'

export default function Contact() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.contact-line', {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: root.current, start: 'top 80%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="contact" className="mx-auto max-w-3xl px-6 py-32 lg:px-12">
      <p className="contact-line text-sm">
        <Prompt symbol="$">./hire.sh</Prompt>
        <Cursor />
      </p>
      <p className="contact-line mt-6 text-dim">opening channel...</p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="contact-line mt-2 inline-block text-2xl text-accent underline decoration-1 underline-offset-8 hover:opacity-70 sm:text-4xl"
      >
        {CONTACT_EMAIL}
      </a>
      <p className="contact-line mt-8 text-sm">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dim transition-colors hover:text-white"
        >
          &gt; gh — github.com/yiqu26
        </a>
      </p>
    </section>
  )
}

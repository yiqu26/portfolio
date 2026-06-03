import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { projects } from '../data/projects'

export default function Marquee() {
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const loop = gsap.to(track.current, {
          xPercent: -50,
          ease: 'none',
          duration: 20,
          repeat: -1,
        })
        return () => loop.kill()
      })
    },
    { scope: track },
  )

  // Duplicate the list so a -50% shift lands seamlessly at the start of the copy.
  const items = [...projects, ...projects]

  return (
    <section className="overflow-hidden border-y border-white/10 py-10">
      <div ref={track} className="flex w-max whitespace-nowrap will-change-transform">
        {items.map((p, i) => (
          <span
            key={i}
            className="flex items-center font-display text-5xl text-white/80 sm:text-7xl"
          >
            <span className="px-8">{p.name}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}

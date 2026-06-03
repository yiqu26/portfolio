import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const words = ['Full-stack', 'C# / .NET', 'React', 'TypeScript', 'SQL', 'AI Integration', 'Open to work']

export default function Marquee() {
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const loop = gsap.to(track.current, {
          xPercent: -50,
          ease: 'none',
          duration: 22,
          repeat: -1,
        })
        return () => loop.kill()
      })
    },
    { scope: track },
  )

  const items = [...words, ...words]

  return (
    <section className="overflow-hidden border-y border-white/10 py-8">
      <div ref={track} className="flex w-max items-center whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center font-display text-4xl font-bold sm:text-6xl">
            <span className="px-8 text-white/85">{w}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}

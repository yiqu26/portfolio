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
          duration: 24,
          repeat: -1,
        })
        return () => loop.kill()
      })
    },
    { scope: track },
  )

  const logs = projects.map(
    (p) => `${p.name.toLowerCase().replace(/\s+/g, '-')} ${p.status === 'live' ? 'live' : 'up'}`,
  )
  const items = [...logs, ...logs]

  return (
    <section className="overflow-hidden border-y border-white/10 py-4">
      <div ref={track} className="flex w-max whitespace-nowrap text-sm text-dim">
        {items.map((log, i) => (
          <span key={i} className="flex items-center">
            <span className="text-accent">●</span>
            <span className="px-3">{log}</span>
            <span className="px-4 text-white/20">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}

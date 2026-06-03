import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import Prompt from './Prompt'

const groups = [
  { label: 'backend', items: ['C#', 'ASP.NET Core', 'SQL Server', 'PostgreSQL', 'Docker'] },
  { label: 'frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'] },
  { label: 'tooling', items: ['Vite', 'Git', 'Vercel'] },
]

export default function Skills() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.skill-line', {
          y: 16,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="skills" className="mx-auto max-w-3xl px-6 py-32 lg:px-12">
      <p className="skill-line text-sm">
        <Prompt>cat stack</Prompt>
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {groups.map((g) => (
          <p key={g.label} className="skill-line flex flex-col gap-1 sm:flex-row sm:gap-6">
            <span className="w-28 shrink-0 text-accent">{g.label}:</span>
            <span className="text-white/70">{g.items.join('  ')}</span>
          </p>
        ))}
      </div>
    </section>
  )
}

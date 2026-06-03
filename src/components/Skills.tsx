import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const groups = [
  { label: 'Backend', items: ['C#', 'ASP.NET Core', 'SQL Server', 'PostgreSQL', 'Docker'] },
  { label: 'Frontend', items: ['React 19', 'TypeScript', 'Tailwind CSS', 'GSAP'] },
  { label: 'Tooling', items: ['Vite', 'Git', 'Vercel'] },
]

export default function Skills() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.skill-row', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="skills" className="mx-auto max-w-5xl px-6 py-32 md:py-48">
      <p className="skill-row mb-12 text-xs uppercase tracking-[0.3em] text-white/40">Skills</p>
      <div className="flex flex-col gap-10">
        {groups.map((g) => (
          <div
            key={g.label}
            className="skill-row grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[200px_1fr]"
          >
            <span className="font-display text-2xl text-accent">{g.label}</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-white/70">
              {g.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

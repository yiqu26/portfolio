import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const groups = [
  { label: 'Backend', items: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'EF Core', 'SQL Server', 'PostgreSQL', 'Docker'] },
  { label: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MUI', 'GSAP'] },
  { label: 'Practices', items: ['JWT / OAuth', 'REST APIs', 'Design Patterns', 'OWASP', 'Git'] },
]

export default function Skills() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.skill-reveal', {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="skills" className="mx-auto max-w-6xl px-6 py-28 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
        <h2 className="skill-reveal font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          Stack<span className="text-accent">.</span>
        </h2>
        <span className="skill-reveal font-mono text-xs text-white/30">(03 / SKILLS)</span>
      </div>

      <div className="flex flex-col divide-y divide-white/10">
        {groups.map((g) => (
          <div key={g.label} className="skill-reveal grid gap-4 py-6 md:grid-cols-[220px_1fr]">
            <span className="font-display text-2xl font-bold text-accent">{g.label}</span>
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

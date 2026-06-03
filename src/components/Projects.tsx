import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { projects } from '../data/projects'

export default function Projects() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.project-row', {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.project-list', start: 'top 75%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="projects" className="mx-auto max-w-5xl px-6 py-32 md:py-48">
      <p className="mb-12 text-xs uppercase tracking-[0.3em] text-white/40">Selected Work</p>

      <div className="project-list flex flex-col">
        {projects.map((p) => (
          <article
            key={p.name}
            className="project-row group border-t border-white/10 py-10 last:border-b"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-display text-4xl tracking-tight transition-colors group-hover:text-[#D4FF00] sm:text-6xl">
                {p.name}
              </h3>
              <div className="flex shrink-0 items-center gap-5 text-sm">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    Live ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.status === 'wip' && <span className="text-white/30">In progress</span>}
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">{p.desc}</p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/35">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

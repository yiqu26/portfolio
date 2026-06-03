import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import Prompt from './Prompt'
import { projects } from '../data/projects'

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, '-')

export default function Projects() {
  const root = useRef<HTMLElement>(null)
  const [open, setOpen] = useState<string | null>(projects[0]?.name ?? null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.proj-row', {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.proj-list', start: 'top 75%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="projects" className="mx-auto max-w-3xl px-6 py-32 lg:px-12">
      <p className="text-sm">
        <Prompt>ls projects/</Prompt>
      </p>

      <div className="proj-list mt-8 flex flex-col">
        {projects.map((p) => {
          const isOpen = open === p.name
          return (
            <div key={p.name} className="proj-row border-t border-white/10 py-5 last:border-b">
              <button
                onClick={() => setOpen(isOpen ? null : p.name)}
                className="flex w-full items-center gap-3 text-left text-xl transition-colors hover:text-[#D4FF00] sm:text-2xl"
              >
                <span className="text-accent">{isOpen ? '▾' : '▸'}</span>
                <span>{p.name}</span>
              </button>

              {isOpen && (
                <div className="mt-4 pl-7">
                  <p className="text-dim">
                    <span className="text-accent">$</span> cat {slug(p.name)}
                  </p>
                  <p className="mt-2 leading-relaxed text-dim">{p.desc}</p>
                  <p className="mt-3 text-sm text-white/50">{p.tags.join('  ·  ')}</p>
                  <div className="mt-4 flex gap-5 text-sm">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Live ↗
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dim transition-colors hover:text-white"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

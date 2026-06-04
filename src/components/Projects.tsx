import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import ProjectShowcase from './ProjectShowcase'
import { projects } from '../data/projects'

export default function Projects() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.project-block').forEach((block) => {
          gsap.from(block.querySelectorAll('.proj-reveal'), {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 75%' },
          })
          gsap.from(block.querySelector('.proj-frame'), {
            scale: 1.06,
            autoAlpha: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: block, start: 'top 75%' },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="projects" className="mx-auto max-w-6xl px-6 py-28 lg:px-12">
      <header className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
        <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">
          Selected
          <br />
          work<span className="text-accent">.</span>
        </h2>
        <span className="font-mono text-xs text-white/30">(02 / WORK)</span>
      </header>

      <div className="flex flex-col gap-28">
        {projects.map((p, i) => (
          <article key={p.name} className="project-block grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className={`self-center ${i % 2 ? 'lg:order-2' : ''}`}>
              <ProjectShowcase project={p} />
            </div>

            <div className="flex flex-col justify-center">
              <div className="proj-reveal mb-3 flex items-baseline gap-4">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/30">
                  {p.year}
                </span>
              </div>
              <h3 className="proj-reveal font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {p.name}
              </h3>
              <p className="proj-reveal mt-3 text-dim">{p.tagline}</p>

              <ul className="proj-reveal mt-6 flex flex-col gap-2 text-sm leading-relaxed text-white/70">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#d4ff00]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="proj-reveal mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-white/40">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              <div className="proj-reveal mt-7 flex flex-wrap gap-5 text-sm">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 border-b border-white/20 pb-1 transition-colors hover:border-[#d4ff00] hover:text-[#d4ff00]"
                  >
                    {l.label}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.about-reveal', {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="about" className="mx-auto max-w-6xl px-6 py-28 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
        <h2 className="about-reveal font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          About<span className="text-accent">.</span>
        </h2>
        <span className="about-reveal font-mono text-xs text-white/30">(01 / WHOAMI)</span>
      </div>

      <div className="max-w-3xl">
        <p className="about-reveal text-xl leading-relaxed text-white/80 sm:text-2xl">
          我主要用 <span className="text-accent">C# / .NET</span> 做後端、
          <span className="text-accent">React</span>{' '}
          做前端。在專案裡做過雙前端架構的平台、AI 功能整合、金流串接與
          PWA，這些都是自己從後端、前端一路做到部署上線的完整專案。
        </p>
        <p className="about-reveal mt-8 text-lg text-dim">目前正在尋找第一份正職工作。</p>
      </div>
    </section>
  )
}

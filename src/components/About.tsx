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

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <p className="about-reveal font-display text-2xl font-bold leading-snug sm:text-3xl">
          我是 <span className="text-accent">LungYi</span>，喜歡把東西真正做出來、跑得起來的全端工程師。
        </p>
        <div className="about-reveal flex flex-col gap-4 text-lg leading-relaxed text-dim">
          <p>
            我主要用 C# / .NET 做後端、React 做前端。在專案裡做過雙前端架構的平台、AI
            功能整合、金流串接與 PWA——我也在意那些看不見的部分：乾淨的架構、安全性，以及能長期維護的程式碼。
          </p>
          <p className="text-white/70">目前正在尋找第一份正職工作。</p>
        </div>
      </div>
    </section>
  )
}

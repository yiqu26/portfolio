import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { GITHUB_URL } from '../data/projects'

type Dims = { w: number; h: number }

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dims, setDims] = useState<Dims>({ w: 0, h: 0 })

  // Track viewport size so the starfield + scope geometry recompute on resize.
  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Drifting starfield with near-neighbour links, drawn on a canvas.
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv || !dims.w) return
    const g = cv.getContext('2d')
    if (!g) return
    cv.width = dims.w
    cv.height = dims.h
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = dims.w < 640 ? 40 : 80
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * dims.w,
      y: Math.random() * dims.h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.6,
    }))

    const draw = () => {
      g.clearRect(0, 0, dims.w, dims.h)
      for (let i = 0; i < count; i++)
        for (let j = i + 1; j < count; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.hypot(dx, dy)
          if (d < 150) {
            g.strokeStyle = `rgba(212,255,0,${0.13 * (1 - d / 150)})`
            g.lineWidth = 1
            g.beginPath()
            g.moveTo(pts[i].x, pts[i].y)
            g.lineTo(pts[j].x, pts[j].y)
            g.stroke()
          }
        }
      for (const p of pts) {
        g.fillStyle = 'rgba(255,255,255,0.55)'
        g.beginPath()
        g.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        g.fill()
      }
    }

    if (reduce) {
      draw()
      return
    }

    let raf = 0
    const loop = () => {
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > dims.w) p.vx *= -1
        if (p.y < 0 || p.y > dims.h) p.vy *= -1
      }
      draw()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [dims])

  const geo = dims.w
    ? {
        cx: Math.round(dims.w * 0.72),
        cy: Math.round(dims.h * 0.64),
        R: Math.round(Math.min(dims.w, dims.h) * 0.15),
      }
    : null

  useGSAP(
    () => {
      if (!geo) return
      const { cx, cy, R } = geo

      const drawRing = (sel: string) => {
        const el = root.current?.querySelector<SVGCircleElement>(sel)
        if (!el) return
        const len = el.getTotalLength()
        el.style.strokeDasharray = String(len)
        el.style.strokeDashoffset = String(len)
      }

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        drawRing('.scope-ring')
        drawRing('.scope-ring-faint')
        gsap.set(['.scope-sat', '.scope-core', '.scope-ping'], { autoAlpha: 0 })

        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .from('.hero-canvas', { autoAlpha: 0, duration: 1.6, ease: 'power2.out' }, 0)
          .to('.scope-ring', { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' }, 0.2)
          .to('.scope-ring-faint', { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.5)
          .to(['.scope-sat', '.scope-core'], { autoAlpha: 1, duration: 0.6 }, 1.2)
          .from('.hero-line', { yPercent: 115, duration: 1.05, stagger: 0.13 }, 0.9)
          .from('.hero-rise', { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.1 }, 1.4)
          .from('.hero-vert', { autoAlpha: 0, x: -12, duration: 0.7 }, 1.3)

        // Satellite orbits the main ring forever; sonar ping pulses from centre.
        const orbit = { a: 0 }
        const sat = root.current?.querySelector<SVGCircleElement>('.scope-sat')
        gsap.to(orbit, {
          a: Math.PI * 2,
          duration: 12,
          ease: 'none',
          repeat: -1,
          onUpdate: () => {
            sat?.setAttribute('cx', String(cx + R * Math.cos(orbit.a)))
            sat?.setAttribute('cy', String(cy + R * Math.sin(orbit.a)))
          },
        })
        gsap.fromTo(
          '.scope-ping',
          { attr: { r: R * 0.3 }, autoAlpha: 0.5 },
          {
            attr: { r: R * 1.5 },
            autoAlpha: 0,
            duration: 2.4,
            ease: 'power1.out',
            repeat: -1,
            repeatDelay: 1.6,
            delay: 1.6,
          },
        )
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.scope-ping', { autoAlpha: 0 })
      })
    },
    { scope: root, dependencies: [dims] },
  )

  return (
    <section
      ref={root}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 lg:px-12"
    >
      <canvas ref={canvasRef} className="hero-canvas pointer-events-none absolute inset-0 z-0" />

      {geo && (
        <svg
          className="pointer-events-none absolute inset-0 z-0"
          viewBox={`0 0 ${dims.w} ${dims.h}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <circle
            className="scope-ping"
            cx={geo.cx}
            cy={geo.cy}
            r={geo.R * 0.4}
            fill="none"
            stroke="rgba(212,255,0,0.4)"
          />
          <circle
            className="scope-ring"
            cx={geo.cx}
            cy={geo.cy}
            r={geo.R}
            fill="none"
            stroke="rgba(212,255,0,0.5)"
          />
          <circle
            className="scope-ring-faint"
            cx={geo.cx}
            cy={geo.cy}
            r={geo.R * 0.6}
            fill="none"
            stroke="rgba(212,255,0,0.18)"
          />
          <circle className="scope-sat" cx={geo.cx + geo.R} cy={geo.cy} r={4.5} fill="#d4ff00" />
          <circle className="scope-core" cx={geo.cx} cy={geo.cy} r={3} fill="#d4ff00" />
        </svg>
      )}

      <span className="hero-vert absolute left-6 top-1/2 hidden -translate-y-1/2 rotate-180 font-mono text-xs uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-rl] lg:block">
        Portfolio — 2026
      </span>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="hero-rise mb-6 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          ● Available for work · Taichung
        </p>

        <h1 className="font-display font-extrabold leading-[0.92] tracking-[-0.03em]">
          <span className="mask">
            <span className="hero-line block" style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)' }}>
              Full-stack developer.
            </span>
          </span>
          <span className="mask">
            <span
              className="hero-line block text-accent"
              style={{ fontSize: 'clamp(1.5rem, 4.4vw, 3.5rem)' }}
            >
              Focused on web systems.
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="hero-rise max-w-md text-lg leading-relaxed text-dim">
            <span className="font-mono text-sm text-white/40">// </span>
            LungYi — 熟悉 C#、ASP.NET Core 與 React，有 AI 功能整合的實作經驗。
          </p>
          <div className="hero-rise flex items-center gap-6 font-mono text-sm">
            <a href="#projects" className="group flex items-center gap-2 text-white transition-colors hover:text-accent">
              View work <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <span className="hero-rise absolute bottom-8 right-6 font-mono text-xs tracking-widest text-white/25 lg:right-12">
        (SCROLL ↓)
      </span>
    </section>
  )
}

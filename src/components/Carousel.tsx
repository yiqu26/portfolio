import { useCallback, useEffect, useRef, useState } from 'react'
import type { MediaItem } from '../data/projects'
import MediaSlide from './MediaSlide'

const AUTOPLAY_MS = 4500

export default function Carousel({ items, label }: { items: MediaItem[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const multi = items.length > 1

  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setIndex(Math.round(el.scrollLeft / el.clientWidth))
  }, [])

  const go = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(items.length - 1, i))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
  }

  // Auto-advance, looping back to the first slide. Pauses on hover/focus and
  // is disabled for users who prefer reduced motion.
  useEffect(() => {
    if (!multi || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      const next = (Math.round(el.scrollLeft / el.clientWidth) + 1) % items.length
      el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [multi, paused, items.length])

  return (
    <div
      className="absolute inset-0"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((m, i) => (
          <div key={i} className="h-full w-full shrink-0 snap-start">
            <MediaSlide item={m} active={i === index} fallbackAlt={`${label} 畫面 ${i + 1}`} />
          </div>
        ))}
      </div>

      {multi && (
        <>
          <button
            type="button"
            aria-label="上一張"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="group absolute left-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-sm transition hover:border-[#d4ff00] hover:text-[#d4ff00] disabled:pointer-events-none disabled:opacity-0"
          >
            <span className="-mt-0.5 text-lg leading-none">‹</span>
          </button>
          <button
            type="button"
            aria-label="下一張"
            onClick={() => go(index + 1)}
            disabled={index === items.length - 1}
            className="group absolute right-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-sm transition hover:border-[#d4ff00] hover:text-[#d4ff00] disabled:pointer-events-none disabled:opacity-0"
          >
            <span className="-mt-0.5 text-lg leading-none">›</span>
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent pb-3 pt-8">
            <div className="pointer-events-auto flex gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`前往第 ${i + 1} 張`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-5 bg-[#d4ff00]' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import type { MediaItem } from '../data/projects'

export default function MediaSlide({
  item,
  active,
  fallbackAlt,
}: {
  item: MediaItem
  active: boolean
  fallbackAlt: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const loop = item.type === 'video' ? item.loop !== false : true

  // Track viewport visibility so the intro animation plays when the user
  // actually scrolls to it, not while it is still off-screen.
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  // Only the active, on-screen slide plays. Non-looping clips replay from the
  // start each time they re-enter view, then freeze on their final frame.
  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (active && inView) {
      if (!loop) {
        try {
          v.currentTime = 0
        } catch {
          // currentTime may throw before metadata loads; harmless to ignore.
        }
      }
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [active, inView, loop])

  if (item.type === 'video') {
    return (
      <video
        ref={ref}
        className="h-full w-full object-cover object-top"
        src={item.src}
        poster={item.poster}
        muted
        loop={loop}
        playsInline
        preload="metadata"
        aria-label={item.alt ?? fallbackAlt}
      />
    )
  }

  return (
    <img
      src={item.src}
      alt={item.alt ?? fallbackAlt}
      loading="lazy"
      className="h-full w-full object-cover object-top"
    />
  )
}

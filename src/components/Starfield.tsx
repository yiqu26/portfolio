import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  px: number
  py: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const STAR_COUNT = 180
    const SPEED = 0.0004
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random(),
      px: 0,
      py: 0,
    }))

    let frame: number
    let lastTime = 0

    function draw(time: number) {
      const delta = time - lastTime
      lastTime = time

      ctx!.fillStyle = 'rgba(0,0,0,0.25)'
      ctx!.fillRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      for (const star of stars) {
        star.z -= SPEED * delta
        if (star.z <= 0) {
          star.x = Math.random() * 2 - 1
          star.y = Math.random() * 2 - 1
          star.z = 1
          star.px = 0
          star.py = 0
        }

        const sx = (star.x / star.z) * width + cx
        const sy = (star.y / star.z) * height + cy

        const size = (1 - star.z) * 2.5
        const brightness = 1 - star.z

        if (star.px !== 0) {
          ctx!.beginPath()
          ctx!.moveTo(star.px, star.py)
          ctx!.lineTo(sx, sy)
          ctx!.strokeStyle = `rgba(180, 200, 255, ${brightness * 0.7})`
          ctx!.lineWidth = size * 0.8
          ctx!.stroke()
        }

        ctx!.beginPath()
        ctx!.arc(sx, sy, size * 0.5, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(200, 220, 255, ${brightness})`
        ctx!.fill()

        star.px = sx
        star.py = sy
      }

      frame = requestAnimationFrame(draw)
    }

    frame = requestAnimationFrame(draw)

    const onResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'radial-gradient(ellipse at center, #0a0e1a 0%, #000005 100%)' }}
    />
  )
}

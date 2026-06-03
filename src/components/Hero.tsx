import Starfield from './Starfield'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated starfield background */}
      <Starfield />

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-rise inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
          <span className="text-xs text-white/70 tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            Available for work
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-rise-1 text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.92] tracking-[-3px] mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Building things
          <br />
          <em className="not-italic" style={{ color: 'rgba(150,180,255,0.55)' }}>worth exploring.</em>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-rise-2 text-base sm:text-lg text-white/50 max-w-md mx-auto leading-relaxed mb-10"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          Full-stack developer focused on C# / .NET backends and React frontends.
          I build systems that are clean, maintainable, and actually work.
        </p>

        {/* CTAs */}
        <div className="animate-fade-rise-3 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="liquid-glass rounded-full px-7 py-3 text-sm text-white hover:bg-white/5 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            View Projects ↓
          </a>
          <a
            href="https://github.com/yiqu26"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-7 py-3 text-sm bg-white text-black hover:bg-white/90 transition-colors font-medium"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-rise-4 absolute bottom-10 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)' }}>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}

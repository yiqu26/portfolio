export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-12 flex justify-between items-center">
      {/* Logo */}
      <div
        className="liquid-glass rounded-full px-5 py-2"
        style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '-0.5px' }}
      >
        ✦
      </div>

      {/* Links */}
      <div className="liquid-glass rounded-full px-2 py-1.5 hidden md:flex items-center gap-1">
        {['About', 'Projects', 'Skills', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-4 py-1.5 text-sm text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {link}
          </a>
        ))}
        <a
          href="mailto:your@email.com"
          className="ml-1 px-4 py-1.5 text-sm bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
        >
          Hire me
        </a>
      </div>

      {/* Mobile: just hire me */}
      <a
        href="mailto:your@email.com"
        className="md:hidden liquid-glass rounded-full px-5 py-2 text-sm text-white"
      >
        Hire me
      </a>
    </nav>
  )
}

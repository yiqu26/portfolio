import { CONTACT_EMAIL } from '../data/projects'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 lg:px-12">
      <a href="#" className="font-display text-2xl leading-none tracking-tight text-white">
        ✦
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm text-white/60 transition-colors hover:text-[#D4FF00]"
          >
            {l}
          </a>
        ))}
      </div>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="text-sm text-white/60 transition-colors hover:text-[#D4FF00]"
      >
        Hire me ↗
      </a>
    </nav>
  )
}

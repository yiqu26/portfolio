import { CONTACT_EMAIL } from '../data/projects'

const links: [string, string][] = [
  ['Work', '#projects'],
  ['About', '#about'],
  ['Skills', '#skills'],
]

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12">
      <a href="#" className="font-display text-xl font-extrabold tracking-tight">
        LungYi<span className="text-accent">.</span>
      </a>
      <div className="hidden gap-8 font-mono text-sm md:flex">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="text-dim transition-colors hover:text-white">
            {label}
          </a>
        ))}
      </div>
      <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-sm text-accent hover:underline">
        Let&apos;s talk ↗
      </a>
    </nav>
  )
}

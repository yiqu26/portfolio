import { CONTACT_EMAIL } from '../data/projects'

const tabs = ['about', 'projects', 'skills', 'contact']

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-3 text-sm backdrop-blur lg:px-12">
      <span className="text-dim">lanli@portfolio</span>
      <div className="hidden items-center gap-6 md:flex">
        {tabs.map((t) => (
          <a key={t} href={`#${t}`} className="text-dim transition-colors hover:text-[#D4FF00]">
            ~/{t}
          </a>
        ))}
      </div>
      <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
        hire ↗
      </a>
    </nav>
  )
}

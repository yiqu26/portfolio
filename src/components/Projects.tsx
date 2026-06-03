const projects = [
  {
    name: 'Trail Guide',
    desc: '台灣步道導覽平台。步道搜尋、GPS 附近推薦、評論系統、PWA 支援。',
    tags: ['React 19', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    link: 'https://trail-guide-eight.vercel.app',
    github: 'https://github.com/yiqu26/Trail-Guide',
    color: 'from-emerald-950 to-teal-900',
    accent: '#6ee7b7',
  },
  {
    name: 'NGO Management System',
    desc: '非政府組織後台管理系統。活動管理、個案追蹤、物資分配、AI 優化功能。',
    tags: ['C#', 'ASP.NET Core', 'React', 'SQL Server', 'Docker'],
    link: 'https://ngo-management-hub.com',
    github: 'https://github.com/yiqu26/NGO-Management-System',
    color: 'from-blue-950 to-indigo-900',
    accent: '#93c5fd',
  },
  {
    name: 'Hokkori',
    desc: '手作串珠手鏈品牌展示網站。溫暖療癒的日系風格，導流蝦皮購物。',
    tags: ['Next.js 16', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    github: '#',
    color: 'from-rose-950 to-pink-900',
    accent: '#fda4af',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs text-white/50 tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            Selected Work
          </span>
        </div>
        <h2
          className="text-4xl sm:text-5xl font-normal leading-tight tracking-tight text-white"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Things I've built.
        </h2>
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl bg-gradient-to-br ${p.color} border border-white/10 p-8 hover:border-white/20 transition-all duration-300`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3
                className="text-2xl font-normal text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {p.name}
              </h3>
              <div className="flex gap-3 flex-shrink-0">
                {p.github !== '#' && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    GitHub ↗
                  </a>
                )}
                {p.link !== '#' && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:opacity-80 transition-opacity"
                    style={{ color: p.accent, fontFamily: 'var(--font-body)' }}
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            <p
              className="text-sm text-white/60 leading-relaxed mb-5"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

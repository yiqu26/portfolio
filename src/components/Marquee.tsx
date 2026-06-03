const projects = [
  { name: 'Trail Guide', tag: 'React · .NET · PostgreSQL', img: 'https://trail-guide-eight.vercel.app' },
  { name: 'NGO System', tag: 'C# · ASP.NET · SQL Server', img: '' },
  { name: 'Hokkori', tag: 'Next.js · Tailwind', img: '' },
]

// Use colored placeholder cards for now
const COLORS = [
  'from-blue-900/40 to-indigo-900/40',
  'from-violet-900/40 to-purple-900/40',
  'from-cyan-900/40 to-blue-900/40',
]

const items = [...projects, ...projects] // duplicate for seamless loop

export default function Marquee() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="animate-marquee gap-6 whitespace-nowrap">
        {items.map((p, i) => (
          <div
            key={i}
            className={`inline-flex flex-col justify-end flex-shrink-0 w-72 h-48 rounded-2xl bg-gradient-to-br ${COLORS[i % COLORS.length]} border border-white/10 p-5 mx-3`}
          >
            <p className="text-xs text-white/40 mb-1" style={{ fontFamily: 'var(--font-body)' }}>{p.tag}</p>
            <p className="text-lg text-white" style={{ fontFamily: 'var(--font-display)' }}>{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

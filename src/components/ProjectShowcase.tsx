import type { Project } from '../data/projects'
import Carousel from './Carousel'

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[260px]">
      <div className="proj-frame relative aspect-[390/844] rounded-[2.6rem] border border-white/15 bg-neutral-950 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/5">
        <span className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-950" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.1rem]">{children}</div>
      </div>
    </div>
  )
}

function BrowserFrame({ url, children }: { url?: string; children: React.ReactNode }) {
  return (
    <div className="proj-frame overflow-hidden rounded-xl border border-white/15 bg-[#0e0e0e] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </span>
        {url && (
          <span className="truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-white/40">
            {url}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] w-full">{children}</div>
    </div>
  )
}

function BareFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="proj-frame relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10">
      {children}
    </div>
  )
}

export default function ProjectShowcase({ project }: { project: Project }) {
  const carousel = <Carousel items={project.media} label={project.name} />

  if (project.frame === 'phone') return <PhoneFrame>{carousel}</PhoneFrame>
  if (project.frame === 'browser') return <BrowserFrame url={project.url}>{carousel}</BrowserFrame>
  return <BareFrame>{carousel}</BareFrame>
}

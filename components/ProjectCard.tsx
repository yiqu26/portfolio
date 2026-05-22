"use client";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  external?: boolean;
}

export default function ProjectCard({ href, title, description, tags, demo, external }: ProjectCardProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block rounded-xl border overflow-hidden card-hover"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      {/* Screenshot placeholder */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: "16/9",
          background: "var(--bg-3)",
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs tracking-wider px-3 py-1.5 rounded"
            style={{
              color: "var(--text-3)",
              border: "1px solid var(--border)",
              background: "rgba(0,0,0,0.4)",
            }}>
            {title}
          </span>
        </div>
        {/* Arrow on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4" style={{ color: "var(--text-3)" }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-[0.95rem] mb-2" style={{ color: "var(--text)" }}>{title}</h3>
        <p className="text-[0.86rem] leading-relaxed mb-4" style={{ color: "var(--text-2)", lineHeight: "1.7" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[0.72rem] px-2 py-0.5 rounded font-mono"
              style={{ background: "var(--bg-3)", color: "var(--text-3)", border: "1px solid var(--border)" }}>
              {tag}
            </span>
          ))}
        </div>
        {demo && (
          <div className="text-xs font-mono" style={{ color: "var(--accent)" }}>
            ↗ {demo}
          </div>
        )}
      </div>
    </Link>
  );
}

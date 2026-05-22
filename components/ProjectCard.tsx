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
      className="group block p-6 rounded-xl border transition-all duration-200"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.background = "var(--bg-3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "var(--bg-2)";
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{title}</h3>
        <svg className="w-4 h-4 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "var(--text-2)" }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-2)" }}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded font-mono"
            style={{ background: "var(--bg-3)", color: "var(--text-3)", border: "1px solid var(--border)" }}>
            {tag}
          </span>
        ))}
      </div>
      {demo && (
        <div className="mt-4 text-xs font-mono" style={{ color: "var(--accent)" }}>
          → {demo}
        </div>
      )}
    </Link>
  );
}

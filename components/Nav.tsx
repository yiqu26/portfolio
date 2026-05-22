"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium" style={{ color: "var(--text)" }}>
          lung-yi<span style={{ color: "var(--accent)" }}>.</span>dev
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#projects" className="text-sm transition-colors"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}>
            專案
          </Link>
          <a href="mailto:lanlin1999123@gmail.com" className="text-sm transition-colors"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}>
            聯絡
          </a>
          <a href="https://github.com/yiqu26" target="_blank" rel="noopener noreferrer"
            className="text-sm px-3 py-1.5 rounded border transition-colors"
            style={{ color: "var(--text-2)", borderColor: "var(--border)" }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

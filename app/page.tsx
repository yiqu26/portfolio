"use client";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    href: "/projects/ngo",
    title: "NGO Management System",
    description: "非營利組織管理平台，包含用戶前台與員工後台。整合 ECPay 金流、OpenAI（GPT / DALL-E / Whisper）與 Google OAuth，從需求規劃到部署獨立完成。",
    tags: ["ASP.NET Core", "React", "TypeScript", "SQL Server", "ECPay", "OpenAI"],
    demo: "ngo-management-hub.com",
  },
  {
    href: "/projects/trail-guide",
    title: "Trail Guide",
    description: "台灣步道資訊平台，支援關鍵字搜尋、地圖定位、收藏與評論功能，支援 PWA 安裝至手機桌面。",
    tags: ["React", "TypeScript", "ASP.NET Core", "PostgreSQL", "Leaflet"],
    demo: "trail.ngo-management-hub.com",
  },
  {
    href: "https://hokkori.pages.dev",
    title: "Hokkori",
    description: "手作串珠手鏈品牌展示網站，溫暖療癒風格，導流至蝦皮下單。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    demo: "hokkori.pages.dev",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Hero */}
        <section className="mb-24">
          <p className="font-mono text-sm mb-4" style={{ color: "var(--accent)" }}>
            Hi, 我是
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ color: "var(--text)" }}>
            Lung Yi
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-2)" }}>
            全端工程師，專注於 Web 系統開發。熟悉 C#、ASP.NET Core 與 React，
            有 AI 功能整合的實務經驗。
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a href="mailto:lanlin1999123@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: "var(--accent)", color: "#000" }}>
              聯絡我
            </a>
            <a href="https://github.com/yiqu26" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
              style={{ color: "var(--text-2)", borderColor: "var(--border)" }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-24">
          <h2 className="font-mono text-xs mb-6 uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
            技術棧
          </h2>
          <div className="flex flex-wrap gap-2">
            {["C#", "ASP.NET Core", "React", "TypeScript", "Next.js", "SQL Server", "PostgreSQL", "EF Core", "Bootstrap", "jQuery", "Tailwind CSS", "Git"].map(tech => (
              <span key={tech} className="text-sm px-3 py-1 rounded border font-mono"
                style={{ color: "var(--text-2)", borderColor: "var(--border)", background: "var(--bg-2)" }}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="font-mono text-xs mb-6 uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
            專案
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
              <ProjectCard key={p.href} {...p} />
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
            Lung Yi
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
            lanlin1999123@gmail.com
          </span>
        </div>
      </footer>
    </>
  );
}

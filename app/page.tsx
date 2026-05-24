"use client";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const projects = [
  {
    href: "/projects/ngo",
    title: "NGO Management System",
    description:
      "非營利組織管理平台，包含用戶前台與員工後台。整合 ECPay 金流、OpenAI（GPT / DALL-E / Whisper）與 Google OAuth，從需求規劃到部署獨立完成。",
    tags: ["ASP.NET Core", "React", "TypeScript", "SQL Server", "ECPay", "OpenAI"],
    demo: "ngo-management-hub.com",
    image: "/images/ngo/1-home.png",
  },
  {
    href: "/projects/trail-guide",
    title: "Trail Guide",
    description:
      "台灣步道資訊平台，支援關鍵字搜尋、地圖定位、收藏與評論功能，支援 PWA 安裝至手機桌面。",
    tags: ["React", "TypeScript", "ASP.NET Core", "PostgreSQL", "Leaflet"],
    demo: "trail.ngo-management-hub.com",
    image: "/images/trail/1-home.png",
  },
  {
    href: "/projects/hokkori",
    title: "Hokkori",
    description: "手作串珠手鏈品牌展示網站，溫暖療癒風格，導流至蝦皮下單。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    demo: "hokkori.pages.dev",
    image: "/images/hokkori/1-works.png",
  },
];

const techStack = [
  { label: "後端", items: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "PostgreSQL"] },
  {
    label: "前端",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  { label: "工具", items: ["Git", "Docker", "Cloudflare"] },
];

const heroMicroFacts = ["SELF-TAUGHT", "FULL-STACK", "AI INTEGRATION"];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative">

        {/* Hero */}
        <section className="mb-28 relative">
          {/* Atmospheric backdrop — sits behind the hero text */}
          <div className="hero-spotlight" aria-hidden="true" />

          <div className="relative">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--text-3)" }}
            >
              Portfolio · 2026 / Taichung
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-xs font-mono"
              style={{
                borderColor: "rgba(74,222,128,0.25)",
                background: "rgba(74,222,128,0.06)",
                color: "#4ade80",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
              尋找機會中
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl font-bold tracking-tight mb-5"
              style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
            >
              Lung Yi
              <span
                className="cursor-blink ml-1 font-light"
                style={{ color: "var(--accent)" }}
              >
                _
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg max-w-lg leading-relaxed mb-8"
              style={{ color: "var(--text-2)", lineHeight: "1.75" }}
            >
              全端工程師，專注於 Web 系統開發。
              <br />
              熟悉 C#、ASP.NET Core 與 React，有 AI 功能整合的實務經驗。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <a
                href="mailto:lanlin1999123@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-[1.03]"
                style={{ background: "var(--accent)", color: "#000" }}
              >
                聯絡我
              </a>
              <a
                href="https://github.com/yiqu26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors hover:text-[var(--text)] hover:border-[var(--border-hover)]"
                style={{ color: "var(--text-2)", borderColor: "var(--border)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Micro-fact strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.18em] mb-12"
              style={{ color: "var(--text-3)" }}
            >
              {heroMicroFacts.map((fact, i) => (
                <span key={fact} className="flex items-center gap-3">
                  <span>{fact}</span>
                  {i < heroMicroFacts.length - 1 && (
                    <span style={{ color: "var(--accent)" }}>·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* English bio — monospaced, factual */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[0.78rem] max-w-xl leading-relaxed mb-10 pl-4 border-l"
              style={{
                color: "var(--text-2)",
                borderColor: "var(--accent)",
                borderLeftWidth: "2px",
              }}
            >
              Full-stack engineer based in Taichung. Builds web systems end-to-end — from API design and database schema to deployment via Cloudflare Tunnel.
            </motion.p>

            {/* Scroll indicator */}
            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="inline-flex flex-col items-center gap-2 font-mono text-[0.65rem] tracking-[0.25em] uppercase scroll-cue"
              style={{ color: "var(--text-3)" }}
            >
              <span>Scroll</span>
              <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
                <path d="M7 1 L7 17 M2 12 L7 17 L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </section>

        <hr className="mb-24" style={{ borderColor: "var(--border)" }} />

        {/* Tech Stack */}
        <Reveal>
          <section className="mb-28">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p
                  className="font-mono text-[0.7rem] uppercase tracking-[0.25em] mb-2"
                  style={{ color: "var(--text-3)" }}
                >
                  <span style={{ color: "var(--accent)" }}>01</span> · Stack
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
                >
                  技術棧
                </h2>
              </div>
              <span
                className="font-mono text-[0.7rem] pb-1.5 hidden sm:inline"
                style={{ color: "var(--text-3)" }}
              >
                /stack
              </span>
            </div>
            <div className="space-y-5">
              {techStack.map(({ label, items }, idx) => (
                <Reveal key={label} delay={idx * 80}>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex items-center gap-2 pt-1 w-16 shrink-0">
                      <span
                        className="font-mono text-[0.7rem]"
                        style={{ color: "var(--accent)" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--text-3)" }}
                      >
                        {label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag text-sm px-2.5 py-1 rounded border font-mono cursor-default"
                          style={{
                            color: "var(--text-2)",
                            borderColor: "var(--border)",
                            background: "var(--bg-2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <hr className="mb-24" style={{ borderColor: "var(--border)" }} />

        {/* Projects */}
        <section id="projects">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p
                  className="font-mono text-[0.7rem] uppercase tracking-[0.25em] mb-2"
                  style={{ color: "var(--text-3)" }}
                >
                  <span style={{ color: "var(--accent)" }}>02</span> · Work
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
                >
                  專案
                </h2>
              </div>
              <span
                className="font-mono text-[0.7rem] pb-1.5 hidden sm:inline"
                style={{ color: "var(--text-3)" }}
              >
                /work · {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.href} delay={i * 120} className="h-full">
                <ProjectCard {...p} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </section>

      </main>

      <footer
        className="border-t py-8 relative"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span
            className="font-mono text-xs"
            style={{ color: "var(--text-3)" }}
          >
            Lung Yi
            <span className="cursor-blink ml-0.5" style={{ color: "var(--accent)" }}>
              _
            </span>
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: "var(--text-3)" }}
          >
            lanlin1999123@gmail.com
          </span>
        </div>
      </footer>
    </>
  );
}

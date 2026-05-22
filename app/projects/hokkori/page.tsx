"use client";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function HokkoriPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10"
          style={{ color: "var(--text-3)" }}>
          ← 返回
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Project
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          Hokkori
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-2)" }}>
          手作串珠手鏈品牌展示網站。「ほっこり」取自日文，有溫暖舒適之意，以靜態網站展示商品並導流至蝦皮下單。
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href="https://hokkori.pages.dev" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: "var(--accent)", color: "#000" }}>
            Live Demo →
          </a>
          <a href="https://github.com/yiqu26/hokkori" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border"
            style={{ color: "var(--text-2)", borderColor: "var(--border)" }}>
            GitHub
          </a>
        </div>

        <div className="space-y-10">

          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-3)" }}>
              技術棧
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Cloudflare Pages"].map(t => (
                <span key={t} className="text-xs px-2.5 py-1 rounded border font-mono"
                  style={{ color: "var(--text-2)", borderColor: "var(--border)", background: "var(--bg-2)" }}>
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-3)" }}>
              設計重點
            </h2>
            <ul className="space-y-2">
              {[
                "Next.js 靜態輸出（output: export），部署至 Cloudflare Pages",
                "溫暖米白色系，奶油棕色調，符合手作品牌調性",
                "商品展示頁面，點擊導流至蝦皮購物",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-2)" }}>
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}

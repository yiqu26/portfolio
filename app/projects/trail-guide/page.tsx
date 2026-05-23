"use client";
import Nav from "@/components/Nav";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";

const images = [
  { src: "/images/trail/1-home.png", alt: "Trail Guide 首頁" },
  { src: "/images/trail/2-search.png", alt: "地圖搜尋" },
];

export default function TrailGuidePage() {
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
          Trail Guide
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-2)" }}>
          台灣步道資訊平台，支援搜尋、收藏、評論與 GPS 附近步道功能。
        </p>

        <ProjectCarousel images={images} />

        <div className="flex flex-wrap gap-3 mb-12">
          <a href="https://trail.ngo-management-hub.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: "var(--accent)", color: "#000" }}>
            Live Demo →
          </a>
          <a href="https://github.com/yiqu26/Trail-Guide" target="_blank" rel="noopener noreferrer"
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
              {["React 19", "TypeScript", "Vite", "MUI v7", "ASP.NET Core 8", "PostgreSQL", "JWT", "Google OAuth", "Leaflet", "Cloudinary"].map(t => (
                <span key={t} className="text-xs px-2.5 py-1 rounded border font-mono"
                  style={{ color: "var(--text-2)", borderColor: "var(--border)", background: "var(--bg-2)" }}>
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-3)" }}>
              主要功能
            </h2>
            <ul className="space-y-2">
              {[
                "關鍵字、縣市、難度多條件搜尋，搜尋結果即時顯示於 Leaflet 地圖",
                "GPS 附近步道偵測",
                "口袋名單（收藏）、已去過標記",
                "評論系統：發表、編輯、刪除，支援圖片上傳（Cloudinary）",
                "Google OAuth 登入",
                "PWA 支援，可安裝至手機桌面",
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

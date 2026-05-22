"use client";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function NgoPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "var(--text-3)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text-2)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
          ← 返回
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Project
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          NGO Management System
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-2)" }}>
          非營利組織管理平台，包含用戶前台與員工後台，從需求規劃、開發到部署獨立完成。
        </p>

        {/* Screenshot placeholder */}
        <div className="w-full rounded-xl overflow-hidden border mb-8"
          style={{
            aspectRatio: "16/9",
            background: "var(--bg-3)",
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            borderColor: "var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
          <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>ngo-management-hub.com</span>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href="https://ngo-management-hub.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: "var(--accent)", color: "#000" }}>
            Live Demo →
          </a>
          <a href="https://github.com/yiqu26/NGO-Admin-System" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border"
            style={{ color: "var(--text-2)", borderColor: "var(--border)" }}>
            GitHub
          </a>
        </div>

        <div className="space-y-10">

          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-3)" }}>
              技術架構
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "MVC 前台", stack: "ASP.NET MVC .NET 8\nCookie + Google OAuth\nBootstrap RWD" },
                { label: "React 後台", stack: "React 18 + TypeScript\nMUI + JWT 認證\nVite" },
                { label: "API 層", stack: "ASP.NET Core 9\nSQL Server / EF Core\nJWT" },
              ].map(({ label, stack }) => (
                <div key={label} className="p-4 rounded-xl border"
                  style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--text)" }}>{label}</p>
                  <p className="text-xs font-mono leading-relaxed whitespace-pre-line" style={{ color: "var(--text-2)" }}>{stack}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-3)" }}>
              主要功能
            </h2>
            <ul className="space-y-2">
              {[
                "ECPay 綠界金流完整串接（產生訂單 → SHA256 簽章 → Callback 驗簽章）",
                "OpenAI 整合：GPT 活動文案優化、DALL-E 圖片生成、Whisper 語音轉文字",
                "Google OAuth 第三方登入",
                "三角色權限管理（管理員 / 督導 / 員工）",
                "緊急物資募集系統（狀態機：pending → Fundraising → Completed）",
                "成就系統、活動報名、個人資料管理",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-2)" }}>
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-3)" }}>
              部署方式
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              服務跑在本機，透過 <span className="font-mono px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--bg-3)", color: "var(--text)" }}>Cloudflare Tunnel</span> 對外公開，不需要租主機。
              固定網域 <span className="font-mono px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--bg-3)", color: "var(--accent)" }}>ngo-management-hub.com</span>，24/7 可存取。
            </p>
          </section>

        </div>
      </main>
    </>
  );
}

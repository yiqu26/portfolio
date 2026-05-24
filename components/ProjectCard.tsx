"use client";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  external?: boolean;
  image?: string;
  index?: number;
}

export default function ProjectCard({
  href,
  title,
  description,
  tags,
  demo,
  external,
  image,
  index,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col h-full rounded-xl border overflow-hidden card-hover relative"
      style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
    >
      {/* Number badge */}
      {typeof index === "number" && (
        <div
          className="absolute top-3 left-3 z-10 font-mono text-[0.7rem] px-2 py-0.5 rounded backdrop-blur-md"
          style={{
            color: "var(--accent)",
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(212,168,67,0.25)",
          }}
        >
          {String(index).padStart(2, "0")}
        </div>
      )}

      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16/9",
          background: "var(--bg-3)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="thumb-img object-cover object-top"
            />
            {/* Bottom legibility gradient (always present, slightly fades on hover) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0) 50%, rgba(10,10,10,0.55) 100%)",
              }}
            />
            {/* Subtle vignette */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
              }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        )}

        {/* Arrow on hover */}
        <div
          className="absolute top-3 right-3 z-10 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          style={{
            color: "var(--accent)",
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(212,168,67,0.25)",
            borderRadius: "6px",
            padding: "4px",
            backdropFilter: "blur(8px)",
          }}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M7 7h10v10"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-semibold text-[1.05rem] mb-2 tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          {title}
        </h3>
        <p
          className="text-[0.86rem] leading-relaxed mb-4"
          style={{ color: "var(--text-2)", lineHeight: "1.7" }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.72rem] px-2 py-0.5 rounded font-mono"
              style={{
                background: "var(--bg-3)",
                color: "var(--text-3)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {demo && (
          <div
            className="mt-auto pt-1 text-xs font-mono inline-flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ color: "var(--accent)" }}
          >
            <span>↗</span>
            <span>{demo}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

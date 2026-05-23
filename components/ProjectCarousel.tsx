"use client";
import { useState } from "react";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string }[];
}

export default function ProjectCarousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="w-full rounded-xl overflow-hidden border mb-8 relative group"
      style={{ borderColor: "var(--border)", background: "var(--bg-3)" }}>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover object-top"
          style={{ transition: "opacity 0.25s" }}
          unoptimized
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
              aria-label="上一張">
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
              aria-label="下一張">
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-1.5 h-1.5 rounded-full transition-colors"
                  style={{ background: i === current ? "var(--accent)" : "rgba(255,255,255,0.35)" }}
                  aria-label={`第 ${i + 1} 張`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

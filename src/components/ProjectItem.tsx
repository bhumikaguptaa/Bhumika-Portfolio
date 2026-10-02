import type { ReactNode } from "react";

export function ProjectItem({
  title,
  link,
  desc,
  tag,
  win,
}: {
  title: string;
  link?: string;
  desc: ReactNode;
  tag: string;
  win?: string;
}) {
  return (
    <div className="relative group">
      <div className="absolute -left-[39px] top-0 bottom-0 w-0.5 bg-neutral-800 group-hover:bg-rose-600 transition-colors" />
      <div className="absolute -left-[43px] top-1 h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 group-hover:border-rose-600 transition-colors" />

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex flex-wrap items-baseline gap-3 mb-2 ${
          link ? "cursor-none" : "pointer-events-none"
        }`}
      >
        <span className="text-xl font-semibold text-neutral-100 group-hover:text-rose-500 transition-colors">
          {title}
        </span>
        <span className="text-xs font-mono font-semibold text-rose-300 border border-rose-900/60 px-2.5 py-1 rounded bg-rose-950/40">
          {tag}
        </span>
      </a>

      <p className="text-neutral-400 leading-relaxed">{desc}</p>

      {win && (
        <span className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-rose-950/40 border border-rose-800/60 rounded-full text-xs font-semibold text-rose-300">
          🏆 {win}
        </span>
      )}
    </div>
  );
}

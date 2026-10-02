export function ProjectItem({
  title,
  link,
  desc,
  tag,
  win,
}: {
  title: string;
  link?: string;
  desc: string;
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
        <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900/50">
          {tag}
        </span>
      </a>

      <p className="text-neutral-400 leading-relaxed">{desc}</p>

      {win && (
        <span className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-rose-400">
          🏆 {win}
        </span>
      )}
    </div>
  );
}

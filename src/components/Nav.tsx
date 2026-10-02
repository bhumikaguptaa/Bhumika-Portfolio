"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 flex justify-center transition-colors ${
        scrolled ? "bg-[#121212]/80 backdrop-blur border-b border-neutral-900" : "bg-transparent"
      }`}
    >
      <div className="flex gap-8 px-6 py-4 text-sm text-neutral-400">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover:text-rose-500 transition-colors cursor-none"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

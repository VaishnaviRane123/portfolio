"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const commands = [
  { label: "Go to About", href: "#about" },
  { label: "Go to Experience", href: "#experience" },
  { label: "Go to Projects", href: "#projects" },
  { label: "Go to Skills", href: "#skills" },
  { label: "Go to Education", href: "#education" },
  { label: "Go to Certifications", href: "#certifications" },
  { label: "Go to Contact", href: "#contact" },
  { label: "Download Resume", href: "/resume/Vaishnavi_Rane_Resume.pdf" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const run = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-[#e5e5e5] px-3 py-2 text-xs text-[#666] transition hover:bg-[#f1f1ee] md:flex dark:border-[#262626] dark:hover:bg-[#1f1f1f]"
      >
        <Search size={12} />
        <span>Search</span>
        <kbd className="ml-2 rounded border border-[#ddd] px-1.5 py-0.5 text-[10px] dark:border-[#333]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/40 p-4 pt-24 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg border border-[#e5e5e5] bg-white shadow-2xl dark:border-[#262626] dark:bg-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections, projects, actions..."
              className="w-full border-b border-[#e5e5e5] bg-transparent px-5 py-4 text-sm outline-none dark:border-[#262626]"
            />

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="p-4 text-sm text-[#888]">No results</p>
              ) : (
                filtered.map((c) => (
                  <button
                    key={c.href}
                    onClick={() => run(c.href)}
                    className="w-full rounded px-4 py-3 text-left text-sm transition hover:bg-[#f1f1ee] dark:hover:bg-[#1f1f1f]"
                  >
                    {c.label}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

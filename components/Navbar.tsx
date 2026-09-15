"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Now", href: "/now" },      
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur no-print"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "color-mix(in srgb, var(--background) 95%, transparent)",
      }}
    >
      <div className="container-main flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: "var(--foreground)" }}
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition"
              style={{
                color: active === link.href ? "var(--foreground)" : "var(--muted)",
              }}
            >
              {link.name}
            </a>
          ))}

          <CommandPalette />
          <ThemeToggle />

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm transition"
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--foreground)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t px-5 py-5 md:hidden"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm"
                style={{ color: "var(--foreground)" }}
              >
                {link.name}
              </a>
            ))}

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-3 text-center text-sm"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

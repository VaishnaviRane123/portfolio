import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] py-8 no-print dark:border-[#262626]">
      <div className="container-main flex flex-col justify-between gap-4 text-xs text-[#666] md:flex-row md:items-center dark:text-[#a1a1a1]">
        <p className="font-medium uppercase tracking-wider text-[#171717] dark:text-white">
          {profile.name}
        </p>

        <p>Computer Engineering • Full Stack • AI</p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-[#171717] dark:hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-[#171717] dark:hover:text-white"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition hover:text-[#171717] dark:hover:text-white"
          >
            <Mail size={16} />
          </a>

          <span className="ml-2">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

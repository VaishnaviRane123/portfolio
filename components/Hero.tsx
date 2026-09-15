import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import AvailabilityBadge from "./AvailabilityBadge";

export default function Hero() {
  return (
    <section id="top" className="py-20 md:py-28">
      <div className="container-main">
        <AvailabilityBadge />

        <div className="grid items-end gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p
              className="mb-5 text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--muted)" }}
            >
              {profile.role}
            </p>

            <h1 className="serif text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.06em]">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>

            <div className="mt-8">
              <p className="text-xl font-medium md:text-2xl">
                {profile.headline}
              </p>
              <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
                {profile.focus.join(" • ")}
              </p>
            </div>

            <p
              className="mt-7 max-w-xl text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              {profile.summary}
            </p>

            <p
              className="mt-4 max-w-xl text-sm leading-7"
              style={{ color: "var(--muted)" }}
            >
              Currently building full-stack projects with Next.js and exploring
              AI-powered applications. Based in {profile.location.split(",")[0]},
              open to remote and on-site opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition"
                style={{
                  backgroundColor: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                View My Work
                <ArrowUpRight size={16} />
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition"
                style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
              >
                Download CV
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div
              className="aspect-[4/5] w-full max-w-[350px] overflow-hidden rounded-[2px] border transition-shadow duration-300 hover:shadow-xl"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--hover)",
              }}
            >
              <img
                src="/profile/profile.jpg"
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="mt-4 flex justify-between text-xs"
              style={{ color: "var(--muted)" }}
            >
              {/* ✅ FIXED LOCATION: Baramati */}
              <span>{profile.location}</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

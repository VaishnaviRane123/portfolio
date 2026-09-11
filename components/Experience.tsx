import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section section-border">
      <div className="container-main">
        <SectionHeading number="02" title="Experience" />

        <div>
          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${index}`}
              className="grid gap-5 border-t py-9 md:grid-cols-[120px_1fr]"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {experience.year}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{experience.role}</h3>

                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  {experience.company} · {experience.duration}
                  {experience.location && ` · ${experience.location}`}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.description.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-6"
                      style={{ color: "var(--muted)" }}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1 text-xs"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

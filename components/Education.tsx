import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section section-border">
      <div className="container-main">
        <SectionHeading number="05" title="Education" />

        {education.map((item) => (
          <div
            key={item.degree}
            className="grid gap-6 border-t py-9 md:grid-cols-[180px_1fr]"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {item.year}
            </p>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl font-semibold">{item.degree}</h3>
                {item.score && (
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item.score}
                  </span>
                )}
              </div>

              <p className="mt-2" style={{ color: "var(--muted)" }}>
                {item.institution}
              </p>

              <p
                className="mt-5 max-w-2xl text-sm leading-7"
                style={{ color: "var(--muted)" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section section-border">
      <div className="container-main">
        <SectionHeading number="04" title="Skills" />

        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#171717]">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-[#555]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

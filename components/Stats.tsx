import SectionHeading from "./SectionHeading";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="section section-border">
      <div className="container-main">
        <SectionHeading number="01" title="Snapshot" />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-[#e5e5e5] pt-6 dark:border-[#262626]">
              <p className="serif text-5xl font-medium md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-[#888]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

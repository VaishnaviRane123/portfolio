import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-border">
      <div className="container-main">
        <SectionHeading number="07" title="Testimonials" />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-[#dededb] bg-white p-7 dark:border-[#262626] dark:bg-[#141414]"
            >
              <p className="serif text-lg leading-8 text-[#333] dark:text-[#ddd]">
                “{t.quote}”
              </p>

              <div className="mt-6 border-t border-[#e5e5e5] pt-4 dark:border-[#262626]">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-[#888]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

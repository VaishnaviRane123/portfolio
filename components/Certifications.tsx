import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section section-border">
      <div className="container-main">
        <SectionHeading number="06" title="Certifications" />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#dededb] bg-white p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs text-[#888]">{certificate.year}</p>

              <h3 className="mt-5 font-semibold">{certificate.title}</h3>

              <p className="mt-2 text-sm text-[#666]">
                {certificate.organization}
              </p>

              <p className="mt-8 text-sm font-medium">View Certificate →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

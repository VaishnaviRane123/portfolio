import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section section-border">
      <div className="container-main">
        <SectionHeading number="01" title="Profile" />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-[#444]">{profile.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#888]">
                Education
              </p>
              <p className="mt-2 text-sm">B.E. Computer Engineering</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#888]">
                Location
              </p>
              <p className="mt-2 text-sm">{profile.location}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#888]">
                Focus
              </p>
              <p className="mt-2 text-sm">Full Stack + AI</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#888]">
                Status
              </p>
              <p className="mt-2 text-sm">Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

const achievements = [
  "Completed industry internship experience.",
  "Developed multiple full-stack academic and personal projects.",
  "Exploring AI-integrated software development.",
  "Participated in college sports and extracurricular activities.",
];

export default function Achievements() {
  return (
    <section id="achievements" className="section section-border">
      <div className="container-main">
        <SectionHeading number="07" title="Highlights" />

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item, index) => (
            <div key={item} className="border-t border-[#e5e5e5] py-5">
              <span className="mr-4 text-xs text-[#2563eb]">
                0{index + 1}
              </span>

              <span className="text-sm text-[#444]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

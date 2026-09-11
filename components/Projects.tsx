import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section section-border">
      <div className="container-main">
        <SectionHeading number="03" title="Projects" />

        {featured && (
          <div className="mb-10">
            <ProjectCard project={featured} />
          </div>
        )}

        <div className="grid gap-7 md:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

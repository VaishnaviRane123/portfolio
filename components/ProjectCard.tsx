import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        className="overflow-hidden border transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--card)",
        }}
      >
        <div
          className="aspect-[16/10] overflow-hidden"
          style={{ backgroundColor: "var(--hover)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-xs tracking-widest"
                style={{ color: "var(--muted)" }}
              >
                {project.number}
              </p>

              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--muted)" }}
              >
                {project.subtitle}
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1 text-xs"
                style={{ backgroundColor: "var(--hover)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

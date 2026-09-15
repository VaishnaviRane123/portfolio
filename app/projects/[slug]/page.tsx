import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen py-12">
      <div className="container-main">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#171717] dark:text-[#a1a1a1] dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="mt-16">
          <p className="text-xs tracking-[0.2em] text-[#2563eb] dark:text-[#60a5fa]">
            PROJECT {project.number}
          </p>

          <h1 className="serif mt-5 text-6xl font-medium md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl text-[#666] dark:text-[#a1a1a1]">
            {project.subtitle}
          </p>

          <div className="mt-10 overflow-hidden border border-[#ddd] bg-white dark:border-[#262626] dark:bg-[#141414]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_300px]">
            <div>
              <h2 className="serif text-3xl">Overview</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#555] dark:text-[#a1a1a1]">
                {project.description}
              </p>

              <div className="mt-14 grid gap-8 md:grid-cols-3">
                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "var(--muted)" }}
                  >
                    The Challenge
                  </p>
                  <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    Building a production-grade system that mirrors real-world requirements
                    while integrating modern AI capabilities and secure data handling.
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "var(--muted)" }}
                  >
                    The Approach
                  </p>
                  <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    Architected a modular full-stack solution with clean separation between
                    frontend, backend, and database layers. Prioritized type safety,
                    role-based access, and scalable data modeling.
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "var(--muted)" }}
                  >
                    The Outcome
                  </p>
                  <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                    A fully functional {project.title.toLowerCase()} with {project.features.length}+
                    features, deployed and production-ready. Demonstrates end-to-end
                    ownership from architecture to implementation.
                  </p>
                </div>
              </div>

              <h2 className="serif mt-14 text-3xl">Key Features</h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-[#555] dark:text-[#a1a1a1]"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <p className="text-xs uppercase tracking-widest text-[#888]">
                Technologies
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#ddd] px-3 py-2 text-xs dark:border-[#333]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-full bg-[#171717] px-5 py-3 text-sm text-white transition hover:bg-[#333] dark:bg-white dark:text-[#0a0a0a] dark:hover:bg-[#ddd]"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-full border border-[#ddd] px-5 py-3 text-sm transition hover:bg-[#f1f1ee] dark:border-[#333] dark:hover:bg-[#1f1f1f]"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

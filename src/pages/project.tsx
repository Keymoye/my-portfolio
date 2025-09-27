// src/pages/Projects.tsx
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A responsive front-end weather application showing real-time conditions. Helped me master state management and component-based design.",
      tech: ["React", "Tailwind CSS"],
      live: "https://weather-app-keymoye.vercel.app",
      github: "https://github.com/Keymoye/weather-app",
    },
    {
      title: "To-Do List App",
      description:
        "A full-stack task management tool that strengthened my understanding of React, Tailwind, and responsive UI patterns.",
      tech: ["React", "Tailwind CSS"],
      live: "https://todo-list-keymoye.vercel.app",
      github: "https://github.com/Keymoye/todo-list",
    },
    {
      title: "Portfolio Website",
      description:
        "My first project built entirely from scratch — a full React + Tailwind portfolio showcasing my design system, accessibility, and responsive layout skills.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      live: "https://keymoye-portfolio.vercel.app",
      github: "https://github.com/Keymoye/my-portfolio",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
        My Projects
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-foreground/5 border border-muted/30 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-semibold text-primary mb-3">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-foreground mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-primary text-background px-4 py-2 rounded-md hover:bg-accent transition-colors"
              >
                Live <FaExternalLinkAlt className="text-xs" />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm border border-muted text-foreground px-4 py-2 rounded-md hover:border-accent transition-colors"
              >
                GitHub <FaGithub className="text-base" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

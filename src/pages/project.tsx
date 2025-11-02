import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const headingAnim = useScrollAnimation({ threshold: 0.3 });

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
     {
      title: "E-Commerce Website",
      description:
        "(In Development Process)A modern e-commerce web app built with Next.js,Typescript, and Supabase — featuring seamless authentication, dynamic product listings, and a clean, responsive UI powered by Tailwind CSS and Framer Motion for smooth animations.",
      tech: ["Next", "TypeScript", "Tailwind CSS","Supabase","Zustand","RHF + Zod","Framer Motion"],
      live: "https://e-commerce-keystore.vercel.app",
      github: "https://github.com/Keymoye/e-commerce",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <motion.h1
        ref={headingAnim.ref as React.RefObject<HTMLHeadingElement>}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={headingAnim.isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={headingAnim.isVisible ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-foreground/5 border border-muted/30 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all"
          >
            <h2 className="text-2xl font-semibold text-primary mb-3">
              {project.title}
            </h2>

            <p className="text-foreground mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-primary text-background px-4 py-2 rounded-md hover:bg-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live <FaExternalLinkAlt className="text-xs" />
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm border border-muted text-foreground px-4 py-2 rounded-md hover:border-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub <FaGithub className="text-base" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

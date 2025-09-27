// src/pages/About.tsx
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql, SiPrisma, SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h1>

      {/* Description */}
      <section className="max-w-3xl text-center space-y-4">
        <p className="text-lg text-foreground">
          I'm <span className="text-accent font-medium">Maxwell Kimoi</span>, a passionate web developer from Nairobi, Kenya.
          I began my journey by learning the theory behind how web systems connect, and now I’m channeling that understanding
          into building real, responsive, and modern applications.
        </p>

        <p className="text-lg text-foreground">
          Although I’ve explored full-stack technologies, my current focus is on mastering
          <span className="text-accent font-semibold"> front-end development</span>.
          I’m deeply confident in my theoretical background — now I’m translating that into practical, real-world projects.
          This portfolio marks my first fully self-built project from scratch, a big step from my earlier guided tutorials.
        </p>

        <p className="text-lg text-foreground">
          I enjoy crafting clean interfaces, writing structured code, and creating experiences that feel intuitive.
          My long-term goal is to evolve into a well-rounded full-stack engineer while maintaining a strong eye
          for design, performance, and user experience.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-6 text-4xl text-foreground">
          <FaReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiTypescript title="TypeScript" />
          <SiTailwindcss title="Tailwind CSS" />
          <FaNodeJs title="Node.js" />
          <SiPrisma title="Prisma" />
          <SiPostgresql title="PostgreSQL" />
          <SiMongodb title="MongoDB" />
          <FaGitAlt title="Git / GitHub" />
        </div>
      </section>

      {/* Closing */}
      <section className="mt-12 max-w-2xl text-center text-accent">
        <p>
          Every line of code I write is part of my journey from theory to mastery — I’m learning, applying, and improving daily.
        </p>
      </section>
    </main>
  );
}

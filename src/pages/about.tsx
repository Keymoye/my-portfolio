import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql, SiPrisma, SiMongodb } from "react-icons/si";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const headingAnim = useScrollAnimation({ threshold: 0.3 });
  const section1Anim = useScrollAnimation({ threshold: 0.2 });
  const section2Anim = useScrollAnimation({ threshold: 0.2 });
  const skillsAnim = useScrollAnimation({ threshold: 0.2 });
  const closingAnim = useScrollAnimation({ threshold: 0.3 });

  const techIcons = [
    { Icon: FaReact, title: 'React' },
    { Icon: SiNextdotjs, title: 'Next.js' },
    { Icon: SiTypescript, title: 'TypeScript' },
    { Icon: SiTailwindcss, title: 'Tailwind CSS' },
    { Icon: FaNodeJs, title: 'Node.js' },
    { Icon: SiPrisma, title: 'Prisma' },
    { Icon: SiPostgresql, title: 'PostgreSQL' },
    { Icon: SiMongodb, title: 'MongoDB' },
    { Icon: FaGitAlt, title: 'Git / GitHub' },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 py-16">
      <motion.h1
        ref={headingAnim.ref as React.RefObject<HTMLHeadingElement>}
        className="text-4xl md:text-5xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={headingAnim.isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.section
        ref={section1Anim.ref as React.RefObject<HTMLElement>}
        className="max-w-3xl text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={section1Anim.isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg text-foreground">
          I'm <span className="text-accent font-medium">Maxwell Kimoi</span>, a passionate web developer from Nairobi, Kenya.
          I began my journey by learning the theory behind how web systems connect, and now I'm channeling that understanding
          into building real, responsive, and modern applications.
        </p>
      </motion.section>

      <motion.section
        ref={section2Anim.ref as React.RefObject<HTMLElement>}
        className="max-w-3xl text-center space-y-4 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={section2Anim.isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-lg text-foreground">
          Although I've explored full-stack technologies, my current focus is on mastering
          <span className="text-accent font-semibold"> front-end development</span>.
          I'm deeply confident in my theoretical background — now I'm translating that into practical, real-world projects.
          This portfolio marks my first fully self-built project from scratch, a big step from my earlier guided tutorials.
        </p>

        <p className="text-lg text-foreground">
          I enjoy crafting clean interfaces, writing structured code, and creating experiences that feel intuitive.
          My long-term goal is to evolve into a well-rounded full-stack engineer while maintaining a strong eye
          for design, performance, and user experience.
        </p>
      </motion.section>

      <motion.section
        ref={skillsAnim.ref as React.RefObject<HTMLElement>}
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={skillsAnim.isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-6 text-4xl text-foreground">
          {techIcons.map(({ Icon, title }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={skillsAnim.isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="cursor-pointer"
            >
              <Icon title={title} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        ref={closingAnim.ref as React.RefObject<HTMLElement>}
        className="mt-12 max-w-2xl text-center text-accent"
        initial={{ opacity: 0 }}
        animate={closingAnim.isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>
          Every line of code I write is part of my journey from theory to mastery — I'm learning, applying, and improving daily.
        </p>
      </motion.section>
    </main>
  );
}

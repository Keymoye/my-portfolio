import { motion } from "framer-motion";
import profileImg from "./assets/profile.webp";

const App = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:px-12 gap-10 bg-background text-foreground overflow-hidden">
      <motion.div
        className="flex-1 text-center md:text-left space-y-4 md:px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm Maxwell Kimoi
        </motion.h1>

        <motion.p
          className="text-lg text-muted mb-6 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Crafting intuitive interfaces and clean code — turning theory into real,
          scalable front-end experiences.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-medium text-foreground tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Front-end <span className="text-primary font-semibold"> || </span> Backend{" "}
          <span className="text-primary font-semibold">||</span> Fullstack Developer
        </motion.p>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.img
            src={profileImg}
            alt="Profile picture"
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default App;

import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-4">
      <motion.h1
        className="text-8xl font-bold text-primary mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-muted mb-6 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Sorry, the page you're looking for doesn't exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block bg-primary text-background px-6 py-3 rounded-lg hover:bg-accent transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}

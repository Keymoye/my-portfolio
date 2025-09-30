import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 bg-primary/20 hover:bg-primary/30 transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <HiMoon className="w-3 h-3 text-background" />
        ) : (
          <HiSun className="w-3 h-3 text-background" />
        )}
      </motion.div>
    </motion.button>
  );
}

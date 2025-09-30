import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.webp';
import ThemeToggle from './theme-toggle';
function NavBar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
          <motion.nav
            className="bg-foreground p-4 justify-between items-center hidden md:flex"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className='flex justify-center items-center space-x-2'>
              <Link to="/" className="flex items-center hover:bg-muted px-2 py-1 rounded transition-all">
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
              <h1 className="text-primary font-bold text-xl">Web Developer</h1>
            </div>
            <div className="flex items-center md:space-x-6 lg:space-x-8 text-base lg:text-lg font-medium text-background">
              <Link to="/project" className="hover:bg-accent px-3 py-2 rounded transition-all hover:scale-105">Project</Link>
              <Link to="/about" className="hover:bg-accent px-3 py-2 rounded transition-all hover:scale-105">About</Link>
              <Link to="/contact" className="hover:bg-accent px-3 py-2 rounded transition-all hover:scale-105">Contact</Link>
              <a href="/Keymoye_Resume.pdf" download="Keymoye_Resume.pdf" className="hover:bg-muted bg-primary px-3 py-2 rounded transition-all hover:scale-105">Resume</a>
              <ThemeToggle />
            </div>
          </motion.nav>
           {/* Mobile Navigation */}
          <motion.nav
            className="bg-foreground p-4 h-20 flex md:hidden justify-between items-center relative"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className='flex justify-center items-center space-x-1'>
              <Link to="/" className="flex items-center hover:bg-muted px-2 py-1 rounded transition-all">
                <img src={logo} alt="Logo" className="h-10 w-10" />
              </Link>
              <h2 className='text-primary font-bold text-lg'>Web Developer</h2>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="relative">
                <motion.button
                  aria-label="Toggle menu"
                  className="h-8 w-8 flex text-background items-center justify-center hover:bg-accent rounded"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  {isOpen ? <HiXMark /> : <HiBars3 />}
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="absolute right-0 top-12 w-48 bg-foreground text-background p-4 rounded shadow-lg flex flex-col space-y-2"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to="/project" className="hover:bg-accent px-3 py-2 rounded transition-all">Project</Link>
                      <Link to="/about" className="hover:bg-accent px-3 py-2 rounded transition-all">About</Link>
                      <Link to="/contact" className="hover:bg-accent px-3 py-2 rounded transition-all">Contact</Link>
                      <a href="/Keymoye_Resume.pdf" download="Keymoye_Resume.pdf" className="bg-primary hover:bg-muted px-3 py-2 rounded text-background transition-all">Resume</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.nav>
        </>
    )
}
export default NavBar;
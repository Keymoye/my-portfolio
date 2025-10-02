import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './theme-toggle';
import logo from "../assets/logo.webp";


interface NavBarProps {}

function NavBar ({}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
    return (
        <>
          <motion.nav
            className="bg-foreground p-4 justify-between items-center hidden md:flex "
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className='flex justify-center items-center space-x-2'>
              <Link to="/" className="flex items-center hover:bg-muted px-2 py-1 rounded transition-all">
                 <motion.div
                   className="h-10 w-10 rounded-full bg-primary flex items-center justify-center overflow-hidden"
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 0.6 }}
              >
                  <img
                    src={logo}
                    alt="Logo"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  </motion.div>
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
                <motion.div
                  className="h-10 w-10 rounded-full bg-primary flex items-center justify-center overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                 <img
                   src={logo}
                   alt="Logo"
                   loading="lazy"
                   className="w-full h-full object-cover"
                 />
                </motion.div>
              </Link>

              <h2 className='text-primary font-bold text-lg'>Web Developer</h2>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="relative" ref={menuRef}>
                <motion.button
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  className="h-10 w-10 flex text-background items-center justify-center hover:bg-accent rounded text-2xl"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  {isOpen ? <HiXMark /> : <HiBars3 />}
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id="mobile-menu"
                      role="navigation"
                      aria-label="Mobile navigation menu"
                      className="absolute right-0 top-14 w-52 bg-foreground text-background p-4 rounded-lg shadow-xl flex flex-col space-y-2 z-50 border border-muted"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <Link
                        to="/project"
                        className="hover:bg-accent px-3 py-2 rounded transition-all font-medium"
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        Project
                      </Link>
                      <Link
                        to="/about"
                        className="hover:bg-accent px-3 py-2 rounded transition-all font-medium"
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="hover:bg-accent px-3 py-2 rounded transition-all font-medium"
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        Contact
                      </Link>
                      <a
                        href="/Keymoye_Resume.pdf"
                        download="Keymoye_Resume.pdf"
                        className="bg-primary hover:bg-muted px-3 py-2 rounded text-background transition-all font-medium text-center"
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        Resume
                      </a>
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
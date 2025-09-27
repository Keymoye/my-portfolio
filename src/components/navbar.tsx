import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from '../assets/logo.webp';
function NavBar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
          <nav className="bg-foreground p-4 justify-between items-center hidden md:flex">
            <div className='flex justify-center items-center space-x-2'>
              <Link to="/" className="flex items-center hover:bg-muted px-2 py-1 rounded">
                <img src={logo} alt="Logo" className="h-10 w-10" />
              </Link>
              <h1 className="text-primary font-bold text-xl">Web Developer</h1>
            </div>
            <div className="md:space-x-6 lg:space-x-8 text-base lg:text-lg font-medium text-background">
              <Link to="/project" className="hover:bg-accent px-3 py-2 rounded">Project</Link>
              <Link to="/about" className="hover:bg-accent px-3 py-2 rounded">About</Link>
              <Link to="/contact" className="hover:bg-accent px-3 py-2 rounded">Contact</Link>
              <a href="/Keymoye_Resume.pdf" download="Keymoye_Resume.pdf" className="hover:bg-muted bg-primary px-3 py-2 rounded">Resume</a>
              
            </div>
          </nav>
           {/* Mobile Navigation */}
          <nav className="bg-foreground p-4 h-20 flex md:hidden justify-between items-center relative">
            <div className='flex justify-center items-center space-x-1'>
              <Link to="/" className="flex items-center hover:bg-muted px-2 py-1 rounded">
                <img src={logo} alt="Logo" className="h-10 w-10" />
              </Link>
              <h2 className='text-primary font-bold text-lg'>Web Developer</h2>
            </div>
            <div className="relative">
             <button
              aria-label="Toggle menu"
              className="h-8 w-8 flex text-background items-center justify-center hover:bg-accent"
              onClick={toggleMenu}
             >
               {isOpen ? <HiXMark /> : <HiBars3 />}
             </button>

              {isOpen && (
               <div className="absolute right-4 top-16 w-48 bg-foreground text-background p-4 rounded shadow-lg flex flex-col space-y-2">
                 <Link to="/project" className="hover:bg-accent px-3 py-2 rounded">Project</Link>
                 <Link to="/about" className="hover:bg-accent px-3 py-2 rounded">About</Link>
                 <Link to="/contact" className="hover:bg-accent px-3 py-2 rounded">Contact</Link>
                 <a href="/Keymoye_Resume.pdf" download="Keymoye_Resume.pdf" className="bg-primary hover:bg-muted px-3 py-2 rounded text-background">Resume</a>
               </div>
              )}

            </div>
          </nav>
        </>
    )
}
export default NavBar;
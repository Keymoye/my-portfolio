import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
function NavBar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
          <nav className="bg-foreground p-4 justify-between items-center hidden md:flex">
            <div className='flex justify-center items-center space-x-2'>
              <img src={logo} alt="Logo" className="h-10 w-10 text-primary"/>
              <h1 className="text-primary font-bold text-xl">Web Developer</h1>
            </div>
            <div className="md:space-x-6 lg:space-x-8 text-base lg:text-lg font-medium text-background">
              <Link to="/" className="hover:bg-secondary px-3 py-2 rounded">Home</Link>
              <Link to="/about" className="hover:bg-secondary px-3 py-2 rounded">About</Link>
              <Link to="/contact" className="hover:bg-secondary px-3 py-2 rounded">Contact</Link>
              <Link to="/resume" className="hover:bg-accent bg-primary px-3 py-2 rounded">Resume</Link>
              
            </div>
          </nav>
           {/* Mobile Navigation */}
          <nav className="bg-foreground p-4 h-20 flex md:hidden justify-between items-center relative">
            <div className='flex justify-center items-center space-x-1'>
              <img src={logo} alt="Logo" className="h-10 w-10"/>
              <h2 className='text-primary font-bold text-lg'>Web Developer</h2>
            </div>
            <div className="relative">
             <button
              aria-label="Toggle menu"
              className="h-8 w-8 flex text-background items-center justify-center hover:bg-accent"
              onClick={toggleMenu}
             >
               {isOpen ? <X /> : <Menu />}
             </button>

              {isOpen && (
               <div className="absolute right-4 top-16 w-48 bg-foreground text-background p-4 rounded shadow-lg flex flex-col space-y-2">
                 <Link to="/" className="hover:bg-secondary px-3 py-2 rounded">Home</Link>
                 <Link to="/about" className="hover:bg-secondary px-3 py-2 rounded">About</Link>
                 <Link to="/contact" className="hover:bg-secondary px-3 py-2 rounded">Contact</Link>
                 <Link to="/resume" className="bg-primary hover:bg-accent px-3 py-2 rounded text-background">Resume</Link>
               </div>
              )}

            </div>
          </nav>
        </>
    )
}
export default NavBar;
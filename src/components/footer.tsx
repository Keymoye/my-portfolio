import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 mt-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Intro */}
        <div>
          <h2 className="text-xl font-bold text-secondary">Maxwell</h2>
          <p className="mt-2 text-sm text-muted font-medium">
            Full-stack developer crafting modern, responsive, and scalable web apps.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-secondary">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/project" className="hover:text-accent">Project</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><a href="/Keymoye_Resume.pdf" download="Keymoye_Resume.pdf" className="hover:text-muted">Resume</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-secondary">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="h-4 w-4" />
              <a href="mailto:bowenmaxwell9@gmail.com" className="hover:text-accent">
                bowenmaxwell9@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Keymoye" target="_blank"  
            aria-label="Visit Maxwell Kimoi's GitHub profile" rel="noopener noreferrer" className="hover:text-accent">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/keymoye-ting-4965b934a" target="_blank" 
            aria-label="Visit Maxwell Kimoi's LinkedIn profile" rel="noopener noreferrer" className="hover:text-accent">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-secondary pt-4 text-center text-xs text-secondary">
        &copy; {new Date().getFullYear()} Maxwell. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer
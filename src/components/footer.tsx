import { Github, Linkedin, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 mt-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Intro */}
        <div>
          <h2 className="text-xl font-bold text-primary">Maxwell</h2>
          <p className="mt-2 text-sm text-muted">
            Full-stack developer crafting modern, responsive, and scalable web apps.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            <li><a href="/hire" className="hover:text-primary">Hire Me</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:youremail@example.com" className="hover:text-primary">
                youremail@example.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-muted pt-4 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Maxwell. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer
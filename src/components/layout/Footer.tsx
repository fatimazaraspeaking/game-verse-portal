
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-game py-6 mt-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text">
                <span className="text-2xl font-bold font-heading text-transparent">Game<span className="font-extrabold">Verse</span></span>
              </div>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              The ultimate HTML5 gaming destination with thousands of free games to play instantly.
            </p>
          </div>
          <div>
            <h4 className="text-base font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/action" className="hover:text-primary transition-colors">Action</Link></li>
              <li><Link to="/category/adventure" className="hover:text-primary transition-colors">Adventure</Link></li>
              <li><Link to="/category/puzzle" className="hover:text-primary transition-colors">Puzzle</Link></li>
              <li><Link to="/category/racing" className="hover:text-primary transition-colors">Racing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-medium mb-4">For Developers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/submit-game" className="hover:text-primary transition-colors">Submit a Game</Link></li>
              <li><Link to="/developer-docs" className="hover:text-primary transition-colors">Developer Documentation</Link></li>
              <li><Link to="/api" className="hover:text-primary transition-colors">API Access</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GameVerse. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

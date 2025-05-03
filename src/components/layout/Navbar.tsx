
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-game/95 backdrop-blur supports-[backdrop-filter]:bg-game/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-primary to-accent bg-clip-text">
            <span className="text-2xl font-bold font-heading text-transparent">Game<span className="font-extrabold">Verse</span></span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/new" className="text-sm font-medium hover:text-primary transition-colors">
            New Games
          </Link>
          <Link to="/trending" className="text-sm font-medium hover:text-primary transition-colors">
            Trending
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search games</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

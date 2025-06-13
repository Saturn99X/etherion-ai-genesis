
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-4 sm:px-6 md:px-10 lg:px-40 py-4 sm:py-6 border-b border-etherion-border">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-etherion-blue rounded"></div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Etherion</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link to="/" className="text-etherion-text hover:text-white transition-colors text-sm lg:text-base">
            Home
          </Link>
          <Link to="/about" className="text-etherion-text hover:text-white transition-colors text-sm lg:text-base">
            About
          </Link>
          <Link to="/blog" className="text-etherion-text hover:text-white transition-colors text-sm lg:text-base">
            Blog
          </Link>
          <Link to="/get-started">
            <Button size="sm" className="bg-etherion-blue hover:bg-blue-600 text-white text-sm">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-etherion-border">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-etherion-text hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-etherion-text hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-etherion-text hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full bg-etherion-blue hover:bg-blue-600 text-white mt-2">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

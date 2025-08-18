
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, go to home page first then scroll
      window.location.href = '/#services';
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, go to home page first then scroll
      window.location.href = '/#footer';
    }
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-etherion-border px-4 sm:px-6 md:px-10 py-3">
      <Link to="/" className="flex items-center gap-4 text-white">
        <div className="size-10">
          <img 
            src="/lovable-uploads/f077e4c0-43fd-47b9-a76a-24b52376a2f4.png" 
            alt="Etherion Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Etherion</h2>
      </Link>
      
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/blog">Blog</Link>
        </div>
      </div>
      <div className="md:hidden">
        <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-800 md:hidden p-4 border-b border-etherion-border">
          <nav className="flex flex-col gap-4">
            <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

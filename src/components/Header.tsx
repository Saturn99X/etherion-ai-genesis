
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
        <div className="size-8">
          <img 
            src="/lovable-uploads/0bfe7ecb-cc02-4a55-ab15-adb14a2c6263.png" 
            alt="Etherion Logo" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Etherion</h2>
      </Link>
      
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/">Home</Link>
          <button 
            className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" 
            onClick={handleServicesClick}
          >
            Services
          </button>
          <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/blog">Blog</Link>
          <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/about">About Us</Link>
          <button 
            className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" 
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/get-started"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-etherion-darkBlue border border-etherion-border text-white text-sm font-medium leading-normal tracking-[0.015em] hover:bg-etherion-blue transition-colors"
          >
            <span className="truncate">Get Started</span>
          </Link>
          <Link
            to="/join-the-revolution"
            className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-etherion-blue text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors"
          >
            <span className="truncate">Join Revolution</span>
          </Link>
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
            <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <button
              className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors text-left"
              onClick={(e) => { handleServicesClick(e); setIsMobileMenuOpen(false); }}
            >
              Services
            </button>
            <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <button
              className="text-white text-sm font-medium leading-normal hover:text-etherion-blue transition-colors text-left"
              onClick={(e) => { handleContactClick(e); setIsMobileMenuOpen(false); }}
            >
              Contact
            </button>
            <div className="flex flex-col gap-2 mt-2">
              <Link
                to="/get-started"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-etherion-darkBlue border border-etherion-border text-white text-sm font-medium leading-normal tracking-[0.015em]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="truncate">Get Started</span>
              </Link>
              <Link
                to="/join-the-revolution"
                className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-etherion-blue text-white text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="truncate">Join Revolution</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

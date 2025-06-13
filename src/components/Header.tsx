
import { Link } from "react-router-dom";

const Header = () => {
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
        <Link
          to="/get-started"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-etherion-blue text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Get Started</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

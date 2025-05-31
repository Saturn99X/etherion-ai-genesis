
import { Link } from "react-router-dom";
import { ThemeToggleButton } from "./ThemeToggleButton"; // Import the toggle button

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-etherion-border px-4 sm:px-6 md:px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-8">
          <img 
            src="/lovable-uploads/1a13ce9e-c60e-4209-b8a6-0dd938528a33.png" 
            alt="Etherion Logo" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Etherion</h2>
      </div>
      
      <div className="hidden md:flex flex-1 justify-end items-center gap-8"> {/* Added items-center */}
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal" to="#">Services</Link>
          <Link className="text-white text-sm font-medium leading-normal" to="#">About Us</Link>
          <Link className="text-white text-sm font-medium leading-normal" to="#">Contact</Link>
        </div>
        <div className="flex items-center gap-2"> {/* Wrapper div for button and toggle */}
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-etherion-blue text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Get Started</span>
          </button>
          <ThemeToggleButton /> {/* Add the theme toggle button */}
        </div>
      </div>
      <div className="md:hidden flex items-center gap-2"> {/* Added flex items-center gap-2 for mobile */}
        <ThemeToggleButton /> {/* Add the theme toggle button for mobile view */}
        <button className="text-white">
          {/* Hamburger icon SVG */}
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

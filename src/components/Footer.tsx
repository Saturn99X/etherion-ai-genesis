
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-etherion-border bg-etherion-darkBlue/50">
      <div className="px-4 sm:px-6 md:px-10 lg:px-40 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-etherion-blue rounded"></div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Etherion</span>
            </div>
            <p className="text-etherion-text text-sm sm:text-base mb-4 sm:mb-6">
              AI Automation Agency building custom solutions to automate your business processes.
            </p>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">Company</h3>
            <div className="space-y-1 sm:space-y-2">
              <Link to="/about" className="block text-etherion-text hover:text-white transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link to="/blog" className="block text-etherion-text hover:text-white transition-colors text-sm sm:text-base">
                Blog
              </Link>
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">Services</h3>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-etherion-text text-sm sm:text-base">AI Chatbots</p>
              <p className="text-etherion-text text-sm sm:text-base">Process Automation</p>
              <p className="text-etherion-text text-sm sm:text-base">Data Analytics</p>
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">Contact</h3>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-etherion-text text-sm sm:text-base">sales@etherionai.com</p>
              <Link to="/get-started" className="block text-etherion-blue hover:text-blue-400 transition-colors text-sm sm:text-base">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-etherion-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-etherion-text text-xs sm:text-sm text-center sm:text-left">
              © 2025 Etherion. All rights reserved.
            </p>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-etherion-text hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-etherion-text hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-etherion-text hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

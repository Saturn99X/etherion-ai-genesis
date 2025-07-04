
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 sm:px-6 md:px-10 @container">
          
          <div className="flex justify-center items-center gap-8">
            <a href="https://web.facebook.com/profile.php?id=61575994394450" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              {/* Facebook Icon SVG */}
              <div className="text-etherion-text hover:text-etherion-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/company/107378760/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              {/* LinkedIn Icon SVG */}
              <div className="text-etherion-text hover:text-etherion-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                  ></path>
                </svg>
              </div>
            </a>
            
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              {/* Instagram Icon SVG */}
              <div className="text-etherion-text hover:text-etherion-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-2 sm:px-5 gap-4 md:gap-0 text-center md:text-left">
            <a href="mailto:contact@etherionai.com" className="text-etherion-text text-sm sm:text-base font-normal leading-normal hover:text-etherion-blue transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              contact@etherionai.com
            </a>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-etherion-text text-sm sm:text-base font-normal leading-normal">
              <span>© {new Date().getFullYear()} Etherion. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <Link to="/privacy-policy" className="hover:text-etherion-blue transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

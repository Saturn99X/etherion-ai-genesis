
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-etherion-darkBlue border-t border-etherion-border py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Etherion</h3>
            <p className="text-etherion-text text-sm leading-relaxed">
              Transforming businesses through intelligent automation and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-etherion-blue rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-md font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-etherion-text hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/blog" className="text-etherion-text hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="/get-started" className="text-etherion-text hover:text-white transition-colors text-sm">Get Started</a></li>
              <li><a href="/detailed-consultation" className="text-etherion-text hover:text-white transition-colors text-sm">Consultation</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white text-md font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-etherion-text text-sm">AI Integration</span></li>
              <li><span className="text-etherion-text text-sm">Process Automation</span></li>
              <li><span className="text-etherion-text text-sm">Business Intelligence</span></li>
              <li><span className="text-etherion-text text-sm">Custom Solutions</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-md font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-etherion-blue" />
                <span className="text-etherion-text text-sm">hello@etherion.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-etherion-blue" />
                <span className="text-etherion-text text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-etherion-blue" />
                <span className="text-etherion-text text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-etherion-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-etherion-text text-sm">
              © 2025 Etherion. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-etherion-text hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-etherion-text hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

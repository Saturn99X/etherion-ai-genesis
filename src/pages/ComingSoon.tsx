
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, Facebook, Linkedin, Mail } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-etherion-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-etherion-blue/20 rounded-full mb-6">
            <Clock className="w-8 h-8 text-etherion-blue" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Will Be Ready Soon
          </h1>
          <p className="text-etherion-text text-lg leading-relaxed">
            We're working hard to bring you something amazing. This page will be available shortly.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="w-full bg-etherion-border rounded-full h-2">
            <div className="bg-etherion-blue h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>
          
          {/* Big Email Button */}
          <a 
            href="mailto:contact@etherionai.com"
            className="flex items-center justify-center gap-3 w-full bg-etherion-blue hover:bg-etherion-blue/80 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
          
          {/* Social Media Buttons */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/company/107378760/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-etherion-blue/20 hover:bg-etherion-blue/30 text-etherion-blue hover:text-white rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://web.facebook.com/profile.php?id=61575994394450" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-etherion-blue/20 hover:bg-etherion-blue/30 text-etherion-blue hover:text-white rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-etherion-blue hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

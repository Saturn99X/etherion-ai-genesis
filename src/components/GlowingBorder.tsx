
import { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

const GlowingBorder = ({ children, className = "" }: GlowingBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border beam */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-etherion-blue via-purple-500 to-etherion-blue rounded-lg opacity-30 group-hover:opacity-50 blur-sm"></div>
      <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
        <div className="absolute inset-0 rounded-lg opacity-40 animate-border-beam" 
             style={{
               background: 'conic-gradient(from 0deg, transparent, transparent, rgba(0, 39, 193, 0.8), transparent, transparent)'
             }}>
        </div>
      </div>
      {/* Content container */}
      <div className="relative bg-etherion-darkBlue rounded-lg border border-etherion-border">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;

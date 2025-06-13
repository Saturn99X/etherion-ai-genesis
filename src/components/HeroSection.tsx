
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-40 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Zap className="text-etherion-blue" size={24} />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            AI Automation Agency
          </h1>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-etherion-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4 sm:px-0">
          We build custom AI solutions to automate your business processes, increase efficiency, and reduce costs. 
          Transform your operations with cutting-edge artificial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4 sm:px-0">
          <Link to="/get-started">
            <Button size="lg" className="w-full sm:w-auto bg-etherion-blue hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-etherion-blue text-etherion-blue hover:bg-etherion-blue hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

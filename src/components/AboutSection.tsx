
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">About Etherion</h2>
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          We're passionate about helping businesses unlock their potential through intelligent automation and AI solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
        <div className="flex flex-col gap-3 sm:gap-4 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 rounded-2xl shadow-lg">
          <Target className="text-etherion-blue" size={32} />
          <h3 className="text-white text-lg sm:text-xl font-bold">Our Mission</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            To democratize AI and automation for businesses of all sizes, making cutting-edge technology accessible and practical for everyday operations.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 rounded-2xl shadow-lg">
          <Lightbulb className="text-etherion-blue" size={32} />
          <h3 className="text-white text-lg sm:text-xl font-bold">Our Vision</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A world where every business can focus on what they do best while AI handles the repetitive tasks, driving innovation and growth.
          </p>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto">
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">What Sets Us Apart</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6">
            <Users className="text-etherion-blue mx-auto mb-3 sm:mb-4" size={40} />
            <h4 className="text-white text-md sm:text-lg font-semibold mb-2">Human-Centered Approach</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">We believe AI should enhance human capabilities, not replace them.</p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <Award className="text-etherion-blue mx-auto mb-3 sm:mb-4" size={40} />
            <h4 className="text-white text-md sm:text-lg font-semibold mb-2">Proven Results</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Our solutions have helped businesses save countless hours and increase efficiency.</p>
          </div>
          <div className="text-center p-4 sm:p-6 lg:col-span-1 sm:col-span-2"> {/* Ensure it centers on tablet when only 1 item would be on the last row */}
            <Target className="text-etherion-blue mx-auto mb-3 sm:mb-4" size={40} />
            <h4 className="text-white text-md sm:text-lg font-semibold mb-2">Tailored Solutions</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Every business is unique, and our solutions are crafted to fit your specific needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

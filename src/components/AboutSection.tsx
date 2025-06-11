
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-4">About Etherion</h2>
        <p className="text-etherion-text text-lg max-w-2xl mx-auto">
          We're passionate about helping businesses unlock their potential through intelligent automation and AI solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col gap-4 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 rounded-2xl">
          <Target className="text-etherion-blue" size={32} />
          <h3 className="text-white text-xl font-bold">Our Mission</h3>
          <p className="text-etherion-text">
            To democratize AI and automation for businesses of all sizes, making cutting-edge technology accessible and practical for everyday operations.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 rounded-2xl">
          <Lightbulb className="text-etherion-blue" size={32} />
          <h3 className="text-white text-xl font-bold">Our Vision</h3>
          <p className="text-etherion-text">
            A world where every business can focus on what they do best while AI handles the repetitive tasks, driving innovation and growth.
          </p>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-white text-2xl font-bold mb-8">What Sets Us Apart</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Users className="text-etherion-blue mx-auto mb-4" size={40} />
            <h4 className="text-white font-semibold mb-2">Human-Centered Approach</h4>
            <p className="text-etherion-text text-sm">We believe AI should enhance human capabilities, not replace them.</p>
          </div>
          <div className="text-center">
            <Award className="text-etherion-blue mx-auto mb-4" size={40} />
            <h4 className="text-white font-semibold mb-2">Proven Results</h4>
            <p className="text-etherion-text text-sm">Our solutions have helped businesses save countless hours and increase efficiency.</p>
          </div>
          <div className="text-center">
            <Target className="text-etherion-blue mx-auto mb-4" size={40} />
            <h4 className="text-white font-semibold mb-2">Tailored Solutions</h4>
            <p className="text-etherion-text text-sm">Every business is unique, and our solutions are crafted to fit your specific needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

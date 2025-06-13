
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-40 py-12 sm:py-16 md:py-20">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          About Etherion
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-etherion-text max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
          We are a cutting-edge AI automation agency dedicated to transforming businesses through intelligent solutions. 
          Our mission is to make advanced AI technology accessible and practical for companies of all sizes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 hover:border-etherion-blue transition-all duration-300">
          <CardContent className="p-4 sm:p-6 text-center">
            <Users className="text-etherion-blue mx-auto mb-3 sm:mb-4" size={32} />
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Expert Team</h3>
            <p className="text-etherion-text text-sm sm:text-base">
              Our team consists of experienced AI engineers, data scientists, and automation specialists.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 hover:border-etherion-blue transition-all duration-300">
          <CardContent className="p-4 sm:p-6 text-center">
            <Target className="text-etherion-blue mx-auto mb-3 sm:mb-4" size={32} />
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Proven Results</h3>
            <p className="text-etherion-text text-sm sm:text-base">
              We've helped businesses reduce costs by 40% and increase efficiency by 60% through AI automation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 hover:border-etherion-blue transition-all duration-300">
          <CardContent className="p-4 sm:p-6 text-center">
            <Lightbulb className="text-etherion-blue mx-auto mb-3 sm:mb-4" size={32} />
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Innovation Focus</h3>
            <p className="text-etherion-text text-sm sm:text-base">
              We stay at the forefront of AI technology to deliver cutting-edge solutions for your business.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-600/40 rounded-xl p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Why Choose Etherion?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
            <div>
              <h4 className="text-etherion-blue font-semibold mb-2 text-sm sm:text-base">Tailored Solutions</h4>
              <p className="text-etherion-text text-sm sm:text-base mb-4">
                Every business is unique. We create custom AI solutions that fit your specific needs and goals.
              </p>
              <h4 className="text-etherion-blue font-semibold mb-2 text-sm sm:text-base">Ongoing Support</h4>
              <p className="text-etherion-text text-sm sm:text-base">
                We provide continuous support and optimization to ensure your AI systems evolve with your business.
              </p>
            </div>
            <div>
              <h4 className="text-etherion-blue font-semibold mb-2 text-sm sm:text-base">Rapid Implementation</h4>
              <p className="text-etherion-text text-sm sm:text-base mb-4">
                Our agile approach ensures quick deployment and immediate value from your AI investments.
              </p>
              <h4 className="text-etherion-blue font-semibold mb-2 text-sm sm:text-base">ROI Focused</h4>
              <p className="text-etherion-text text-sm sm:text-base">
                We measure success by your return on investment and tangible business improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

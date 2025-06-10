
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                  About Etherion
                </h1>
                <p className="text-etherion-text text-lg font-normal leading-normal max-w-[720px] mx-auto">
                  We're passionate about helping businesses unlock their potential through intelligent automation and AI solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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

              <div className="flex flex-col gap-6 mt-8">
                <h2 className="text-white text-2xl font-bold text-center">What Sets Us Apart</h2>
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

              <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-600/40 rounded-2xl p-8 mt-8 text-center">
                <h2 className="text-white text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-etherion-text mb-6">
                  Let's discuss how AI automation can streamline your operations and boost your productivity.
                </p>
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center px-6 py-3 bg-etherion-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;

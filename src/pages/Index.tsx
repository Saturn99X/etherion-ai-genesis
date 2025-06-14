
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BlogGlimpse from "../components/BlogGlimpse";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection"; // Ensure this import is present if used
import CTASection from "../components/CTASection";
import MouseGlow from "../components/MouseGlow";
import VSLPlayer from "../components/VSLPlayer"; // Import the new component

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <VSLPlayer src="/videos/VSL_1.mp4" title="Our Video Sales Letter" /> {/* Add the VSLPlayer here */}
            <BlogGlimpse />
            <AboutSection />
            <ServicesSection />
            {/* <CaseStudiesSection /> You had this commented out in the original plan, I'll keep it commented unless told otherwise */}
            <CTASection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

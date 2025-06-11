
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BlogGlimpse from "../components/BlogGlimpse";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CTASection from "../components/CTASection";
import MouseGlow from "../components/MouseGlow";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <BlogGlimpse />
            <AboutSection />
            <ServicesSection />
            <CTASection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

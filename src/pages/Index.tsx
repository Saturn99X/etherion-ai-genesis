
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CTASection from "../components/CTASection";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <ServicesSection />
            <CaseStudiesSection />
            <CTASection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

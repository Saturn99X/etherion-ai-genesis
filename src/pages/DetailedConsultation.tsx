
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import GetStartedForm from '../components/GetStartedForm';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DetailedConsultation = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="py-8">
              <Link 
                to="/get-started" 
                className="inline-flex items-center gap-2 text-etherion-text hover:text-white transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Get Started
              </Link>
              <div className="text-center mb-8">
                <h1 className="text-white text-3xl font-bold mb-4">
                  Detailed Consultation Form
                </h1>
                <p className="text-etherion-text">
                  Help us understand your business better so we can provide the most relevant automation solutions.
                </p>
              </div>
              <GetStartedForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailedConsultation;

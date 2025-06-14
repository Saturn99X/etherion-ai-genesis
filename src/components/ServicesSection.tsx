
import { Bot, Settings, ChartLine, Rocket, Users } from "lucide-react";
import GlowingBorder from "./GlowingBorder";

const ServicesSection = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Transform your business operations with intelligent automation. We streamline repetitive tasks, optimize workflows, and create custom solutions that adapt to your unique processes. Our AI-powered automation reduces human error, increases efficiency, and allows your team to focus on high-value work.",
      icon: Bot
    },
    {
      title: "Custom AI Development",
      description: "Tailor-made AI solutions that perfectly fit your business needs. Our team of AI experts develops custom algorithms, machine learning models, and intelligent systems that solve your specific challenges. From natural language processing to computer vision, we create solutions that drive real business value.",
      icon: Settings
    },
    {
      title: "Performance Optimization",
      description: "Maximize the potential of your AI infrastructure. We analyze, optimize, and scale your existing AI systems for peak performance. Our optimization strategies include resource allocation, model fine-tuning, and infrastructure improvements that ensure your AI solutions deliver consistent, high-quality results.",
      icon: ChartLine
    },
    {
      title: "Productivity Enhancement",
      description: "Elevate your team's capabilities with cutting-edge AI tools. We provide intelligent automation solutions that augment human capabilities, streamline workflows, and accelerate decision-making processes. Our productivity enhancements focus on reducing manual work while maintaining quality and accuracy.",
      icon: Rocket
    },
    {
      title: "Clientele Streamline Handling",
      description: "Transform customer interactions with intelligent automation. We create AI-powered solutions for customer support, lead management, and relationship building. Our systems handle routine inquiries, provide personalized recommendations, and ensure consistent customer experiences across all channels.",
      icon: Users
    }
  ];

  return (
    <div id="services" className="py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 @container">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h1
            className="text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black sm:text-4xl lg:text-5xl @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto"
          >
            Our Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-[720px] mx-auto">
            We offer a range of AI automation services to help businesses of all sizes streamline their operations and achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto py-8 w-full">
          {services.map((service, index) => (
            <GlowingBorder key={index} className={`rounded-2xl w-full md:w-4/5 ${index % 2 === 0 ? 'md:justify-self-start' : 'md:justify-self-end'}`}>
              <div className="flex flex-1 gap-4 p-6 sm:p-8 flex-col bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 rounded-2xl shadow-xl h-full">
                <div className="text-etherion-blue"> {/* Changed icon color for better contrast/branding */}
                  <service.icon size={32} /> {/* Slightly increased icon size */}
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-lg sm:text-xl font-bold leading-tight">{service.title}</h2>
                  <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">{service.description}</p> {/* Improved text color for readability */}
                </div>
              </div>
            </GlowingBorder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

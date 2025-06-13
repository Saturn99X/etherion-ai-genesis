
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
    <div id="services">
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1
            className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Our Services
          </h1>
          <p className="text-white text-base font-normal leading-normal max-w-[720px]">
            We offer a range of AI automation services to help businesses of all sizes streamline their operations and achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto py-8">
          {services.map((service, index) => (
            <GlowingBorder key={index} className={`rounded-2xl w-full md:w-4/5 ${index % 2 === 0 ? 'md:justify-self-start' : 'md:justify-self-end'}`}>
              <div className="flex flex-1 gap-4 p-6 flex-col bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 rounded-2xl shadow-xl h-full">
                <div className="text-white">
                  <service.icon size={28} /> {/* Increased icon size slightly */}
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-lg font-bold leading-tight">{service.title}</h2> {/* Increased title size */}
                  <p className="text-etherion-text text-sm font-normal leading-normal">{service.description}</p>
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

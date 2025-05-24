import { Bot, Settings, ChartLine } from "lucide-react";
import GlowingBorder from "./GlowingBorder";

const ServicesSection = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to free up your team's time and resources.",
      icon: Bot
    },
    {
      title: "Custom AI Development",
      description: "Develop custom AI solutions tailored to your specific business needs and challenges.",
      icon: Settings
    },
    {
      title: "Performance Optimization",
      description: "Optimize your existing AI systems for maximum performance and efficiency.",
      icon: ChartLine
    }
  ];

  return (
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
  );
};

export default ServicesSection;

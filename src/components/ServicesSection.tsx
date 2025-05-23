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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <GlowingBorder key={index}>
            <div className="flex flex-1 gap-3 border border-etherion-border p-4 flex-col">
              <div className="text-white">
                <service.icon size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">{service.title}</h2>
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

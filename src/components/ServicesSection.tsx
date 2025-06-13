
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, BarChart3, MessageSquare } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="text-etherion-blue" size={32} />,
      title: "AI Chatbots",
      description: "Intelligent customer service automation that handles inquiries 24/7 and improves customer satisfaction."
    },
    {
      icon: <Workflow className="text-etherion-blue" size={32} />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to save time and reduce human error in your operations."
    },
    {
      icon: <BarChart3 className="text-etherion-blue" size={32} />,
      title: "Data Analytics",
      description: "AI-powered insights from your business data to make informed decisions and predict trends."
    },
    {
      icon: <MessageSquare className="text-etherion-blue" size={32} />,
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence solutions designed specifically for your unique business needs."
    }
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-40 py-12 sm:py-16 md:py-20">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-etherion-text max-w-2xl mx-auto px-4 sm:px-0">
          We offer comprehensive AI automation solutions to transform your business operations
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 hover:border-etherion-blue transition-all duration-300 group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <CardTitle className="text-white text-lg sm:text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-etherion-text text-sm sm:text-base text-center leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Import all the agent illustrations
import heroNetwork from "@/assets/business-leaders-scaled.jpg";
import financialAnalyst from "@/assets/financial-analyst.png";
import ecommerceStrategist from "@/assets/ecommerce-strategist.png";
import threadsAgent from "@/assets/threads-agent.png";
import imagenAgent from "@/assets/imagen-agent.png";
import clientDiscovery from "@/assets/client-discovery.png";
import competitorSpy from "@/assets/competitor-spy.png";
import masterCopywriter from "@/assets/master-copywriter.png";
import emailCampaignManager from "@/assets/email-campaign-manager.png";
import seoBlogSuite from "@/assets/seo-blog-suite.png";
import socialMediaSuite from "@/assets/social-media-suite.png";

const JoinTheRevolution = () => {
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-waitlist-email", {
        body: { email, newsletter },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Welcome to the revolution! Check your email for confirmation.");
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const agents = [
    {
      title: "The Financial Analyst Team",
      headline: "Never Fly Blind Again.",
      description: "Hand your invoices, receipts, and financial documents to our Analyst Team. It doesn't just extract data—it finds insights, forecasts trends, and builds the reports you need to make critical business decisions, instantly.",
      image: financialAnalyst,
    },
    {
      title: "The E-commerce Strategist Team",
      headline: "Your 24/7 Growth Partner.",
      description: "Connect your Shopify store and let our E-commerce Team handle the rest. From drafting empathetic customer support responses based on live order data to analyzing product performance, it's the automated team you've always needed.",
      image: ecommerceStrategist,
    },
    {
      title: "The Threads Creation Agents Team",
      headline: "Dominate the Conversation.",
      description: "Go beyond simple posts. Our Threads Creation Team crafts entire multi-post narratives for platforms like X and LinkedIn. It understands context, creates engaging hooks, and builds conversations that capture attention.",
      image: threadsAgent,
    },
    {
      title: "The Imagen Agent Team",
      headline: "Create the Unseen.",
      description: "Need the perfect image for your blog post or social media campaign? The Imagen Team doesn't just find photos—it generates stunning, brand-aligned visuals from a simple description. Your vision, instantly realized.",
      image: imagenAgent,
    },
    {
      title: "The Client Discovery Agent Team",
      headline: "Find Your Next Customer.",
      description: "Define your ideal client, and our Discovery Team will do the work. It scours the web to identify potential leads, understands their needs, and provides you with the intelligence to make the perfect outreach.",
      image: clientDiscovery,
    },
    {
      title: "The Competitor Spying Agent Team",
      headline: "Know Their Next Move.",
      description: "Stay ahead of the curve. Our Competitor Spying Team monitors your competitors' digital footprint in real-time. It analyzes their marketing campaigns, product launches, and social media buzz, giving you the strategic edge.",
      image: competitorSpy,
    },
    {
      title: "The Master Copywriter Team",
      headline: "Words That Convert.",
      description: "Feed it a simple idea, and the Master Copywriter Team generates a suite of creative concepts, drafts compelling ad copy, and refines every word to align perfectly with your brand's unique voice. It's your in-house creative director.",
      image: masterCopywriter,
    },
    {
      title: "The Email Campaign Manager Team",
      headline: "Automate Your Outreach.",
      description: "Design entire multi-step email campaigns with a single goal. From welcome series to re-engagement flows, this team strategizes the sequence, drafts the body copy, generates the subject lines, and even wraps it in clean HTML.",
      image: emailCampaignManager,
    },
    {
      title: "The SEO Blog Post Suite Team",
      headline: "From Idea to Authority.",
      description: "This is your entire content marketing department in one team. It analyzes trends, identifies high-value keywords, drafts a complete, deeply-researched article, and then meticulously optimizes it for search engines. Stop chasing rankings. Start building authority.",
      image: seoBlogSuite,
    },
    {
      title: "The Social Media Suite Team",
      headline: "Content That Connects. On Every Platform.",
      description: "Don't just post. Strategize. This suite brainstorms unique, engaging angles for any topic, drafts content perfectly tailored to the tone and format of each platform, and then optimizes it with the right hashtags and emojis to maximize reach and engagement.",
      image: socialMediaSuite,
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="px-4 md:px-10 lg:px-40 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <img 
                src={heroNetwork} 
                alt="Autonomous Digital Workforce Network" 
                className="w-full max-w-2xl mx-auto mb-8"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block text-etherion-blue">The Wait is Over.</span>
              <span className="block">Your Autonomous Digital</span>
              <span className="block">Workforce is Ready.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto">
              Stop Managing Tasks. Start Directing Outcomes.
            </p>
            
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              EtherionAI isn't another tool. It's a single, intelligent platform that understands your goals and assembles a team of expert AI agents to execute them. Stop micromanaging. Start directing.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg bg-etherion-darkBlue border-etherion-border text-white placeholder:text-slate-500"
                  required
                />
                
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Checkbox 
                    id="newsletter" 
                    checked={newsletter}
                    onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                    className="border-etherion-border"
                  />
                  <label htmlFor="newsletter" className="cursor-pointer">
                    Also subscribe to our newsletter for AI automation insights
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg bg-etherion-blue hover:bg-blue-700 text-white font-bold"
                >
                  {isSubmitting ? "Joining..." : "Get Early Access"}
                </Button>
                
                <p className="text-sm text-slate-500 mt-4">
                  Join the waiting list for priority access and bonus platform credits.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Revolution!</h3>
                <p className="text-slate-300">
                  Check your email for confirmation and next steps.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Meet Your Team Section */}
        <section className="px-4 md:px-10 lg:px-40 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Meet Your <span className="text-etherion-blue">Digital Team</span>
            </h2>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {agents.map((agent, index) => (
                <Card key={index} className="bg-etherion-darkBlue border-etherion-border hover:border-etherion-blue transition-colors">
                  <CardContent className="p-4 md:p-6">
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <img 
                        src={agent.image} 
                        alt={agent.title}
                        className="w-16 h-16 md:w-24 md:h-24 object-contain"
                      />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{agent.title}</h3>
                    <h4 className="text-base md:text-lg font-semibold text-etherion-blue mb-3 md:mb-4">{agent.headline}</h4>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">{agent.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl md:text-3xl font-bold text-slate-400">And Many More...</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 md:px-10 lg:px-40 py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Work Isn't Coming. <span className="text-etherion-blue">It's Here.</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Don't get left behind. Secure your spot and be among the first to command a true digital workforce. The platform is ready. Are you?
            </p>

            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg bg-etherion-darkBlue border-etherion-border text-white placeholder:text-slate-500"
                  required
                />
                
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Checkbox 
                    id="newsletter-bottom" 
                    checked={newsletter}
                    onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                    className="border-etherion-border"
                  />
                  <label htmlFor="newsletter-bottom" className="cursor-pointer">
                    Also subscribe to our newsletter for AI automation insights
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg bg-etherion-blue hover:bg-blue-700 text-white font-bold"
                >
                  {isSubmitting ? "Joining..." : "Get Early Access"}
                </Button>
                
                <p className="text-sm text-slate-500 mt-4">
                  Join the waiting list for priority access and bonus platform credits.
                </p>
              </form>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default JoinTheRevolution;

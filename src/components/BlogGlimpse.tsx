
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogGlimpse = () => {
  const blogPosts = [
    {
      id: "google-ai-dominance-2025",
      title: "Google's AI Dominance: A Comprehensive Look at Recent Breakthroughs",
      excerpt: "From topping the LMarena leaderboard to unveiling cutting-edge projects at Google I/O 2025, Google's AI advancements have set new standards for intelligence, reasoning, and multimodal capabilities.",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
      featured: true
    },
    {
      id: "meta-scale-ai-bet",
      title: "Meta's $15 Billion Bet on Scale AI: A Game-Changer for AI Development or a Costly Gambit?",
      excerpt: "Meta's monumental $15 billion investment in Scale AI signals an aggressive push to bolster its AI capabilities. But is it a game-changer or a costly gambit? We dive into the details.",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      featured: false
    },
    {
      id: "apple-vs-anthropic-ai-reasoning",
      title: "Apple vs. Anthropic: The AI Reasoning Debate Heats Up",
      excerpt: "A clash of perspectives in the AI world sparked heated discussion when Apple challenged AI reasoning capabilities and Anthropic fired back with a bold response.",
      readTime: "7 min read",
      image: "/lovable-uploads/f7da7f7e-fa42-4209-adea-ed584dd72b23.png",
      featured: false
    },
    {
      id: "ai-agents-agentic-revolution",
      title: "The AI Agent Revolution: How Agentic AI is Reshaping the Future of Work",
      excerpt: "Discover how AI Agents are transforming from reactive tools to proactive, autonomous systems that can think, plan, and execute complex tasks independently. This groundbreaking revolution is reshaping how we work.",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      featured: false
    },
    {
      id: "how-ai-thinks-llms-token-prediction",
      title: "How AI Actually \"Thinks\": A Simple Look at LLMs & Token Prediction",
      excerpt: "Ever wondered how ChatGPT or Claude actually work? It's less about conscious thinking and more about being incredibly skilled at predicting what comes next.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
          <BookOpen className="text-etherion-blue" size={32} />
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Take a Glimpse at Our Blog Articles
          </h2>
        </div>
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Deep insights into AI, automation, and practical business intelligence to help you stay ahead.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Link to={`/blog/${featuredPost.id}`} className="group block">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 hover:border-etherion-blue transition-all duration-300 overflow-hidden rounded-xl shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="aspect-video md:aspect-auto md:h-full bg-cover bg-center relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent md:bg-gradient-to-r md:from-slate-800/50 md:via-slate-800/10 md:to-transparent" />
                </div>
              </div>
              <CardContent className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  <span className="bg-etherion-blue/20 text-etherion-blue px-3 py-1 rounded-full font-medium">
                    Featured Article
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-4 group-hover:text-etherion-blue transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-etherion-blue font-semibold group-hover:underline">
                    Read Full Article
                  </span>
                  <ArrowRight className="text-etherion-blue group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>

        <div className="text-center mt-10 sm:mt-12">
          <Link to="/blog">
            <Button variant="outline" className="border-etherion-blue text-etherion-blue hover:bg-etherion-blue hover:text-white px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg rounded-lg">
              View All Articles
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogGlimpse;

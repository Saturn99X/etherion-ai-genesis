
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogGlimpse = () => {
  const blogPosts = [
    {
      id: "ai-agents-agentic-revolution",
      title: "The AI Agent Revolution: How Agentic AI is Reshaping the Future of Work",
      excerpt: "Discover how AI Agents are transforming from reactive tools to proactive, autonomous systems that can think, plan, and execute complex tasks independently. This groundbreaking revolution is reshaping how we work.",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      featured: true
    },
    {
      id: "mastering-prompt-engineering-guide",
      title: "Mastering Prompt Engineering: The Art of Communicating with AI",
      excerpt: "Discover how to craft powerful prompts that unlock AI's true potential. From basic principles to mega prompts, learn the techniques that transform AI from a simple tool into your most reliable team member.",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
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
    <div className="px-4 sm:px-6 md:px-10 lg:px-40 py-12 sm:py-16 md:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <BookOpen className="text-etherion-blue" size={28} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Take a Glimpse at Our Blog Articles
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-etherion-text max-w-2xl mx-auto px-4 sm:px-0">
          Deep insights into AI, automation, and practical business intelligence to help you stay ahead.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Link to={`/blog/${featuredPost.id}`} className="group block">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 hover:border-etherion-blue transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="aspect-video md:aspect-square bg-cover bg-center relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-etherion-dark/60 to-transparent" />
                </div>
              </div>
              <CardContent className="md:w-2/3 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-etherion-text text-xs sm:text-sm mb-3 sm:mb-4">
                  <span className="bg-etherion-blue/20 text-etherion-blue px-2 sm:px-3 py-1 rounded-full text-xs">
                    Featured Article
                  </span>
                  <span className="text-xs sm:text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-3 sm:mb-4 group-hover:text-etherion-blue transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-etherion-text text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-etherion-blue font-medium group-hover:underline text-sm sm:text-base">
                    Read Full Article
                  </span>
                  <ArrowRight className="text-etherion-blue group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>

        <div className="text-center mt-6 sm:mt-8">
          <Link to="/blog">
            <Button variant="outline" className="border-etherion-blue text-etherion-blue hover:bg-etherion-blue hover:text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
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

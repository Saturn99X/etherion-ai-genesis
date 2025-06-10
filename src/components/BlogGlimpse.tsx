
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogGlimpse = () => {
  const featuredPost = {
    id: "how-ai-thinks-llms-token-prediction",
    title: "How AI Actually \"Thinks\": A Simple Look at LLMs & Token Prediction",
    excerpt: "Ever wondered how ChatGPT or Claude actually work? It's less about conscious thinking and more about being incredibly skilled at predicting what comes next.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="text-etherion-blue" size={32} />
          <h2 className="text-white text-3xl font-bold">
            Take a Glimpse at Our Blog
          </h2>
        </div>
        <p className="text-etherion-text text-lg max-w-2xl mx-auto">
          Deep insights into AI, automation, and practical business intelligence to help you stay ahead.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Link to={`/blog/${featuredPost.id}`} className="group block">
          <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 hover:border-etherion-blue transition-all duration-300 overflow-hidden">
            <div className="md:flex">
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
              <CardContent className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 text-etherion-text text-sm mb-4">
                  <span className="bg-etherion-blue/20 text-etherion-blue px-3 py-1 rounded-full">
                    Featured Article
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-white text-2xl font-bold leading-tight mb-4 group-hover:text-etherion-blue transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-etherion-text text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-etherion-blue font-medium group-hover:underline">
                    Read Full Article
                  </span>
                  <ArrowRight className="text-etherion-blue group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>

        <div className="text-center mt-8">
          <Link to="/blog">
            <Button variant="outline" className="border-etherion-blue text-etherion-blue hover:bg-etherion-blue hover:text-white">
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

import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: "meta-scale-ai-bet",
    title: "Meta's $15 Billion Bet on Scale AI: A Game-Changer for AI Development or a Costly Gambit?",
    excerpt: "Meta's monumental $15 billion investment in Scale AI signals an aggressive push to bolster its AI capabilities. But is it a game-changer or a costly gambit? We dive into the details.",
    date: "2025-06-13",
    readTime: "10 min read",
    author: "Etherion Team",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    featured: true
  },
  {
    id: "apple-vs-anthropic-ai-reasoning",
    title: "Apple vs. Anthropic: The AI Reasoning Debate Heats Up",
    excerpt: "A clash of perspectives in the AI world sparked heated discussion when Apple challenged AI reasoning capabilities and Anthropic fired back with a bold response.",
    date: "2025-06-14",
    readTime: "7 min read",
    author: "Etherion Team",
    image: "/lovable-uploads/f7da7f7e-fa42-4209-adea-ed584dd72b23.png",
    featured: false
  },
  {
    id: "ai-agents-agentic-revolution",
    title: "The AI Agent Revolution: How Agentic AI is Reshaping the Future of Work",
    excerpt: "Discover how AI Agents are transforming from reactive tools to proactive, autonomous systems that can think, plan, and execute complex tasks independently. This groundbreaking revolution is reshaping how we work.",
    date: "2025-06-12",
    readTime: "15 min read",
    author: "Etherion Team",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    featured: false
  },
  {
    id: "how-ai-thinks-llms-token-prediction",
    title: "How AI Actually \"Thinks\": A Simple Look at LLMs & Token Prediction",
    excerpt: "Ever wondered how ChatGPT or Claude actually work? It's less about conscious thinking and more about being incredibly skilled at predicting what comes next.",
    date: "2025-06-10",
    readTime: "8 min read",
    author: "Etherion Team",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    featured: false
  }
];

const BlogGrid = () => {
  return (
    <div className="@container">
      <div className="px-4 py-8">
        <div className="grid gap-6 @[768px]:grid-cols-2 @[1024px]:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`group block ${post.featured ? '@[768px]:col-span-2 @[1024px]:col-span-3' : ''}`}
            >
              <article className="bg-etherion-darkBlue border border-etherion-border rounded-xl overflow-hidden hover:border-etherion-blue transition-colors duration-300">
                <div className="aspect-video bg-cover bg-center relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-etherion-dark/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-etherion-text text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-white text-xl font-bold leading-tight mb-3 group-hover:text-etherion-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-etherion-text text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;

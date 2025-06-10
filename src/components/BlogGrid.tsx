
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: "how-ai-thinks-llms-token-prediction",
    title: "How AI Actually \"Thinks\": A Simple Look at LLMs & Token Prediction",
    excerpt: "Ever wondered how ChatGPT or Claude actually work? It's less about conscious thinking and more about being incredibly skilled at predicting what comes next.",
    date: "2024-12-10",
    readTime: "8 min read",
    author: "Etherion Team",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    featured: true
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

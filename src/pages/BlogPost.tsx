
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import BlogPostContent from "../components/BlogPostContent";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
            <div className="py-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-etherion-text hover:text-white transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
              <BlogPostContent slug={slug} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;

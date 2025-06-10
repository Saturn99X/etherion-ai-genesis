
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import BlogHero from "../components/BlogHero";
import BlogGrid from "../components/BlogGrid";

const Blog = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <BlogHero />
            <BlogGrid />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;

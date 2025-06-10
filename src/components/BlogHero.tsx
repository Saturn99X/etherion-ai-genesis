
const BlogHero = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div className="flex flex-col gap-8 px-4 py-10 @[480px]:gap-10 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
              AI Insights & Business Intelligence
            </h1>
            <p className="text-etherion-text text-base font-normal leading-normal max-w-[720px] mx-auto">
              Deep dives into artificial intelligence, automation strategies, and practical insights for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

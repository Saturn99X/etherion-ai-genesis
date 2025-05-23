
const HeroSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhQiTjUQLg8Bu8q1rnl9Yr_-dvMUQ0w2pP3Hmc4Sz4VQ9nMNyAKNd-PFa7KYehhma0rvsbtoVosXXNZsjj2jyAgyWC7bYST0Y82YF-9Jym6NpbMha4a7XVqDjWBPWjTSXyQZUmjcv80ecxvmGUSp6WhrypSArjH0KOX-lB3BCejIsTBMCvJalw0bhwj7Ctxd_MMZMqtFF2iybCm5YtWVi8AFSCNpWozeseJHOwS-TvYrOoy7AgwBhZbhm_LzPkOUmO9Yv7U4DE1Gsm')"
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
            >
              Automate Your Business with AI
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              We build custom AI solutions to automate your business processes, increase efficiency, and reduce costs. Our team of experts will work with you to identify
              opportunities for automation and develop tailored solutions to meet your specific needs.
            </h2>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-etherion-blue text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
          >
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="flex flex-col justify-end gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 @container mx-auto max-w-4xl">
        <div className="flex flex-col gap-3 sm:gap-4 text-center items-center">
          <h1 className="text-white tracking-tight font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-2xl">
            Ready to Transform Your Business?
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl">
            Contact us today to discuss your AI automation needs and how we can help you achieve your goals.
          </p>
        </div>
        <div className="flex justify-center mt-4 sm:mt-6">
            <Link
              to="/get-started"
              className="flex min-w-[120px] sm:min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-11 px-6 sm:h-12 sm:px-8 bg-etherion-blue text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-md"
            >
              <span className="truncate">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default CTASection;

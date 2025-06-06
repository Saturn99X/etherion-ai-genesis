
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center items-center">
          <h1
            className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Ready to Transform Your Business?
          </h1>
          <p className="text-white text-base font-normal leading-normal max-w-[720px]">
            Contact us today to discuss your AI automation needs and how we can help you achieve your goals.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <Link
              to="/get-started"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-etherion-blue text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
            >
              <span className="truncate">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

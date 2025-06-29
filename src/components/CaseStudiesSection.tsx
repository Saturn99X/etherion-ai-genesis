
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Increased Efficiency by 40%",
      description: "We automated key processes for a logistics company, resulting in a 40% increase in efficiency.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy3S7dFjYLxYSxuYnCVXQgaQFKKeSgopWwPMYcwBarmv7527DwXYEhbNKhaIbA1fw_hov4_86HKPI6lMIfS9YbHn8xAt34zJwibPZ_gkgu7j4tWKRT66dtbMghx-mVH_jx5-wyjfneRn5j9V1xFiwnalTxw8BqyqYmEA5xy_zxXDMS0p4tiVQ0U7KDDsZbmiC9eIlfK4UFZhLXnn7j_oueROK9gIsiugCGu7OaX1psrDfW_b7a7WCohIM2ndG_mrYFS1UCJ7ki21xe"
    },
    {
      title: "Reduced Costs by 25%",
      description: "We developed a custom AI solution for a retail business, leading to a 25% reduction in operational costs.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2OWOVZC-E9oJgNYqXoKCHeJ8MqGoX31VRsBW4Vh6UFOmMlfV9TpO2eEn4Qkxzxk1lq6aBHsa5OPPfUZhlXYo39P1hfgt3Le9NTr348OWuUIztOBNfOMz2O565_fQy30WMUnaMmSUko9A_VfxK96VNuPag4zQwCbzfshcko9-VjDQmxNDcJyVFcNPSqkQYqSe7kBpFvBqT1DFXmz2R2bOPgcwFqw3SwlEpeAF_Rc_xgAdC6w2F7_2ppa70ZO8Ou3mWZgTRcna5oA-j"
    },
    {
      title: "Improved Customer Satisfaction by 15%",
      description: "We implemented an AI-powered chatbot for a customer service team, improving customer satisfaction by 15%.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbnmijoMQLTFQB7xKi-aoK46_Epe2SrfwGy0-C7tKyGu7XFD-rulgL7X0ASMh4mO_muCnWu1qZ908pCyw8HhJnOE6bdUcmTMrFnt2q-8VabQRcY_YChUertnXDEsb9hcICugQt9UqSEOhKmXp8zr9rjJZ01koFRBxX0LIVCbBJT14p_48XmFvCyGGAx1oHOYT4sFlyKgLCl29Rq54Fc71MJi-_0tEvdZlJaiMh5oou2KF9nOmfVrr8RN7-wIX-N_xB7vtgXsIcpQPb"
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:gap-4 text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
        <h1
          className="text-white tracking-tight font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto"
        >
          Case Studies
        </h1>
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-[720px] mx-auto">
          See how we've helped other businesses achieve success with AI automation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="flex flex-col bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-lg overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover" // Removed rounded-xl from here as parent will clip
              style={{ backgroundImage: `url("${study.imageUrl}")` }}
            ></div>
            <div className="p-5 sm:p-6 flex-grow flex flex-col"> {/* Added padding and flex-grow */}
              <h3 className="text-white text-md sm:text-lg font-semibold leading-snug mb-2">{study.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed flex-grow">{study.description}</p> {/* Added flex-grow to description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;

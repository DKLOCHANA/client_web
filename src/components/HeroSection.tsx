"use client";

import Image from "next/image";

import { withSoftMask } from "@/framer/WithSoftMask";

const ParagraphWithSoftMask = withSoftMask(() => (
  <p className="leading-normal text-2xl mb-8">
    Prime Path Solutions delivers top-notch BPO services, boosting efficiency
    and driving growth for businesses across industries.
  </p>
));

const HeroSection = () => {
  return (
    <>
      <div
        // className="bg-[#FFF2E1] z-1"
        className="pt-8 mb-20 md:pt-5 md:mb-10 overflow-x-clip overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 200% 100% at bottom, #FFF2E1, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
            <h1 className="my-4 text-5xl font-bold leading-tight text-[var(--text-blue)]">
              <span className="text-[#F48C06]">Empowering</span> Business Growth
              with Expert BPO Solutions
            </h1>
            {/* <p className="leading-normal text-2xl mb-8">
              Prime Path Solutions delivers top-notch BPO services, boosting
              efficiency and driving growth for businesses across industries.
            </p> */}

            <ParagraphWithSoftMask />
            {/* <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
              <button className="lg:mx-0 bg-[#F48C06] text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Get Started for Free
              </button>

              <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                      fill="#23BDEE"
                    />
                  </svg>
                </button>
                <span className="cursor-pointer">Discover How We Work</span>
              </div>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
            <Image
              data-aos="fade-up"
              data-aos-once="true"
              style={{
                height: "800px",
                width: "800px",
                objectFit: "contain",
                marginBottom: "-100px",
              }}
              src="/img/girlnew.png"
              alt="Boost Your Business Efficiency with Prime Path Solutions"
              width={800}
              height={800}
            />

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 animate-floating1"
            >
              <img
                className="bg-black rounded-lg h-12 sm:h-16"
                src="img/calendar.svg"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              className="absolute top-20 -right-10 sm:right-20 sm:top-28 md:top-36 md:right-28 lg:top-32 lg:-right-10 animate-floating"
              aria-hidden="true"
            >
              <img
                className="bg-red-300 bg-opacity-60 rounded-lg h-15 sm:h-20"
                src="img/gabriella.svg"
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 animate-floating3"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-15 sm:h-20"
                src="img/ux-class.svg"
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 animate-floating2"
            >
              <img
                className="bg-green-600 bg-opacity-70 rounded-lg h-20 sm:h-30"
                src="img/congrat.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-10 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          />
        </svg>
        <div className="bg-white w-full h-20 -mt-px" />
      </div> */}
    </>
  );
};

export default HeroSection;

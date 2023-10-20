import React from "react";

const AboutYou = () => {
  return (
    <div
      className="my-14 md:my-20  lg:my-0 lg:py-[104px]"
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-delay="500"
      data-aos-easing="linear"
    >
      <div className="container mx-auto flex justify-center xl:w-[1140px] 2xl:w-[1320px] px-3 sm:px-5 xl:px-0">
        <div className="relative about_bg sm:p-10 px-3 py-7 w-[922px] rounded-[40px]">
          <div className="absolute top-2 left-4 sm:w-[193px] w-[100px] sm:h-[195px] h-[100px] rounded-[137px] opacity-50 about_ellipse blur-[63px]"></div>
          <div className="absolute bottom-2 right-4 sm:w-[193px] sm:h-[195px] rounded-[137px] opacity-50 about_ellipse blur-[63px]"></div>
          <h2 className="text-dark text-center text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium mb-4 font-Manrope ">
            Tell us about your app
          </h2>
          <p className="leading-[170%] text-center text-xsm md:text-sm font-normal text-dark opacity-70 sm:mb-[44px] mb-4 font-Inter max-w-[890px]">
            {" "}
            If you have a non-gaming ios app with 5000+ monthly downloads and
            it's been on the App Store for more than a year, we're interested in
            buying it!
          </p>
          <div className="sm:px-[23px]">
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-4 sm:mb-6 mb-4">
              <input
                className="outline-none leading-[170%] px-2 w-full text-xsm md:text-sm font-normal opacity-90 text-black-light font-Inter bg-white  ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]"
                type="text"
                placeholder="Your Name"
              />
              <input
                required
                className="outline-none leading-[170%] px-2 w-full text-xsm md:text-sm font-normal opacity-90 text-black-light font-Inter bg-white  ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="flex sm:gap-6 gap-4 sm:mb-6 mb-4 flex-col sm:flex-row">
              <input
                required
                className="outline-none leading-[170%] px-2 w-full text-xsm md:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]"
                type="text"
                placeholder="Revenue Last Month"
              />
              <input
                className="outline-none leading-[170%] px-2 w-full text-xsm md:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]"
                type="text"
                placeholder="Download Last Month"
              />
            </div>
            <input
              required
              className="outline-none leading-[170%] px-2 w-full sm:mb-6 mb-4 text-xsm md:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]"
              type="text"
              placeholder="App URL..."
            />
            <textarea
              className="resize-none outline-none leading-[170%] px-2 w-full height-[74px] text-xsm md:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]"
              type="text"
              placeholder="Anything else you’d like us to know..."
            />
          </div>
          <div className="flex justify-center py-5 sm:py-8 md:py-11">
            <button className="mb-1 text-white text-xsm md:text-sm font-bold font-Manrope leading-[170%] inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-red-500 to-indigo-600 hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300 opacity-100">
              Submit Now
            </button>
          </div>
          <div className="flex justify-center sm:pb-0  about_you_gradient max-w-[556px] mx-auto">
            <p className="font-Manrope text-center about_text opacity-70    capitalize text-[17px] md:text-[18px] xl:text-xmd sm:px-10 px-3 sm:py-5 py-3 rounded-xl inline-block">
              We guarantee to give you an offer within 48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;

import React from "react";

const AppToday = () => {
  return (
    <div className="container xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 py-14 md:py-20 lg:py-24">
      <div className="lg:flex items-center">
        <div className=" flex justify-center">
          <div className="lg:max-w-[766px] sm:mb-0 mb-12 max-w-[506px] bg-[#dd3b5c] xl:pt-16 pt-[26px] lg:pb-7 pb-10 xl:pe-[82px] px-6  xl:ps-[50px] lg:rounded-l-[30px] lg:rounded-r-[0px] sm:rounded-t-[30px] sm:rounded-none rounded-[30px]" >
            <h3 className="text-white lg:text-start text-center font-Manrope font-medium sm:text-lg text-md">
              Sell your app today
            </h3>
            <p className="opacity-70 lg:text-start text-center text-white font-Inter text-sm font-normal mt-4">
              If you have a non-gaming ios app with 5000+ monthly downloads and it's been on the App Store for more than a year, we're interested in buying it!
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="max-w-[386px] rounded-xl py-3 md:py-5 px-3 lg:px-10 bg-white mt-10  mb-3 lg:mb-0  border border-[#DEDCEB]">
                <p className="about_text text-sm text-center lg:text-start md:text-xmd capitalize font-medium font-Manrope">
                  We guarantee to give you an offer within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#4f44ec] flex items-center lg:h-[450px] w-full rounded-3xl" >
          <div className="w-full bg-card border border-[#C0ACE8] py-10 px-6">
            <div className="flex flex-col sm:flex-row mb-6 gap-6">
              <input
                className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)]"
                type="text"
                placeholder="Your Name"
              />
              <input
                required
                className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col sm:flex-row mb-6 gap-6">
              <input
                required
                className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)"
                type="text"
                placeholder="Revenue Last Month"
              />
              <input
                className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08) "
                type="text"
                placeholder="Download Last Month"
              />
            </div>
            <input
              required
              className=" px-2 w-full outline-none  mb-6 text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)"
              type="text"
              placeholder="App URL..."
            />
            <textarea
              className=" px-2 w-full outline-none resize-none height-[74px] text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)"
              type="text"
              placeholder="Anything else you’d like us to know..."
            />

            <div className="flex justify-center mt-11 ">
              <div className="px-10 cursor-pointer rounded-[38px] py-4 inline-block bg-gradient-to-r from-red-500 to-indigo-600 hover:from-indigo-700 hover:to-red-600 delay-1000">
                <button aria-label="  Submit Now" className="text-white font-Manrope font-normal text-sm">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppToday;
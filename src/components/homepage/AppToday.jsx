import React from "react";

const AppToday = () => {
  return (
    <div className="container mx-auto py-24 ">
      <div className="lg:flex items-center">
        <div className=" flex justify-center">
          <div className="lg:max-w-[766px] max-w-[506px] bg-[#dd3b5c] xl:pt-[79px] pt-[26px] pb-7 xl:pe-[82px] px-6  xl:ps-[50px] lg:rounded-l-[30px] lg:rounded-r-[0px] sm:rounded-t-[30px] sm:rounded-none rounded-[30px]">
            <h3 className="text-white font-Manrope font-medium text-lg">
              Sell your app today
            </h3>
            <p className="opacity-70 text-white font-Inter text-sm font-normal mt-4">
              If you have a non-gaming ios app with 5000+ monthly downloads and
              it's been on the App Store for more than a year, we're interested
              in buying it!
            </p>
            <div className="max-w-[364px] rounded-xl py-5 px-10 bg-white mt-10">
              <p className="opacity-70 text-red-500 text-xmd font-medium capitalize font-Manrope ">
                We guarantee to give you an offer within 48 hours
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#4f44ec] flex items-center lg:h-[430px] w-full rounded-3xl">
          <div className="w-full bg-card py-10 px-6">
            <div className="lg:flex gap-6 mb-6">
              <input
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
                type="text"
                placeholder="Your Name"
              />
              <input
                required
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696] lg:mt-0 mt-6"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="lg:flex gap-6 mb-6 flex-col sm:flex-row">
              <input
                required
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
                type="text"
                placeholder="Revenue Last Month"
              />
              <input
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696] lg:mt-0 mt-6"
                type="text"
                placeholder="Download Last Month"
              />
            </div>
            <input
              required
              className=" px-2 w-full  mb-6 text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
              type="text"
              placeholder="App URL..."
            />
            <textarea
              className=" px-2 w-full height-[74px] text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
              type="text"
              placeholder="Anything else you’d like us to know..."
            />

            <div className="flex justify-center mt-11 ">
              <div className="px-10 cursor-pointer rounded-[38px] py-4 inline-block bg-gradient-to-r from-red-500 to-indigo-600 hover:from-indigo-700 hover:to-red-600 delay-1000">
                <button className="text-white font-Manrope font-normal text-sm">
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

import React from "react";

const AppToday = () => {
  return (
    <div className="container mx-auto py-24 ">
      <div className="flex">
        <div className=""></div>
        <div className="bg-blue-600 rounded-3xl">
          <div className="max-w-[784px] backdrop-blur-[54px] rounded-3xl bg-slate-400 bg py-10 px-6">
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-3 sm:mb-6 mb-3">
              <input
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
                type="text"
                placeholder="Your Name"
              />
              <input
                required
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="flex sm:gap-6 gap-3 sm:mb-6 mb-3 flex-col sm:flex-row">
              <input
                required
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
                type="text"
                placeholder="Revenue Last Month"
              />
              <input
                className=" px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
                type="text"
                placeholder="Download Last Month"
              />
            </div>
            <input
              required
              className=" px-2 w-full sm:mb-6 mb-3 text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
              type="text"
              placeholder="App URL..."
            />
            <textarea
              className=" px-2 w-full height-[74px] text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]"
              type="text"
              placeholder="Anything else you’d like us to know..."
            />

            <div className="flex justify-center mt-11 ">
              <div className="px-10 cursor-pointer rounded-[38px] py-4 inline-block bg-gradient-to-r from-red-500 to-indigo-600 hover:from-indigo-800 hover:to-red-700 delay-1000">
                <button className="text-white font-Manrope font-normal text-sm">
                  SellYourApp
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

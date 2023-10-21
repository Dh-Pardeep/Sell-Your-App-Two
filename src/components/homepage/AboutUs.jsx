import React from "react";
import { Check, Highest, Safe, Transparency } from "../common/Icon";
import about_vector from "../../assets/img/webp/about_us_vector.webp";

const AboutUs = () => {
  return (
    <div className="bg-Hero-bg  sm:py-10 py-6 lg:pt-[100px] lg:pb-[113px] relative overflow-hidden">
      <img
        className="absolute bottom-[-22%] left-[0]"
        src={about_vector}
        alt="shadow"
      />
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          <div
            className="w-full lg:w-6/12 lg:mb-0 mb-10"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="500"
            data-aos-easing="linear"
          >
            <h3 className="leading-[170%] font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4">
              About Us
            </h3>
            <p className="leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4">
              Appstun is a global mobile app company that buys, builds, and
              grows{" "}
              <span className="lg:block">
                {" "}
                mobile apps. We’ve served millions of users worldwide since
                2021.
              </span>
            </p>
            <p className="leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4">
              Founded in 2021 by a team of passionate and creative developers
              and{" "}
              <span className="lg:block">
                designers. We’ve built over 50 apps across multiple platforms
                and served
              </span>{" "}
              millions of users flawlessly with an average rating of 4.8
            </p>
            <p className="leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-8">
              We buy mobile apps and allow developers to make cash out exits
              with{" "}
              <span className="lg:block">
                {" "}
                a fair valuation. If you are looking to sell your app, we’re
                here to{" "}
              </span>{" "}
              purchase it!
            </p>
            <p className="leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-[44px]">
              If you want to know more about us, explore Appstun.
            </p>
            <button className="text-white text-[14px] md:text-base font-bold font-Manrope leading-[170%] inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-indigo-600 hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300">
              Sell Your App
            </button>
          </div>
          <div className="w-full lg:w-6/12 flex flex-col lg:items-end items-center">
            <div className="cursor-pointer z-[1] sm:w-[395px] mb-5 rounded-[12px] border border-[rgb(51_23_63)] ps-6 pe-10 py-5 bg-[rgba(255_255_255_0.04)] inline-block relative">
              <span className="absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1]">
                <Transparency />
              </span>
              <span>
                <Check />
              </span>
              <h3 className="mt-6 font-Manrope text-[20px] lg-[22px] xl:text-md font-medium text-white mb-1">
                Transparency
              </h3>
              <p className="mb-0 leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70">
                We value transparency. You can ask any{" "}
                <span className="md:block">
                  {" "}
                  question and have a call with us any time{" "}
                </span>{" "}
                during the sales process.
              </p>
            </div>
            <div className="cursor-pointer z-[1] relative w-full sm:w-[395px] mb-5 rounded-[12px] border border-[rgb(51_23_63)] ps-6 pe-10 py-5 bg-[rgba(255_255_255_0.04)] inline-block">
              <span className="absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1]">
                <Highest />
              </span>
              <span>
                <Check />
              </span>
              <h3 className="mt-6 font-Manrope text-[20px] lg-[22px] xl:text-md font-medium text-white mb-1">
                Highest price guarantee
              </h3>
              <p className="mb-0 leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70">
                We promise to give you the best offer for
                <span className="md:block"> your mobile app. </span>
              </p>
            </div>
            <div className="cursor-pointer z-[1] relative sm:w-[395px] rounded-[12px] border border-[rgb(51_23_63)] ps-6 pe-10 py-5 bg-[rgba(255_255_255_0.04)] inline-block">
              <span className="absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1]">
                <Safe />
              </span>
              <span>
                <Check />
              </span>
              <h3 className="mt-6 font-Manrope text-[20px] lg-[22px] xl:text-md font-medium text-white mb-1">
                Safe Process
              </h3>
              <p className="mb-0 leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 md:max-w-[351px]">
                We partner with escrow.com, the biggest and most trusted escrow
                platform in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

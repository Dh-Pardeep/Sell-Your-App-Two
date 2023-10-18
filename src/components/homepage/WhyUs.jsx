import React from "react";
import great from "../../assets/img/webp/great.webp";
import cash from "../../assets/img/webp/cash.webp";
import price from "../../assets/img/webp/price.webp";
import process from "../../assets/img/webp/process.webp";
import vibes from "../../assets/img/webp/vibes.webp";

const WhyUs = () => {
  return (
    <div className="bg-Hero-bg">
      <div className="container xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 lg:pt-28 py-14 md:pt-20 ">
        <div className="flex justify-center">
          <h3 className="text-white font-Manrope font-medium text-lg">
            Why Us?
          </h3>
        </div>
        <div className="flex justify-center text-center mt-4">
          <p className="text-white opacity-70 font-Inter font-normal text-sm max-w-[758px]">
            Selling your App business is a big step. You’ve spent a lot of time
            and effort building your app. You deserve to get the best price
            offer and a smooth selling process.
          </p>
        </div>
        <div className="lg:flex gap-7 xl:gap-10 2xl:gap-[50px]" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear">
          <div className="flex justify-center">
            <div className="md:flex gap-7 xl:gap-10 2xl:gap-[50px]">
              <div className="flex justify-center">
                <div className="sm:flex gap-7 xl:gap-10 2xl:gap-[50px]">
                  <div className="mt-12 lg:mt-20 ">
                    <div className="flex justify-center">
                      <img className="max-w-[133px]" src={great} alt="cash" />
                    </div>
                    <p className="text-center mt-5 opacity-70 text-white font-Inter font-normal text-sm max-w-[220px]">
                      We guarantee 14 days from contact to exit
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-12 lg:mt-20 ">
                      <div className="flex justify-center">
                        <img className="max-w-[133px]" src={cash} alt="cash" />
                      </div>
                      <p className="text-center mt-5 opacity-70 text-white font-Inter font-normal text-sm max-w-[220px]">
                        Full cash offer, get paid immediately
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-12 lg:mt-20 ">
                  <div className="flex justify-center">
                    <img className="max-w-[133px]" src={price} alt="cash" />
                  </div>
                  <p className="text-center mt-5 opacity-70 text-white font-Inter font-normal text-sm max-w-[220px]">
                    Best price/valuation guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="sm:flex gap-7 xl:gap-10 2xl:gap-[50px]">
              <div className="mt-12 lg:mt-20 ">
                <div className="flex justify-center">
                  <img className="max-w-[133px]" src={vibes} alt="cash" />
                </div>
                <p className="text-center mt-5 opacity-70 text-white font-Inter font-normal text-sm max-w-[220px]">
                  Good vibes only. We value human connections.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="mt-12 lg:mt-20 ">
                  <div className="flex justify-center">
                    <img className="max-w-[133px]" src={process} alt="cash" />
                  </div>
                  <p className="text-center mt-5 opacity-70 text-white font-Inter font-normal text-sm max-w-[220x]">
                    Simple process, zero complexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 lg:mt-20  lg:pb-[75px]">
          <div className="px-10 cursor-pointer rounded-[38px] py-4 inline-block bg-gradient-to-r from-red-500 to-indigo-600 hover:from-indigo-800 hover:to-red-700 delay-1000">
            <button className="text-white font-Manrope font-bold text-sm ">
              SellYourApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
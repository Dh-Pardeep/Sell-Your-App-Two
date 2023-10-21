import React from "react";
import {
  AgreementIcon,
  ClosingIcon,
  ContactIcon,
  OfferIcon,
  ReviewHow,
} from "../common/Icon";

const HowWork = () => {
  return (
    <div id="How_Work">
      <div className="container xl:w-[1140px] 2xl:w-[1320px]  px-3 sm:px-5 xl:px-0 mx-auto">
        <div className=" pt-14 md:pt-20 lg:pt-20">
          <h2 className="text-center text-dark text-md md:text-[28px] lg:text-[31px] xl:text-lg font-medium font-Manrope leading-normal">
            How it Works?
          </h2>
          <p className="max-w-[491px] mx-auto opacity-70 text-center text-dark text-xsm md:text-sm font-normal font-Inter leading-[170%] pt-4">
            After buying countless apps, we have designed a 5-step simple
            process. It’s fast, simple and transparent.
          </p>
        </div>
        <div className="Full_line lg:after:hidden relative">
          <div className="flex ">
            <div className="w-1/2 hidden lg:block"></div>
            <div className="w-full lg:w-1/2 flex flex-col mt-8 md:mt-10 lg:mt-20 relative after_img_line">
              <div className="w-[57px] h-[58px] md:w-[70px] md:h-[70px] bg-white rounded-full my_box border absolute  lg:top-11 lg:left-4 ">
                <div className=" flex flex-col items-center justify-center firstDay">
                  <h2 className=" text-sm md:text-xmd font-medium leading-normal font-Manrope ">
                    1st
                    <br />
                  </h2>
                  <h2 className="leading-4 text-xsm md:text-sm font-normal font-Manrope">
                    Day
                  </h2>
                </div>
              </div>
              <div
                className="flex flex-col  ms-24 sm:ms-32 lg:ms-32"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear"
              >
                <div className="flex items-center lg:items-start lg:flex-col gap-7 lg:gap-0 mb-4 lg:mb-0">
                  <div className=" w-14 md:w-16  h-14 md:h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                    <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                      <div className=" md:w-[32px]  md:h-[30px] relative">
                        <ContactIcon />
                      </div>
                    </div>
                  </div>
                  <h2 className=" text-start  text-dark text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-medium font-Manrope lg:mb-2 lg:mt-4 leading-normal">
                    Contact
                  </h2>
                </div>
                <p className=" text-start opacity-70 text-dark text-xsm md:text-sm font-normal font-Inter leading-[170%]">
                  Developers submit a form via our website.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 md:mt-10  lg:mt-0 ">
            <div className="w-full lg:w-1/2 flex flex-col lg:items-end  relative before_img_line lg:-translate-y-5">
              <div className="w-[57px] h-[58px] md:w-[70px] md:h-[70px] bg-white rounded-full my_box border absolute lg:top-[50px] lg:right-1 ">
                <div className=" flex flex-col items-center justify-center firstDay">
                  <h2 className=" text-sm md:text-xmd font-medium leading-normal font-Manrope pt-1">
                    2nd
                    <br />
                  </h2>
                  <h2 className="leading-4 text-xsm md:text-sm font-normal font-Manrope">
                    Day
                  </h2>
                </div>
              </div>
              <div
                className="flex lg:items-end flex-col ms-24 sm:ms-32  lg:ms-0 lg:me-28"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-easing="linear"
              >
                <div className="flex items-center  lg:flex-col gap-7 lg:gap-0 mb-4 lg:mb-0">
                  <div className=" w-14 md:w-16  h-14 md:h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                    <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                      <div className=" md:w-[32px]  md:h-[30px] relative">
                        <ReviewHow />
                      </div>
                    </div>
                  </div>
                  <h2 className=" text-start  text-dark text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-medium font-Manrope lg:mb-2 lg:mt-4">
                    Review
                  </h2>
                </div>
                <p className="  opacity-70 text-dark text-xsm md:text-sm font-normal font-Inter leading-[170%] lg:text-end max-w-[441px]">
                  We review app’s analytics and performance. We also ask some
                  questions to give the best offer.
                </p>
              </div>
            </div>
            <div className="w-1/2 hidden lg:block"></div>
          </div>
          <div className="flex mt-8 md:mt-10  lg:mt-0">
            <div className="w-1/2 hidden lg:block"></div>
            <div className="w-full lg:w-1/2 flex flex-col  relative after_img_line_two lg:-translate-y-5">
              <div className="w-[57px] h-[58px] md:w-[70px] md:h-[70px] bg-white rounded-full my_box border absolute lg:top-[50px] lg:left-4 ">
                <div className=" flex flex-col items-center justify-center firstDay">
                  <h2 className=" text-sm md:text-xmd font-medium leading-normal font-Manrope mt-1">
                    3rd
                    <br />
                  </h2>
                  <h2 className="leading-4 text-xsm md:text-sm font-normal font-Manrope">
                    Day
                  </h2>
                </div>
              </div>
              <div
                className="flex flex-col ms-24 sm:ms-32 lg:ms-32 "
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-easing="linear"
              >
                <div className="flex items-center lg:items-start lg:flex-col gap-7 lg:gap-0 mb-4 lg:mb-0">
                  <div className=" w-14 md:w-16  h-14 md:h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                    <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                      <div className=" md:w-[32px]  md:h-[30px] relative">
                        <OfferIcon />
                      </div>
                    </div>
                  </div>
                  <h2 className=" text-start  text-dark text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-medium font-Manrope lg:mb-2 lg:mt-4">
                    Offer
                  </h2>
                </div>
                <p className=" text-start opacity-70 text-dark text-xsm md:text-sm font-normal font-Inter leading-[170%] max-w-[395px]">
                  We present a price offer to buy the app. We make the offer
                  based on the information we had in Review step.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 md:mt-10  lg:mt-0">
            <div className="w-full lg:w-1/2 flex flex-col lg:items-end  relative before_img_line_two lg:-translate-y-14">
              <div className="w-[57px] h-[58px] md:w-[70px] md:h-[70px] bg-white rounded-full my_box border absolute lg:top-[50px] lg:right-1 ">
                <div className=" flex flex-col items-center justify-center firstDay">
                  <h2 className=" text-sm md:text-xmd font-medium leading-normal font-Manrope mt-1">
                    7th
                    <br />
                  </h2>
                  <h2 className="leading-4 text-xsm md:text-sm font-normal font-Manrope">
                    Day
                  </h2>
                </div>
              </div>
              <div
                className="flex lg:items-end flex-col ms-24 sm:ms-32 lg:ms-0  lg:me-28"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-easing="linear"
              >
                <div className="flex items-center lg:flex-col gap-7 lg:gap-0 mb-4 lg:mb-0">
                  <div className=" w-14 md:w-16  h-14 md:h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                    <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                      <div className=" md:w-[32px]  md:h-[30px] relative">
                        <AgreementIcon />
                      </div>
                    </div>
                  </div>
                  <h2 className=" text-start  text-dark text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-medium font-Manrope lg:mb-2 lg:mt-4">
                    Agreement
                  </h2>
                </div>
                <p className="  opacity-70 text-dark text-xsm md:text-sm font-normal font-Inter leading-[170%] lg:text-end max-w-[441px]">
                  Both parties sign an agreement and start the transaction with
                  escrow.com. We deposit the money and developer transfers the
                  app. After that, we inspect the app for 1 week.
                </p>
              </div>
            </div>
            <div className="w-1/2 hidden lg:block"></div>
          </div>
          <div className="flex mt-8 md:mt-10  lg:mt-0">
            <div className="w-1/2 hidden lg:block"></div>
            <div className="w-full  lg:w-1/2 flex flex-col  relative lg:-translate-y-24">
              <div className="w-[57px] h-[58px] md:w-[70px] md:h-[70px] bg-white rounded-full my_box border absolute lg:top-[50px] lg:left-[30px] ">
                <div className=" flex flex-col items-center justify-center firstDay">
                  <h2 className=" text-sm md:text-xmd font-medium leading-normal font-Manrope ">
                    14th
                    <br />
                  </h2>
                  <h2 className="leading-4 text-xsm md:text-sm font-normal font-Manrope">
                    Day
                  </h2>
                </div>
              </div>
              <div
                className="flex flex-col ms-24 sm:ms-32 lg:ms-32"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-easing="linear"
              >
                <div className="flex items-center lg:items-start lg:flex-col gap-7 lg:gap-0 mb-4 lg:mb-0">
                  <div className=" w-14 md:w-16  h-14 md:h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                    <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                      <div className=" md:w-[32px]  md:h-[30px] relative">
                        <ClosingIcon />
                      </div>
                    </div>
                  </div>
                  <h2 className=" text-start  text-dark text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-medium font-Manrope lg:mb-2 lg:mt-4">
                    Closing
                  </h2>
                </div>
                <p className=" text-start opacity-70 text-dark text-xsm md:text-sm font-normal font-Inter leading-[170%] max-w-[395px]">
                  After 1 week of inspection period, escrow release the payment
                  and everything is done. Escrow will send the money to
                  developer’s bank account in 2-3 days.
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 md:py-5 px-5 md:px-10 max-w-[610px] mx-auto entire_para_border mt-8 lg:mt-0 lg:-translate-y-14 mb-14 md:mb-20 lg:mb-7">
            <p className="font-Manrope text-sm sm:text-[18px] md:text-xmd mx-auto text-center font-medium leading-normal entire_para">
              {" "}
              The entire process takes 14 days from contact to closing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;

import React from "react";
import unlock from "../../assets/img/webp/unlock.webp";
import clock from "../../assets/img/webp/clock.webp";
import phone from "../../assets/img/webp/phone.webp";
import bag from "../../assets/img/webp/bag.webp";
import fuzzy from "../../assets/img/webp/fuzzy.webp";
import logo from "../../assets/img/webp/logo.webp";
import shadow1 from "../../assets/img/webp/card-shadow-1.webp";
import shadow2 from "../../assets/img/webp/card-shadow-2.webp";
import shadow3 from "../../assets/img/webp/card-shadow-3.webp";
import shadow4 from "../../assets/img/webp/card-shadow-4.webp";
const Explore = () => {
  return (
    <div className="bg-Hero-bg pb-14 md:pb-20 lg:pb-14 pt-12 sm:pt-16 lg:pt-[75px]">
      <div className="container xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 ">
        <div className="flex justify-center">
          <h3 className="text-white text-lg font-medium font-Manrope">
            Explore Our Apps
          </h3>
        </div>
        <div className=" flex justify-center mt-4">
          <p className="max-w-[807px] opacity-70 text-center text-white text-sm font-normal font-Inter leading-7">
            We always encourage using creativity. Our goal is to build and
            acquire apps that solve people's problems. Our apps are loved and
            used by millions of people in every corner of the world.
          </p>
        </div>
        <div className="lg:flex justify-center gap-x-[52px]">
          <div className="lg:max-w-[500px] max-w-[430px] border border-[#3c2c47] px-4 w-full mt-[100px] overflow-hidden relative rounded-3xl bg-card-2 mx-auto lg:mx-0">
            <img
              className=" absolute w-full top-0 left-0"
              src={shadow1}
              alt="shadow"
            />
            <div className="flex justify-center pt-10 lg:pt-20">
              <img className="w-[140px]" src={clock} alt="clock" />
            </div>
            <div className="flex text-center justify-center mt-10">
              <h3 className="text-white font-medium text-md font-Manrope">
                iWatch Faces & Watch Wallpaper
              </h3>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-white opacity-70 text-sm font-normal font-Inter">
                Designed for iPad
              </p>
            </div>
            <div className="flex justify-center text-center mt-[37px]">
              <p className="text-white max-w-[342px] opacity-70 text-sm font-normal font-Inter">
                Unlock the full potential of your Apple Watch with our faces
              </p>
            </div>
            <div className="flex justify-center mt-10 pb-12">
              <img className="unlock_bg px-5 py-4" src={unlock} alt="unlock" />
            </div>
          </div>
          <div className="lg:max-w-[500px] max-w-[430px] border border-[#3c2c47] px-4 w-full lg:mt-[100px] mt-[54px] overflow-hidden relative rounded-3xl bg-card-2 mx-auto lg:mx-0">
            <img
              className=" absolute w-full bottom-0 left-0"
              src={shadow2}
              alt="shadow2"
            />
            <div className="flex justify-center pt-10 lg:pt-20">
              <img className="w-[140px]" src={phone} alt="phone" />
            </div>
            <div className="flex text-center justify-center mt-10">
              <h3 className="text-white font-medium text-md font-Manrope">
                Record Phone Calls & Call Save
              </h3>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-white opacity-70 text-sm font-normal font-Inter">
                Designed for iPhone
              </p>
            </div>
            <div className="flex justify-center text-center mt-[37px]">
              <p className="text-white opacity-70 max-w-[342px] text-sm font-normal font-Inter">
                Automatically record your phone calls with a single click
              </p>
            </div>
            <div className="flex justify-center mt-10 pb-12">
              <img className="unlock_bg px-5 py-4" src={unlock} alt="unlock" />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center gap-x-[52px]">
          <div className="lg:max-w-[500px] max-w-[430px] border border-[#3c2c47] px-4 w-full mt-[54px] overflow-hidden relative rounded-3xl bg-card-2 mx-auto lg:mx-0">
            <img
              className="absolute bottom-0 right-0 w-full"
              src={shadow3}
              alt="shadow-3"
            />
            <div className="flex justify-center pt-10 lg:pt-20">
              <img className="w-[140px]" src={bag} alt="bag" />
            </div>
            <div className="flex text-center justify-center mt-10">
              <h3 className="text-white font-medium text-md font-Manrope">
                Mobile Print - Wifi & Remote
              </h3>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-white opacity-70 text-sm font-normal font-Inter">
                Designed for iPad
              </p>
            </div>
            <div className="flex justify-center text-center mt-[37px]">
              <p className="text-white max-w-[342px] opacity-70 text-sm font-normal font-Inter">
                rint any file from your mobile phone with ease. Fast and
                convenient
              </p>
            </div>
            <div className="flex justify-center mt-10 pb-12">
              <img className="unlock_bg px-5 py-4" src={unlock} alt="unlock" />
            </div>
          </div>
          <div className="lg:max-w-[500px] max-w-[430px] border border-[#3c2c47] px-4 w-full mt-[54px] overflow-hidden relative rounded-3xl bg-card-2 mx-auto lg:mx-0">
            <img
              className="w-full absolute top-0 left-0"
              src={shadow4}
              alt="shadow"
            />
            <div className="flex justify-center pt-10 lg:pt-20">
              <img className="w-[140px]" src={fuzzy} alt="fuzzy" />
            </div>
            <div className="flex text-center justify-center mt-10">
              <h3 className="text-white font-medium text-md font-Manrope">
                Fuzzy: Text Customizer & Color
              </h3>
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-white opacity-70 text-sm font-normal font-Inter">
                Designed for iPad/iPhone
              </p>
            </div>
            <div className="flex justify-center text-center mt-[37px]">
              <p className="text-white opacity-70 max-w-[342px] text-sm font-normal font-Inter">
                Customize any text and read faster! Discover Fuzzy’s power!
              </p>
            </div>
            <div className="flex justify-center mt-10 pb-12">
              <img className="unlock_bg px-5 py-4" src={unlock} alt="unlock" />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center mt-[140px]"
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="500"
          data-aos-easing="linear"
        >
          <img className="max-h-[240px]" src={logo} alt="logo" />
        </div>
        <div className="flex justify-center mt-[18px]">
          <p className="text-sm font-normal font-Inter text-white opacity-70">
            see more in Appstun
          </p>
        </div>
        <div className="flex justify-center mt-10 lg:pb-[100px]">
          <div className="px-10 cursor-pointer rounded-[38px] py-4 inline-block bg-gradient-to-r from-red-500 to-indigo-600 hover:from-indigo-700 hover:to-red-600 delay-1000">
            <button className="text-white font-Manrope font-normal text-sm">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

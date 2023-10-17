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
    <div className="bg-Hero-bg pt-14 mt-[-2px]">
      <div className="container mx-auto">
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
        <div className="lg:flex justify-between gap-x-[52px]">
          <div className="w-full mt-[100px] overflow-hidden relative rounded-3xl bg-card-2 cursor-pointer ">
            <img className=" absolute w-full" src={shadow1} alt="shadow" />
            <div className="flex justify-center pt-20">
              <img src={clock} alt="clock" />
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
              <img src={unlock} alt="unlock" />
            </div>
          </div>
          <div className="w-full mt-[100px] overflow-hidden relative rounded-3xl bg-card-2 cursor-pointer">
            <img
              className=" absolute w-full bottom-0"
              src={shadow2}
              alt="shadow2"
            />
            <div className="flex justify-center pt-20">
              <img src={phone} alt="phone" />
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
              <img src={unlock} alt="unlock" />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between gap-x-[52px]">
          <div className="w-full lg:mt-[54px] overflow-hidden relative mt-[100px] rounded-3xl bg-card-2 cursor-pointer">
            <img
              className="absolute bottom-0 right-0 w-full"
              src={shadow3}
              alt=""
            />
            <div className="flex justify-center pt-20">
              <img src={bag} alt="bag" />
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
              <img src={unlock} alt="unlock" />
            </div>
          </div>
          <div className="w-full lg:mt-[54px] overflow-hidden relative mt-[100px] rounded-3xl bg-card-2 cursor-pointer">
            <img className="w-full absolute " src={shadow4} alt="shadow" />
            <div className="flex justify-center pt-20">
              <img src={fuzzy} alt="fuzzy" />
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
              <img src={unlock} alt="unlock" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[140px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-center mt-[18px]">
          <p className="text-sm font-normal font-Inter text-white opacity-70">
            see more in Appstun
          </p>
        </div>
        <div className="flex justify-center mt-10 pb-[150px]">
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

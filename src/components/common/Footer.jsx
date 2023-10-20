import React from "react";
import logo from "../../assets/img/webp/logo.webp";
import line from "../../assets/img/webp/line.webp";
import { BolIcon, InstagramIcon, MessageIcon } from "./Icon";

const Footer = () => {
  return (
    <div className="bg-black rounded-tl-[60px] rounded-tr-[60px]">
      <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <div className="lg:flex justify-between">
          <div className="flex  justify-center lg:justify-start">
            <div className=" lg:max-w-[372px] pt-14 lg:pt-[70px]">
              <div className="flex justify-center lg:justify-start">
                <img src={logo} alt="logo" />
              </div>
              <p className="opacity-70 text-center lg:text-start text-white text-sm font-normal font-Inter leading-7 mt-6">
                SellYourApp is an Appstun organization. Appstun is a global
                mobile app company that buys, builds, and grows mobile apps.
              </p>
              <div className="flex justify-center lg:justify-start gap-5 mt-[26px]">
                <div className="hover:translate-y-[-7px] duration-300">
                  <InstagramIcon />
                </div>
                <div className="hover:translate-y-[-7px] duration-300">
                  <MessageIcon />
                </div>
                <div className="hover:translate-y-[-7px] duration-300">
                  <BolIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex lg:justify-start justify-center lg:gap-20 sm:gap-28">
            <ul className="text-center sm:text-start mt-10 lg:mt-[90px] flex flex-col">
              <li className="text-white font-Inter font-medium text-sm mt-4">
                Quick Links
              </li>
              <li>
                <a className="opacity-80 text-white hover:opacity-60 inline-block font-Inter cursor-pointer mb-0 font-medium text-sm mt-4">
                  About
                </a>
              </li>
              <li>
                <a className="opacity-80 text-white hover:opacity-60 inline-block font-Inter cursor-pointer mb-0 font-medium text-sm mt-3">
                  App Sale process
                </a>
              </li>
              <li>
                <a className="opacity-80 text-white hover:opacity-60 inline-block font-Inter cursor-pointer mb-0 font-medium text-sm mt-3">
                  Why Us?
                </a>
              </li>
              <li>
                <a className="opacity-80 text-white hover:opacity-60 inline-block font-Inter cursor-pointer mb-0 font-medium text-sm mt-3">
                  Our App
                </a>
              </li>
            </ul>
            <ul className="text-center sm:text-start mt-10 lg:mt-[90px]  mb-12 llg:mb-0">
              <li className="text-white font-Inter font-medium text-sm mt-4">
                Information
              </li>
              <li>
                <a className="opacity-80 text-white hover:opacity-60 inline-block font-Inter cursor-pointer mb-0 font-medium text-sm mt-4">
                  Contact
                </a>
              </li>
              <li>
                <a className="opacity-80 text-white hover:opacity-60 inline-block font-Inter cursor-pointer mb-0 font-medium text-sm mt-3">
                  support@appstun.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:mt-4 mt-12">
          <img className="w-full" src={line} alt="line" />
        </div>
        <div className="flex text-center justify-center sm:py-6 py-4">
          <p className="flex items-center opacity-70 text-white text-sm font-normal font-Inter leading-7 ">
            Copyright &copy; Appstun All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

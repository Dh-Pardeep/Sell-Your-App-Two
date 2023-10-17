import React from "react";
import logo from "../../assets/img/webp/logo.webp";
import line from "../../assets/img/webp/line.webp";
import { BolIcon, CopyIcon, InstagramIcon, MessageIcon } from "./Icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black rounded-tl-[60px] rounded-tr-[60px]">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="flex  justify-center lg:justify-start">
            <div className=" lg:max-w-[372px] pt-[70px]">
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
            <ul className="text-center sm:text-start mt-[90px]">
              <li className="text-white font-Inter font-medium text-sm mt-4">
                Quick Links
              </li>
              <li>
                <Link className="opacity-80 text-white font-Inter cursor-pointer mb-0 font-medium text-sm mt-3 inline-block  relative after:content-[''] after:w-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300 after:bg-white after:absolute after:-bottom-[2px] hover:after:left-0 hover:after:w-full after:left-[50%]">
                  About
                </Link>
              </li>
              <li>
                <Link className="opacity-80 text-white font-Inter cursor-pointer mb-0 font-medium text-sm mt-3 inline-block  relative after:content-[''] after:w-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300 after:bg-white after:absolute after:-bottom-[2px] hover:after:left-0 hover:after:w-full after:left-[50%]">
                App Sale process
                </Link>
              </li>
              <li>
                <Link className="opacity-80 text-white font-Inter cursor-pointer mb-0 font-medium text-sm mt-3 inline-block  relative after:content-[''] after:w-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300 after:bg-white after:absolute after:-bottom-[2px] hover:after:left-0 hover:after:w-full after:left-[50%]">
                Why Us?
                </Link>
              </li>
              <li>
                <Link className="opacity-80 text-white font-Inter cursor-pointer mb-0 font-medium text-sm mt-3 inline-block  relative after:content-[''] after:w-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300 after:bg-white after:absolute after:-bottom-[2px] hover:after:left-0 hover:after:w-full after:left-[50%]">
                Our App 
                </Link>
              </li>
            </ul>
            <ul className="text-center sm:text-start mt-[90px]  mb-12 llg:mb-0">
              <li className="text-white font-Inter font-medium text-sm mt-4">
                Information
              </li>
              <li>
                <Link className="opacity-80 text-white font-Inter cursor-pointer mb-0 font-medium text-sm mt-3 inline-block  relative after:content-[''] after:w-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300 after:bg-white after:absolute after:-bottom-[2px] hover:after:left-0 hover:after:w-full after:left-[50%]">
                Contact
                </Link>
              </li>
              <li>
                <Link className="opacity-80 text-white font-Inter cursor-pointer mb-0 font-medium text-sm mt-3 inline-block  relative after:content-[''] after:w-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300 after:bg-white after:absolute after:-bottom-[2px] hover:after:left-0 hover:after:w-full after:left-[50%]">
                support@appstun.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 mb-6">
          <img className="w-full" src={line} alt="line" />
        </div>
        <div className="flex text-center justify-center pb-6">
          <p className="flex items-center opacity-70 text-white text-sm font-normal font-Inter leading-7">
            Copyright
            <span className="mx-1.5">
              <CopyIcon />
            </span>
            Appstun All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

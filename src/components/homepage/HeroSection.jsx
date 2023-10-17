import React from 'react'
import { Link } from 'react-router-dom'
import Hero_Men_img from '../../assets/img/png/Hero_men_img.png'
import Hero_A_Svg from '../../assets/img/svg/hero_A_svg.svg'
import HeaderNav from '../common/HeaderNav'
const HeroSection = () => {
  return (
    <div className='bg-Hero-bg rounded-br-[32px] rounded-bl-[32px]  relative overflow-hidden'>
      <div className="absolute w-[399.25px] h-[679.76px] origin-top-left rotate-[26.13deg] bg-indigo-600 bg-opacity-20 blur-[150px]  z-10" />
      <div className="absolute right-0 w-[546.90px] h-[878.92px] origin-top-left rotate-[26.13deg] bg-red-500 bg-opacity-20 blur-[407px]" />
      <HeaderNav />
      <div className="container mx-auto">
        <div className='mt-44 sm:mt-52 lg:mt-60 flex flex-col xl:flex-row relative z-20'>
          <div className='w-full xl:w-6/12 xl:mt-16'>
            <div className="xl:max-w-[560px] text-white text-[35px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-xl font-bold font-Manrope">Selling Mobile Apps Made Simple.</div>
            <div className="xl:max-w-[547px] opacity-70 text-white text-[14px] md:text-base font-normal font-['Inter'] leading-[170%] pt-4 pb-[46px]">Looking to sell your mobile app? We buy iOS apps in different categories and revenue levels. We promise 14 days from contact to exit with the best valuation guarantee. Most of our partners are indie developers, studios and companies.</div>
            <div className=" pb-14 md:pb-[75px] ">
              <Link className=" text-white text-[14px] md:text-base font-bold font-Manrope leading-[170%] inline-block common_btn px-10 py-4 bg-gradient-to-r from-red-500 to-indigo-600 hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300 ">Sell Your App</Link>
            </div>
          </div>
          <div className='w-full xl:w-6/12 '>
            <div className='relative'>
              <div className="p-3 lg:p-[25px] bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-30 backdrop-blur-[51.14px] justify-center items-start gap-[32.73px] inline-flex md:absolute bottom-28 left-[13%] lg:left-[16%] lg:bottom-44 xl:bottom-40 xl:left-[-5%] mb-10  md:mb-0">
                <img className="w-[61.37px] h-[61.37px] rounded-full" src={Hero_A_Svg} />
                <div className="max-w-[109.45px] text-white text-xsm md:text-base  font-normal font-Inter leading-[170%]">We Buy Your iOS Apps</div>
              </div>
              <img className='md:w-[70%] lg:w-[80%] xl:w-full xl:h-[550px] mx-auto ' src={Hero_Men_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;

import React, { useEffect, useRef } from 'react'
import Hero_Men_img from '../../assets/img/webp/Hero_men_img.webp'
import Hero_A_Svg from '../../assets/img/svg/hero_A_svg.svg'
import HeaderNav from '../common/HeaderNav'
import VanillaTilt from 'vanilla-tilt'
const HeroSection = () => {
  const tiltRef = useRef(null);
  useEffect(() => {
    const element = tiltRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 15,
        speed: 500,
      });
    }
    return () => {
      if (element) {
        element.vanillaTilt.destroy();
      }
    };
  }, []);
  return (
    <div className='bg-Hero-bg rounded-br-[32px] rounded-bl-[32px]  relative overflow-hidden mb-12'>
      <div className="absolute left-28 w-[400px] h-[670px] origin-top-left rotate-[27deg] bg-indigo-600 bg-opacity-20 blur-[100px]  z-10" />
      <div className="absolute -right-60 w-[545px] h-[878px] origin-top-left rotate-[26.13deg] bg-red-500 bg-opacity-20 blur-[270px]" />
      <HeaderNav />
      <div className="container xl:w-[1140px] 2xl:w-[1320px]  px-3 sm:px-5 xl:px-0 mx-auto">
        <div className='mt-44 sm:mt-52 lg:mt-60 flex flex-col xl:flex-row relative z-20'>
          <div className='w-full xl:w-6/12 xl:mt-16'>
            <div className="xl:max-w-[560px] text-white text-lg sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-xl font-bold leading-normal font-Manrope">Selling Mobile Apps Made Simple.</div>
            <div className="xl:max-w-[556px] opacity-70 text-white text-xsm md:text-sm font-normal font-Inter leading-[170%] pt-4 pb-12">Looking to sell your mobile app? We buy iOS apps in different categories and revenue levels. We promise 14 days from contact to exit with the best valuation guarantee. Most of our partners are indie developers, studios and companies.</div>
            <div className="pb-14 sm:pb-0 lg:pb-20 ">
              <button aria-label='Sell Your App' className=" text-white text-xsm md:text-sm font-bold font-Manrope leading-[170%] inline-block  py-3 px-8 md:px-10 md:py-4 bg-gradient-to-r from-red-500 to-indigo-600 hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300 ">Sell Your App</button>
            </div>
          </div>
          <div className='w-full xl:w-6/12 '>
            <div className='relative'>
              <div ref={tiltRef} data-tilt className="p-3 lg:p-6 bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-30 backdrop-blur-[51.14px] justify-center items-start gap-[32.73px] inline-flex sm:absolute bottom-40 left-8 md:left-24 md:bottom-28 lg:left-48 lg:bottom-52 xl:bottom-40 xl:left-10 z-10 mb-10  sm:mb-0 cursor-pointer" data-aos="fade-right" data-aos-duration="700" data-aos-delay="3000" data-aos-easing="linear">
                <img className=" h-[60px] rounded-full w-[60px]" src={Hero_A_Svg}  alt='A Tag Image'/>
                <div className="max-w-[109.45px] text-white text-xsm md:text-sm  font-normal font-Inter leading-[170%]">We Buy Your iOS Apps</div>
              </div >
              <img className=' min-w-[330px] md:w-[70%] lg:w-[80%] xl:w-full xl:h-[554px] mx-auto xl:translate-x-[10%] min-h-[280px]' src={Hero_Men_img} alt="Hero_Men_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;

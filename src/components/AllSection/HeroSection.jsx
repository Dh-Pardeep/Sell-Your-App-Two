import React from 'react'
import { Link } from 'react-router-dom'
import Hero_Men_img from '../../assets/img/png/Hero_men_img.png'
import Hero_A_Svg from '../../assets/img/svg/hero_A_svg.svg'
import HeaderNav from '../common/HeaderNav'
import HeroImgBackgroud from '../../assets/img/png/heroBackGroundImg.png'
const HeroSection = () => {
  return (
    <section className='bg-Hero-bg rounded-br-[32px] rounded-bl-[32px]  relative overflow-hidden'>
      <div className="absolute w-[399.25px] h-[679.76px] origin-top-left rotate-[26.13deg] bg-indigo-600 bg-opacity-20 blur-[150px]" />
      <div className="absolute right-0 w-[546.90px] h-[878.92px] origin-top-left rotate-[26.13deg] bg-red-500 bg-opacity-20 blur-[407px]" />
      <HeaderNav />
      <div className="container mx-auto">
        <div className='mt-80'>
          <div className='w-6/12'>
            <div className="max-w-[560px] text-white text-xl font-bold font-Manrope">Selling Mobile Apps Made Simple.</div>
            <div className="w-[547px] opacity-70 text-white text-base font-normal font-['Inter'] leading-[170%] pt-4 pb-[46px]">Looking to sell your mobile app? We buy iOS apps in different categories and revenue levels. We promise 14 days from contact to exit with the best valuation guarantee. Most of our partners are indie developers, studios and companies.</div>
            <div className=" px-10 py-4 bg-gradient-to-r from-red-500 to-indigo-600 rounded-[38px] justify-center items-center gap-2.5 inline-flex mb-[75px]">
              <Link className=" text-white text-base font-bold font-Manrope leading-[170%] inline-block">Sell Your App</Link>
            </div>
          </div>
          <div className='w-6/12'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;

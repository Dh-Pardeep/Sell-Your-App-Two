import React from 'react'
import { Check, Highest, Safe, Transparency } from '../common/Icon'
import about_vector from '../../assets/img/webp/about_us_vector.webp'

const AboutUs = () => {
    return (
        <div className='bg-Hero-bg  py-14 md:py-20 lg:pt-[104px] lg:pb-[113px]  overflow-hidden relative'>
              <div className='absolute bottom-36 left-4 sm:w-[193px] w-[100px] sm:h-[195px] h-[100px] rounded-[137px] opacity-50 about_us_bg_shadow blur-[80px]'></div>
            <img className='absolute bottom-[-22%] left-[0] min-h-[200px]' src={about_vector} alt="shadow" />
            <div className='container mx-auto xl:w-[1140px] 2xl:w-[1320px] px-3 sm:px-5 xl:px-0'>
                <div className='w-full flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-6/12 lg:mb-0 mb-10' data-aos="fade-right" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear">
                        <h3 className='leading-[170%] font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>About Us</h3>
                        <p className='leading-[170%] font-Inter text-xsm lg:text-sm font-normal text-white opacity-70 mb-4 lg:max-w-[533px]'>Appstun is a global mobile app company that buys, builds, and grows mobile apps. We’ve served millions of users worldwide since 2021.</p>
                        <p className='leading-[170%] font-Inter text-xsm lg:text-sm font-normal text-white opacity-70 mb-4 lg:max-w-[590px]'>Founded in 2021 by a team of passionate and creative developers and designers. We’ve built over 50 apps across multiple platforms and served millions of users flawlessly with an average rating of 4.8</p>
                        <p className='leading-[170%] font-Inter text-xsm lg:text-sm font-normal text-white opacity-70 lg:mb-8 mb-4 lg:max-w-[533px]'>We buy mobile apps and allow developers to make cash out exits with a fair valuation. If you are looking to sell your app, we’re here to purchase it!</p>
                        <p className='leading-[170%] font-Inter text-xsm lg:text-sm font-normal text-white opacity-70 lg:mb-11 mb-10'>If you want to know more about us, explore Appstun.</p>
                        <button className='text-white text-xsm md:text-sm font-bold font-Manrope leading-[170%] inline-block px-8 py-3 md:px-10  md:py-4 bg-gradient-to-r from-red-500 to-indigo-600 hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300 relative z-10'>Sell Your App</button>
                    </div>
                    <div className='w-full lg:w-6/12 flex lg:flex-col flex-wrap gap-4 lg:items-end items-center justify-center' data-aos="fade-left" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear">
                        <div className='flex lg:flex-col md:flex-row flex-col gap-4 lg:gap-0' >
                            <div className='bg-Hero-bg max-w-[395px] cursor-pointer z-[1]  mb-5 rounded-[12px] border border-[rgb(51_23_63)] lg:ps-6 lg:pe-10 lg:py-5 p-5 bg-[rgba(255_255_255_0.04)] inline-block relative'>
                                <span className='absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1] hidden lg:block'><Transparency /></span>
                                <span><Check /></span>
                                <h3 className='mt-6 font-Manrope text-[20px] lg-[22px] xl:text-md font-medium text-white mb-1'>Transparency</h3>
                                <p className='mb-0 leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 md:max-w-[331px]'>We value transparency. You can ask any question and have a call with us any time during the sales process.</p>
                            </div>
                            <div className='bg-Hero-bg max-w-[395px] cursor-pointer z-[1] relative w-ful  mb-5 rounded-[12px] border border-[rgb(51_23_63)] lg:ps-6 lg:pe-10 lg:py-5 p-5 bg-[rgba(255_255_255_0.04)] inline-block'>
                                <span className='absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1] hidden lg:block'><Highest /></span>
                                <span><Check /></span>
                                <h3 className='mt-6 font-Manrope text-[20px] lg-[22px] xl:text-md font-medium text-white mb-1'>Highest price guarantee</h3>
                                <p className='mb-0 leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 md:max-w-[331px]'>We promise to give you the best offer for your mobile app.</p>
                            </div>
                        </div>
                        <div className='bg-Hero-bg max-w-[395px] cursor-pointer z-[1] relative  rounded-[12px] border border-[rgb(51_23_63)] lg:ps-6 lg:pe-5 plg:y-5 p-5 bg-[rgba(255_255_255_0.04)] inline-block'>
                            <span className='absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1] hidden lg:block'><Safe /></span>
                            <span><Check /></span>
                            <h3 className='mt-6 font-Manrope text-[20px] lg-[22px] xl:text-md font-medium text-white mb-1'>Safe Process</h3>
                            <p className='mb-0 leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 md:max-w-[351px]'>We partner with escrow.com, the biggest and  most trusted escrow platform in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
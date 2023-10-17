import React from 'react'

const AboutYou = () => {
    return (
        <div className='py-10 lg:py-[104px]' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="linear">
            <div className='container mx-auto flex justify-center' >
                <div className='relative about_bg sm:p-[40px] p-[12px] w-[922px] rounded-[40px]' >
                    <div className='absolute top-[36px] left-[20px] sm:w-[193px] w-[100px] sm:h-[195px] h-[100px] rounded-[137px] opacity-50 about_ellipse'></div>
                    <div className='absolute bottom-[-15px] right-[20px] sm:w-[193px] sm:h-[195px] rounded-[137px] opacity-50 about_ellipse'></div>
                    <h2 className="text-dark text-center text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium mb-4 font-Manrope">Tell us about your app</h2>
                    <p className='leading-[170%] text-center text-[15px] lg:text-sm font-normal text-dark opacity-70 sm:mb-[44px] mb-4 font-Inter max-w-[890px]'> If you have a non-gaming ios app with 5000+ monthly downloads and it's been on the App Store for more than a year, we're interested in buying it!</p>
                    <div className='sm:px-[23px] sm:mb-[44px] mb-4'>
                        <div className='flex flex-col sm:flex-row sm:gap-6 gap-3 sm:mb-6 mb-3'>
                            <input className='outline-none leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]' type="text" placeholder='Your Name' />
                            <input required className='outline-none leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]' type="text" placeholder='Your Email' />
                        </div>
                        <div className='flex sm:gap-6 gap-3 sm:mb-6 mb-3 flex-col sm:flex-row'>
                            <input required className='outline-none leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]' type="text" placeholder='Revenue Last Month' />
                            <input className='outline-none leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]' type="text" placeholder='Download Last Month' />
                        </div>
                        <input required className='outline-none leading-[170%] px-2 w-full sm:mb-6 mb-3 text-[15px] lg:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]' type="text" placeholder='App URL...' />
                        <textarea className='resize-none outline-none leading-[170%] px-2 w-full height-[74px] text-[15px] lg:text-sm font-normal opacity-90 text-black-light font-Inter bg-white ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[rgba(28_28_28_0.08)]' type="text" placeholder='Anything else you’d like us to know...' />
                    </div>
                    <div className='flex justify-center sm:mb-[44px] mb-4'><button className='text-white text-[14px] md:text-base font-bold font-Manrope leading-[170%] inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-indigo-600 hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300 ' >Submit Now</button></div>
                    <div className='flex justify-center sm:pb-0 pb-3'><p className='font-Manrope text-center about_text opacity-70 border border-[#FF3939] capitalize text-[17px] md:text-[18px] xl:text-xmd sm:px-[40px] px-1 sm:py-5 py-2 rounded-xl inline-block'data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="linear">We guarantee to give you an offer within 48 hours</p></div>
                </div>
            </div>
        </div>
    )
}

export default AboutYou
import React from 'react'

const AboutYou = () => {
    return (
        <section>
            <div className='container mx-auto flex justify-center'>
                <div className='relative  about_bg sm:p-[40px] p-[12px] w-[922px] rounded-[40px] shadow-[4px_5px_65px_0px_rgba(0, 0, 0, 0.06)]'>
                    <div className='absolute top-[36px] left-[10px] sm:w-[193px] w-[100px] sm:h-[195px] h-[100px] rounded-[137px] opacity-50 about_ellipse'></div>
                    <div className='absolute bottom-[-15px] right-[10px] sm:w-[193px] sm:h-[195px] rounded-[137px] opacity-50 about_ellipse'></div>
                    <h2 className="text-dark text-center text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium mb-4 font-Manrope">Tell us about your app</h2>
                    <p className='leading-[170%] text-center text-[15px] lg:text-sm font-normal text-dark opacity-70 sm:mb-[44px] mb-4 font-Inter max-w-[890px]'> If you have a non-gaming ios app with 5000+ monthly downloads and it's been on the App Store for more than a year, we're interested in buying it!</p>
                    <div className='sm:px-[23px] sm:mb-[44px] mb-4'>
                        <div className='flex flex-col sm:flex-row sm:gap-6 gap-3 sm:mb-6 mb-3'>
                            <input className='leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Your Name' />
                            <input required className='leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Your Email' />
                        </div>
                        <div className='flex sm:gap-6 gap-3 sm:mb-6 mb-3 flex-col sm:flex-row'>
                            <input required className='leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Revenue Last Month' />
                            <input className='leading-[170%] px-2 w-full text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Download Last Month' />
                        </div>
                        <input required className='leading-[170%] px-2 w-full sm:mb-6 mb-3 text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='App URL...' />
                        <textarea className='leading-[170%] px-2 w-full height-[74px] text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Anything else you’d like us to know...' />
                    </div>
                    <div className='flex justify-center sm:mb-[44px] mb-4'><button className='leading-[174%] font-Manrope font-bold text-[15px] lg:text-sm text-white py-[15px] px-[43px] leading-[170%] rounded-[38px] submit_btn border border-[transparent]'>Submit Now</button></div>
                    <div className='flex justify-center sm:pb-0 pb-3'><p className='text-center about_text opacity-70 border border-[#FF3939] capitalize text-[17px] md:text-[18px] xl:text-xmd sm:px-[40px] px-1 sm:py-5 py-2 rounded-xl inline-block'>We guarantee to give you an offer within 48 hours</p></div>
                </div>
            </div>
        </section>
    )
}

export default AboutYou
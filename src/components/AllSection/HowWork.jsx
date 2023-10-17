import React from 'react'
import { ContactIcon } from '../common/Icon'

const HowWork = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='pt-[100px]'>
                    <h2 className="text-center text-dark text-[34px] font-medium font-Manrope leading-normal">How it Works?</h2>
                    <p className="max-w-[491px] mx-auto opacity-70 text-center text-dark text-base font-normal font-Inter leading-[170%] pt-4">After buying countless apps, we have designed a 5-step simple process. It’s fast, simple and transparent.</p>
                </div>
                <div className='flex '>
                    <div className='w-1/2'></div>
                    <div className='w-1/2 flex flex-col  mt-20'>
                        <div className='w-[69px] h-[69px] bg-white rounded-full wrapper border'>
                            <div className="text-center  firstDay"><span className=" text-sm font-medium font-Manrope">1st<br /></span><span className=" text-sm font-normal  font-Manrope">Day</span></div>
                        </div>
                        <div className='flex flex-col mt-4 ms-40'>
                            <div className="w-16 h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                                <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                                    <div className="w-[32.06px] h-[30.58px] relative">
                                        <ContactIcon />
                                    </div>
                                </div>
                            </div>
                            <h2 className=" text-start  text-dark text-[34px] font-medium font-Manrope mb-2 mt-4">Contact</h2>
                            <p className=" text-start opacity-70 text-dark text-base font-normal font-Inter leading-[170%]">Developers submit a form via our website.</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col items-end  '>
                        <div className='flex items-end flex-col mt-4 me-40'>
                            <div className="w-16 h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                                <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                                    <div className="w-[32.06px] h-[30.58px] relative">
                                        <ContactIcon />
                                    </div>
                                </div>
                            </div>
                            <h2 className=" text-start  text-dark text-[34px] font-medium font-Manrope mb-2 mt-4">Review</h2>
                            <p className="  opacity-70 text-dark text-base font-normal font-Inter leading-[170%] text-end max-w-[441px]">We review app’s analytics and performance. We also ask some questions to give the best offer.</p>
                        </div>
                    </div>
                    <div className='w-1/2'></div>
                </div>
                <div className='flex'>
                    <div className='w-1/2'></div>
                    <div className='w-1/2 flex flex-col  '>
                        <div className='flex flex-col mt-4 ms-40'>
                            <div className="w-16 h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                                <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                                    <div className="w-[32.06px] h-[30.58px] relative">
                                        <ContactIcon />
                                    </div>
                                </div>
                            </div>
                            <h2 className=" text-start  text-dark text-[34px] font-medium font-Manrope mb-2 mt-4">Offer</h2>
                            <p className=" text-start opacity-70 text-dark text-base font-normal font-Inter leading-[170%] max-w-[395px]">We present a price offer to buy the app. We make the offer based on the information we had in Review step.</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col items-end  '>
                        <div className='flex items-end flex-col mt-4 me-40'>
                            <div className="w-16 h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                                <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                                    <div className="w-[32.06px] h-[30.58px] relative">
                                        <ContactIcon />
                                    </div>
                                </div>
                            </div>
                            <h2 className=" text-start  text-dark text-[34px] font-medium font-Manrope mb-2 mt-4">Agreement</h2>
                            <p className="  opacity-70 text-dark text-base font-normal font-Inter leading-[170%] text-end max-w-[441px]">Both parties sign an agreement and start the transaction with escrow.com. We deposit the money and developer transfers the app. After that, we inspect the app for 1 week.</p>
                        </div>
                    </div>
                    <div className='w-1/2'></div>
                </div>
                <div className='flex'>
                    <div className='w-1/2'></div>
                    <div className='w-1/2 flex flex-col  '>
                        <div className='flex flex-col mt-4 ms-40'>
                            <div className="w-16 h-16 p-[13px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-[54px] border  justify-center items-center inline-flex ">
                                <div className="w-[38px] h-[38px] relative flex-col justify-start items-start flex">
                                    <div className="w-[32.06px] h-[30.58px] relative">
                                        <ContactIcon />
                                    </div>
                                </div>
                            </div>
                            <h2 className=" text-start  text-dark text-[34px] font-medium font-Manrope mb-2 mt-4">Closing</h2>
                            <p className=" text-start opacity-70 text-dark text-base font-normal font-Inter leading-[170%] max-w-[395px]">After 1 week of inspection period, escrow release the payment and everything is done. Escrow will send the money to developer’s bank account in 2-3 days.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-10 pb-20'><p className='text-center about_text opacity-70 border border-[#FF3939] capitalize text-[17px] md:text-[18px] xl:text-xmd sm:px-[40px] px-1 sm:py-5 py-2 rounded-xl inline-block '>The entire process takes 14 days from contact to closing.</p></div>
            </div>
        </section>
    )
}

export default HowWork
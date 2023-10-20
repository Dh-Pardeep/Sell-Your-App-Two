import React from 'react'
import phone_img from '../../assets/img/png/phone_img.png'
import { Approve, LineDown, LineUP, Payments, Seller, Service, Terms } from '../common/Icon'
// import { Tilt } from 'react-tilt'
const Partnership = () => {
    // const defaultOptions = {
    //     reverse: false,  // reverse the tilt direction
    //     max: 35,     // max tilt rotation (degrees)
    //     perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale: .01,    // 2 = 200%, 1.5 = 150%, etc..
    //     speed: 1000,   // Speed of the enter/exit transition
    //     transition: true,   // Set a transition on enter/exit.
    //     axis: null,   // What axis should be disabled. Can be X or Y.
    //     reset: true,    // If the tilt effect has to be reset on exit.
    //     easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // }
    return (
        <div className='bg-Hero-bg py-14 lg:pt-[100px] lg:pb-[120px]'>
            <div className='container mx-auto xl:w-[1140px] 2xl:w-[1320px] px-3 sm:px-5 xl:px-0'>
                <h2 className='lg:mb-[60px] text-center leading-[170%] font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>Partnership</h2>
                <div className='w-full flex flex-col lg:flex-row items-center lg:mb-[134px] mb-10'>
                    <div className='w-full lg:w-6/12'>
                        <h2 className='font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4 lg:max-w-[480px] text-center lg:text-start'>Over $5 billion of transactions protected with <a className='hover:text-light-black' href="https://escrow.com"> escrow.com </a></h2>
                        <p className='lg:max-w-[437px] leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4 lg:text-start text-center'>Escrow.com is the world’s most secure payment method from a counterparty risk perspective - safeguarding both buyer and seller, all funds transacted using
                            escrow are kept in trust.</p>
                    </div>
                        <div className='lg:mt-0 mt-6'>
                            <img className='hover:scal-[.1]transition duration-400 ease-linear cursor-pointer' src={phone_img} alt="phone_img" />
                        </div>
                </div>
                <div className='flex xl:gap-10 gap-5 justify-center xl:flex-nowrap flex-wrap'>
                    <div className='partnership_box relative z-[2] rounded-[8px] border border-[rgba(62_51_73)] hover:border-[rgb(51_23_63)] transition duration-400 ease-linear cursor-pointer px-4 py-5 w-[207px]'>
                        <span className='partnership_ellipse hidden w-[132px] h-[134px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]'></span>
                        <span className='absolute top-[-37%] right-[-22%] xl:block hidden'><LineUP /></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white flex justify-center items-center'><Terms /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Buyer and Seller agree to terms</p>
                    </div>
                    <div className='partnership_box z-[2] relative rounded-[8px] border border-[rgba(62_51_73)] hover:border-[rgb(51_23_63)] transition duration-400 ease-linear cursor-pointer ps-4 pe-2 py-5 w-[178px] xl:translate-y-[-80px]'>
                        <span className='partnership_ellipse hidden w-[132px] h-[134px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]'></span>
                        <span className='absolute bottom-[-37%] right-[-22%] xl:block hidden'><LineDown /></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white flex justify-center items-center'><Payments /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Buyer submits payment to Escrow</p>
                    </div>
                    <div className='partnership_box z-[2] relative rounded-[8px] border border-[rgba(62_51_73)] hover:border-[rgb(51_23_63)] transition duration-400 ease-linear cursor-pointer ps-4 pe-3 py-5 w-[206px]'>
                        <span className='partnership_ellipse hidden w-[132px] h-[134px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]'></span>
                        <span className='absolute top-[-37%] right-[-22%] xl:block hidden'><LineUP /></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white flex justify-center items-center'><Service /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Seller delivers goods or service to buyer</p>
                    </div>
                    <div className='partnership_box z-[2] relative rounded-[8px] border border-[rgba(62_51_73)] hover:border-[rgb(51_23_63)] transition duration-400 ease-linear cursor-pointer ps-4 pe-[10px] py-5 w-[197px] xl:translate-y-[-80px]'>
                        <span className='partnership_ellipse hidden w-[132px] h-[134px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]'></span>
                        <span className='absolute bottom-[-37%] right-[-22%] xl:block hidden'><LineDown /></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white flex justify-center items-center'><Approve /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Buyer approves goods or services</p>
                    </div>
                    <div className='partnership_box z-[2] rounded-[8px] border border-[rgba(62_51_73)] hover:border-[rgb(51_23_63)] transition duration-400 ease-linear cursor-pointer ps-4 pe-3 py-5 w-[190px]'>
                        <span className='partnership_ellipse hidden w-[132px] h-[134px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]'></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white flex justify-center items-center'><Seller /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Escrow.com releases payment to seller</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnership
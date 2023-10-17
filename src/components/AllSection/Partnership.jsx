import React from 'react'
import phone_img from '../../assets/img/png/phone_img.png'
import { Approve, LineDown, LineUP, Payments, Seller, Service, Terms } from '../common/Icon'

const Partnership = () => {
    return (
        <section className='bg-Hero-bg sm:py-10 py-6 lg:pt-[100px] lg:pb-[120px]'>
            <div className='container mx-auto'>
                <h2 className='mb-[60px] text-center leading-[170%] font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>Partnership</h2>
                <div className='w-full flex flex-col lg:flex-row items-center mb-[134px]'>
                    <div className='w-full lg:w-6/12 lg:mb-0 mb-10'>
                        <h2 className='font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>Over $5 billion of transactions protected with escrow.com</h2>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4'>Escrow.com is the world’s most secure payment method <span className='lg:block'> from a counterparty risk perspective - safeguarding both</span> buyer and seller, all funds transacted using
                            <span className='lg:block'> escrow are kept in trust.</span></p>
                    </div>
                    <div>
                        <img src={phone_img} alt="phone_img" />
                    </div>
                </div>
                <div className='flex xl:gap-10 gap-5 justify-center xl:flex-nowrap flex-wrap'>
                    <div className='relative rounded-[8px] border border-[rgba(255_255_255_0.1)] hover:border-[#FF3939] transition duration-400 ease-linear cursor-pointer px-5 py-5 w-[207px]'>
                        <span className='absolute top-[-37%] right-[-22%] xl:block hidden'><LineUP/></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white inline-block flex justify-center items-center'><Terms /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Buyer and Seller agree to terms</p>
                    </div>
                    <div className='relative rounded-[8px] border border-[rgba(255_255_255_0.79)] hover:border-[#FF3939] transition duration-400 ease-linear cursor-pointer px-5 py-5 w-[207px] xl:translate-y-[-80px]'>
                    <span className='absolute bottom-[-37%] right-[-22%] xl:block hidden'><LineDown/></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white inline-block flex justify-center items-center'><Payments /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Buyer submits payment to Escrow</p>
                    </div>
                    <div className='relative rounded-[8px] border border-[rgba(255_255_255_0.79)] hover:border-[#FF3939] transition duration-400 ease-linear cursor-pointer px-5 py-5 w-[207px]'>
                    <span className='absolute top-[-37%] right-[-22%] xl:block hidden'><LineUP/></span>  
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white inline-block flex justify-center items-center'><Service /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Seller delivers goods or service to buyer</p>
                    </div>
                    <div className='relative rounded-[8px] border border-[rgba(255_255_255_0.79)] hover:border-[#FF3939] transition duration-400 ease-linear cursor-pointer px-5 py-5 w-[207px] xl:translate-y-[-80px]'>
                    <span className='absolute bottom-[-37%] right-[-22%] xl:block hidden'><LineDown/></span>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white inline-block flex justify-center items-center'><Approve /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Buyer approves goods or services</p>
                    </div>
                    <div className='rounded-[8px] border border-[rgba(255_255_255_0.79)] hover:border-[#FF3939] transition duration-400 ease-linear cursor-pointer px-5 py-5 w-[207px]'>
                        <span className='w-[64px] h-[64px] rounded-[50px] bg-white inline-block flex justify-center items-center'><Seller /></span>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white mt-4'>Escrow.com releases payment to seller</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partnership
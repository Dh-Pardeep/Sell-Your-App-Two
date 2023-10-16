import React from 'react'

const Partnership = () => {
    return (
        <section className='bg-Hero-bg pt-[100px]'>
            <div className='container mx-auto'>
                <h2 className='mb-[60px] text-center leading-[170%] font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>Partnership</h2>
                <div className='w-full flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-6/12 lg:mb-0 mb-10'>
                        <h2 className='font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>Over $5 billion of transactions protected with escrow.com</h2>
                        <p className='leading-[170%] font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4'>Escrow.com is the world’s most secure payment method <span className='lg:block'> from a counterparty risk perspective - safeguarding both</span> buyer and seller, all funds transacted using
                            <span className='lg:block'> escrow are kept in trust.</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partnership
import React from 'react'

const AboutUs = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto'>
                <div className='w-full flex flex-wrap flex-row'>
                    <div className='w-6/12'>
                        <h3 className='leading-[170%]font-Manrope text-[24px] md:text-[28px] lg:text-[30px] xl:text-lg font-medium text-white mb-4'>About Us</h3>
                        <p className='leading-[170%]font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4'>Appstun is a global mobile app company that buys, builds, and grows <span className='md:block'> mobile apps. We’ve served millions of users worldwide since 2021.</span></p>
                        <p className='leading-[170%]font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-4'>Founded in 2021 by a team of passionate and creative developers and  <span className='md:block'>designers. We’ve built over 50 apps across multiple platforms and served</span> millions of users flawlessly with an average rating of 4.8</p>
                        <p className='leading-[170%]font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-8'>We buy mobile apps and allow developers to make cash out exits with <span className='md:block'> a fair valuation. If you are looking to sell your app, we’re here to </span> purchase it!</p>
                        <p className='leading-[170%]font-Inter text-[15px] lg:text-sm font-normal text-white opacity-70 mb-[44px]'>If you want to know more about us, explore Appstun.</p>
                        <button>Sell Your App</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
import React from 'react'
import AboutYou from '../AllSection/AboutYou'
import AboutUs from '../AllSection/AboutUs' 
import WhyUs from "../AllSection/WhyUs";
import MyFooter from "../common/MyFooter";
import HeroSection from "../AllSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutYou />
      <AboutUs />
      <WhyUs />
      <MyFooter />
    </>


  )
}

export default HomePage;

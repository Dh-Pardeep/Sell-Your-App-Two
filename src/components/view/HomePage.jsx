import React from 'react'
import AboutYou from '../AllSection/AboutYou'
import AboutUs from '../AllSection/AboutUs'
import WhyUs from "../AllSection/WhyUs";
import MyFooter from "../common/MyFooter";
import HeroSection from "../AllSection/HeroSection";
import HowWork from '../AllSection/HowWork';
import Partnership from '../AllSection/Partnership'
import AppToday from "../AllSection/AppToday";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutYou />
      <Partnership />
      <AboutUs />
      <HowWork />
      <WhyUs />
      <AppToday />
      <MyFooter />
    </>


  )
}



export default HomePage;

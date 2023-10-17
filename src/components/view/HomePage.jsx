import React from 'react'
import AboutYou from '../AllSection/AboutYou'
import AboutUs from '../AllSection/AboutUs'
import WhyUs from "../AllSection/WhyUs";
import MyFooter from "../common/MyFooter";
import HeroSection from "../AllSection/HeroSection";
import HowWork from '../AllSection/HowWork';
import Partnership from '../AllSection/Partnership'
import AppToday from "../AllSection/AppToday";
import Explore from "../AllSection/Explore";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutYou />
      <Partnership />
      <AboutUs />
      <HowWork />
      <WhyUs />
      <Explore />
      <AppToday />
      <MyFooter />
    </>


  )
}



export default HomePage;

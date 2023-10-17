import React from 'react'
import AboutYou from '../homepage/AboutYou'
import AboutUs from '../homepage/AboutUs'
import WhyUs from "../homepage/WhyUs";
import MyFooter from "../common/MyFooter";
import HeroSection from "../homepage/HeroSection";
import HowWork from '../homepage/HowWork';
import Partnership from '../homepage/Partnership'
import AppToday from "../homepage/AppToday";
import Explore from "../homepage/Explore";
import BackToTop from '../common/BackToTop';

const HomePage = () => {
  return (
    <>
      <BackToTop />
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
  )}




export default HomePage;

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
import LoaderHome from '../common/LoaderHome';

const HomePage = () => {
  return (
    <>
      <BackToTop />
      <LoaderHome/>
      <HeroSection />
      <AboutYou />
      <AboutUs />
      <HowWork />
      <Partnership />
      <AboutYou />
      <WhyUs />
      <Explore />
      <AppToday />
      <MyFooter />
    </>
  )
}




export default HomePage;

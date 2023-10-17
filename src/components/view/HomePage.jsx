import React from 'react'
import AboutYou from '../homepage/AboutYou'
import AboutUs from '../homepage/AboutUs'
import WhyUs from "../homepage/WhyUs";
import HeroSection from "../homepage/HeroSection";
import HowWork from '../homepage/HowWork';
import Partnership from '../homepage/Partnership'
import AppToday from "../homepage/AppToday";
import Explore from "../homepage/Explore";
import BackToTop from '../common/BackToTop';
import LoaderHome from '../common/LoaderHome';
import React from "react";
import WhyUs from "../AllSection/WhyUs";
import HeaderNav from "../common/HeaderNav";
import HeroSection from "../AllSection/HeroSection";
import AppToday from "../AllSection/AppToday";
import Explore from "../AllSection/Explore";
import Footer from "../common/Footer";

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
      <HeroSection />
      <WhyUs />
      <Explore />
      <AppToday />
      <Footer />
    </>
  )
}




export default HomePage;

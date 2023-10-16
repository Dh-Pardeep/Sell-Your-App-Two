import React from 'react'
import HeaderNav from '../common/HeaderNav'
import HeroSection from '../AllSection/HeroSection'
import AboutYou from '../AllSection/AboutYou'
import AboutUs from '../AllSection/AboutUs'
import React from "react";
import WhyUs from "../AllSection/WhyUs";
import MyFooter from "../common/MyFooter";
import HeaderNav from "../common/HeaderNav";
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

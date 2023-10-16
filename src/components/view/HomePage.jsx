import React from "react";
import WhyUs from "../AllSection/WhyUs";
import MyFooter from "../common/MyFooter";
import HeaderNav from "../common/HeaderNav";
import HeroSection from "../AllSection/HeroSection";
import AppToday from "../AllSection/AppToday";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <AppToday />
      <MyFooter />
    </>
  );
};

export default HomePage;

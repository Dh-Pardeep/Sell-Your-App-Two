import React from "react";
import WhyUs from "../AllSection/WhyUs";
import MyFooter from "../common/MyFooter";
import HeaderNav from "../common/HeaderNav";
import HeroSection from "../AllSection/HeroSection";
import AppToday from "../AllSection/AppToday";
import Explore from "../AllSection/Explore";

const HomePage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <WhyUs />
      <Explore />
      <AppToday />
      <MyFooter />
    </>
  );
};

export default HomePage;

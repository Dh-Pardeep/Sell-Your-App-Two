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
      <HeroSection />
      <WhyUs />
      <Explore />
      <AppToday />
      <Footer />
    </>
  );
};

export default HomePage;

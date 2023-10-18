import React, { useEffect } from "react";
import AboutYou from "../homepage/AboutYou";
import AboutUs from "../homepage/AboutUs";
import WhyUs from "../homepage/WhyUs";
import HeroSection from "../homepage/HeroSection";
import HowWork from "../homepage/HowWork";
import Partnership from "../homepage/Partnership";
import AppToday from "../homepage/AppToday";
import Explore from "../homepage/Explore";
import BackToTop from '../common/BackToTop';
import LoaderHome from '../common/LoaderHome';
import Footer from "../common/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomePage = () => {
  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])
  return (
    <div className="overflow-hidden">
      {/* <BackToTop />
      <LoaderHome /> */}
      <HeroSection />
      <AboutYou />
      <AboutUs />
      <HowWork />
      <Partnership />
      <AboutYou />
      <WhyUs />
      <Explore />
      <AppToday />
      <Footer />
    </div>
  );
};



export default HomePage;

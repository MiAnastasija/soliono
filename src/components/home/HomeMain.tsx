import React from "react";
import HeroSection from "./HeroSection";
import CategoryArea from "./CategoryArea";
import JobArea from "./JobArea";
import HomeOneCounter from "./HomeOneCounter";
import TestimonialHomeOne from "./TestimonialHomeOne";
import ServiceHomeOne from "./ServiceHomeOne";
import AdsHomeOne from "./AdsHomeOne";
import BlogSecHomeOne from "./BlogSecHomeOne";
import BrandSlider from "./BrandSlider";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <CategoryArea />
      <JobArea />
      <HomeOneCounter />
      <TestimonialHomeOne />
      <ServiceHomeOne />
      <AdsHomeOne />
      {/*
      <BlogSecHomeOne />
      */}
      <BrandSlider />
    </>
  );
};

export default HomeMain;

import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import AboutArea from "./AboutArea";
import ServiceAbout from "./ServiceAbout";
import TeamAbout from "./TeamAbout";
import TestimonialSliderHomeTwo from "../home-two/TestimonialSliderHomeTwo";
import StaterAreaSec from "../home-two/StaterAreaSec";
import BrandHomeTwo from "../home-two/BrandHomeTwo";

const AboutMain = () => {
  return (
    <>
      <BreadCamb title="About Us" />
      <AboutArea />
      <ServiceAbout />
      <TeamAbout />
      <TestimonialSliderHomeTwo/>
      <StaterAreaSec/>
      <BrandHomeTwo/>
    </>
  );
};

export default AboutMain;

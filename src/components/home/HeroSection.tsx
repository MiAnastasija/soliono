"use client"
import Image from "next/image";
import React from "react";
import bgImg from "../../../public/assets/img/slider/hero-ackground.png"
import shapeOne from "../../../public/assets/img/shape/dot-shape.png"

import shapeThree from "../../../public/assets/img/slider/lik-profile.png"
import NiceSelect from "@/elements/NiceSelect";
import { categoryData } from "@/data/nice-select-data";
import Link from "next/link";
import { imageLoader } from "@/hooks/imageLoader ";
import DivAnimateX from "../utils/DivAnimateX";
const HeroSection = () => {

const selectHandler = () => {};

  return (
    <>
      <section className="hero-area pos-rel">
        <div className="hero-shape d-none d-lg-block">
          <span className="circle"></span>
          <span className="circle circle-yellow"></span>
          <span className="shape-plus">+</span>
        </div>
        <div className="hero-slider">
          <div
            className="single-slider slider-height d-flex align-items-center align-items-xl-end"
            style={{ backgroundImage: `url(${bgImg.src})`}}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-9 col-md-11">
                  <div className="hero-content pos-rel mt-125">
                    <div className="hero-dot-shape d-none d-lg-block">
                      <Image loader={imageLoader} placeholder="blur" loading='lazy' src={shapeOne}  alt="hero-img" />
                    </div>
                    <DivAnimateX position={-60}>
                    <div className="hero-slider-caption">
                      <h2 data-animation="fadeInUp" data-delay=".7s">
                        <span>Hundreds</span> Of Dream Jobs Waiting For You
                      </h2>
                      <div className="job-hero-form">
                        <div>
                           <NiceSelect
                            options={categoryData}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name=""
                            className=""
                          />

                          <div className="job-input">
                            <input type="text" placeholder="Locations" />
                          </div>
                          <button>
                            Find Jobs <i className="far fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    </DivAnimateX>
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  <div className="slider-img">
                    <Image loader={imageLoader} placeholder="blur" loading='lazy' src={shapeThree} alt="hero-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

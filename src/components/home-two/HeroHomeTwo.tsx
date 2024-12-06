"use client";
import React from "react";
import logo from "../../../public/assets/img/shape/dot-shape.png";
import Image from "next/image";
import bgImg from "../../../public/assets/img/slider/slider-2.jpg"; 
import NiceSelect from "@/elements/NiceSelect";
import { categoryData, organizationData } from "@/data/nice-select-data";
const HeroHomeTwo = () => {
  const selectHandler = () => {};
  return (
    <>
      <section className="hero-area pos-rel">
        <div className="hero-shape">
          <span className="circle"></span>
          <span className="circle circle-yellow"></span>
          <span className="shape-plus">+</span>
        </div>
        <div className="hero-slider">
          <div
            className="single-slider slider-height slider-height-2 d-flex align-items-center"
            style={{ backgroundImage: `url(${bgImg.src})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-content pos-rel mt-80">
                    <div className="hero-dot-shape">
                      <Image src={logo} alt="logo-img" />
                    </div>
                    <div className="hero-slider-caption hero-slider-caption-2">
                      <div className="text-center">
                        <span className="hero-sub">
                          25630 Jobs Avaiable Now
                        </span>
                        <h2>Find Your Dream Career</h2>
                      </div>
                      <div className="job-hero-form job-hero-form-2">
                        <form action="#">
                          <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                              <NiceSelect
                                options={categoryData}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                className=""
                              />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                              <div className="job-input home_two_input">
                                <input type="text" placeholder="Locations" />
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                              <NiceSelect
                                options={organizationData}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                className=""
                              />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                              <button>
                                Find Jobs <i className="far fa-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="hero-fact mt-40 d-none d-md-block">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-fact mb-30">
                              <i className="fal fa-gift-card"></i>
                              <div className="fact-text">
                                <h2>3560</h2>
                                <span>Available Jobs</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-fact mb-30 ml-50">
                              <i className="fal fa-user-circle"></i>
                              <div className="fact-text">
                                <h2>8563</h2>
                                <span>Employees</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-fact mb-30 ml-70">
                              <i className="fal fa-file-alt"></i>
                              <div className="fact-text">
                                <h2>6852</h2>
                                <span>CV/Resume</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-fact mb-30 ml-70">
                              <i className="fal fa-coffee"></i>
                              <div className="fact-text">
                                <h2>420</h2>
                                <span>Campaigns</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default HeroHomeTwo;

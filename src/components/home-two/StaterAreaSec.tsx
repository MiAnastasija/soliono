import React from "react";
import imgOne from "../../../public/assets/img/icon/starter/icon-1.png";
import imgTwo from "../../../public/assets/img/starter/starter-1.jpg";
import imgThree from "../../../public/assets/img/starter/starter-2.jpg";
import imgFour from "../../../public/assets/img/starter/starter-3.jpg";
import Image from "next/image";
import Link from "next/link";
const StaterAreaSec = () => {
  return (
    <>
      <section className="starter__area pb-130 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="section-title text-center mb-45">
                <h2>How To Get Started</h2>
                <p className="pl-65 pr-65">
                Set up a comprehensive profile highlighting your skills, experience, and aspirations. 
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 offset-xl-1 pr-0 col-lg-6">
              <div className="starter__thumb-wrapper pl-50">
                <div className="starter__shape">
                  <Image
                    src={imgOne}
                    style={{ width: "auto", height: "auto" }}
                    alt="starter-img"
                  />
                </div>
                <div className="starter__thumb-top mb-20">
                  <Image
                    src={imgTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="starter-img"
                  />
                </div>
                <div className="starter__thumb-bottom d-sm-flex">
                  <div className="starter__thumb mr-20">
                    <Image
                      src={imgThree}
                      style={{ width: "auto", height: "auto" }}
                      alt="starter-img"
                    />
                  </div>
                  <div className="starter__thumb">
                    <Image
                      src={imgFour}
                      style={{ width: "auto", height: "auto" }}
                      alt="starter-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="starter__content">
                <ul>
                  <li>
                    <div className="starter__item d-flex mb-45">
                      <div className="starter__icon mr-25">
                        <i className="flaticon-job-search-3"></i>
                      </div>
                      <div className="starter__text">
                        <h4>Need Any Jobs?</h4>
                        <p>
                          But must expla to you how this mistaken idea of
                          denouncing pleure praising
                        </p>
                        <Link href="/contact" className="link-btn">
                          <span>Apply Job</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="starter__item d-flex mb-45">
                      <div className="starter__icon mr-25">
                        <i className="flaticon-job-search-4 yellow-bg"></i>
                      </div>
                      <div className="starter__text">
                        <h4>Post Your Jobs</h4>
                        <p>
                          But must expla to you how this mistaken idea of
                          denouncing pleure praising
                        </p>
                        <Link href="/contact" className="link-btn">
                          <span>Post Your Jobs</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="starter__item d-flex mb-45">
                      <div className="starter__icon mr-25">
                        <i className="flaticon-sync black-bg"></i>
                      </div>
                      <div className="starter__text">
                        <h4>Job Market Data </h4>
                        <p>
                          But must expla to you how this mistaken idea of
                          denouncing pleure praising
                        </p>
                        <Link href="/contact" className="link-btn">
                          <span>Get Data</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaterAreaSec;

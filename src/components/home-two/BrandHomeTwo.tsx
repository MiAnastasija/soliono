import React from "react";
import img1 from "../../../public/assets/img/brand/brand-1.png";
import img2 from "../../../public/assets/img/brand/brand-2.png";
import img3 from "../../../public/assets/img/brand/brand-3.png";
import img4 from "../../../public/assets/img/brand/brand-4.png";
import img5 from "../../../public/assets/img/brand/brand-5.png";
import img6 from "../../../public/assets/img/brand/brand-6.png";
import img7 from "../../../public/assets/img/brand/brand-7.png";
import Image from "next/image";
const BrandHomeTwo = () => {
  return (
    <>
      <section className="brand__area pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="section-title text-center mb-50">
                <h2>Premium Partners</h2>
                <p className="pl-65 pr-65">
                 Explore Exclusive Career Paths and Access High-Profile Job Openings for a Strategic Boost to Your Professional Journey
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img1} alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img2} alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img3} alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img4} alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 offset-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img5} alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img6} alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand__thumb mb-50">
                <Image src={img7} alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandHomeTwo;

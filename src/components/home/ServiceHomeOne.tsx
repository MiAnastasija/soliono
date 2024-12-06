import React from "react";
import img1 from "../../../public/assets/img/icon/services/icon-1.png";
import img2 from "../../../public/assets/img/icon/services/icon-2.png";
import img3 from "../../../public/assets/img/icon/services/icon-3.png";

// bg img
import bgImg1 from "../../../public/assets/img/shape/hexa.png";
import Image from "next/image";
import Link from "next/link";

const ServiceHomeOne = () => {
  const servicesData = [
    {
      id: 1,
      title: "Need Any Jobs?",
      details:
        "But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born",
      img: img1,
      bgImg: bgImg1,
    },
    {
      id: 2,
      title: "Post Your Jobs",
      details:
        "But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born",
      img: img2,
      bgImg: bgImg1,
    },
    {
      id: 3,
      title: "Job Market Data",
      details:
        "But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born",
      img: img3,
      bgImg: bgImg1,
    },
  ];
  return (
    <>
      <section className="services__area pt-80 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-10 offset-md-1">
              <div className="section-title text-center mb-45">
                <h2>How To Get Started</h2>
                <p>
                Set up a comprehensive profile highlighting your skills, experience, and aspirations. Make a strong first impression on potential employers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {servicesData?.map((item) => (
              <div key={item?.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="services__item grey-bg transition-3 text-center mb-30">
                  <div
                    className="services__shape transition-3"
                    style={{ backgroundImage: `url(${item?.bgImg.src})` }}
                  ></div>
                  <div className="services__icon mb-25">
                    <Image src={item?.img} alt="service-img" />
                  </div>
                  <div className="services__content">
                    <h2> {item?.title} </h2>
                    <p> {item?.details} </p>
                    <Link href="/job-grid" className="b-btn b-btn-green">
                      Apply Job <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHomeOne;

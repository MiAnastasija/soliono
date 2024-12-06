"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import img1 from "../../../public/assets/img/brand/01.png";
import img2 from "../../../public/assets/img/brand/02.png";
import img3 from "../../../public/assets/img/brand/03.png";
import img4 from "../../../public/assets/img/brand/04.png";
import img5 from "../../../public/assets/img/brand/05.png";
import img6 from "../../../public/assets/img/brand/06.png";
import bgImg from "../../../public/assets/img/brand/brand-bg.jpg";
import Link from "next/link";
import Image from "next/image";

const BrandSliderTwo = () => {
  const brandLogos = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img1,
    },
    {
      id: 8,
      img: img4,
    },
    {
      id: 9,
      img: img5,
    },
  ];
  return (
    <>
      <div
        className="brand-area pt-70 pb-70"
        data-background="assets/img/brand/brand-bg.jpg"
        style={{ backgroundImage: `url(${bgImg.src})`}}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-60">
                <h2>Featured Employer</h2>
                <p>
                Unlock Your Career Potential with Our Featured Employer: Discover an exceptional work environment where innovation, growth, and diversity thrive
                </p>
              </div>
            </div>
          </div>
          <div className="row brand-active slick-initialized slick-slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 6,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".slick-next",
                prevEl: ".slick-prev",
              }}
            >
              {brandLogos?.map((item, num) => {
                return (
                  <SwiperSlide key={num}>
                    <div className="col-xl-12">
                      <div className="single-brand">
                        <Link href="#">
                          <Image style={{ width: "100%", height: "auto" }} src={item?.img} alt="brand-img" />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button type="button" className="slick-prev slick-arrow">
              <i className="far fa-angle-left"></i>
            </button>
            <button type="button" className="slick-next slick-arrow">
              <i className="far fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSliderTwo;

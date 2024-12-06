"use client";
import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import brand1 from "../../../public/assets/img/brand/brand-8.jpg";
import brand2 from "../../../public/assets/img/brand/brand-9.jpg";
import brand3 from "../../../public/assets/img/brand/brand-10.jpg";
import brand4 from "../../../public/assets/img/brand/brand-11.jpg";
import Image from "next/image";
const BrandSlider = () => {
  const brandLogos = [
    {
      id: 1,
      img: brand1,
    },
    {
      id: 2,
      img: brand2,
    },
    {
      id: 3,
      img: brand3,
    },
    {
      id: 4,
      img: brand4,
    },
    {
      id: 5,
      img: brand2,
    },
  ];
  return (
    <>
      <div className="brand__area grey-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="brand__slider owl-carousel">
                <Swiper
                  modules={[A11y, Autoplay]}
                  spaceBetween={30}
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
                      slidesPerView: 4,
                    },
                  }}
                >
                  {brandLogos?.map((item) => (
                    <SwiperSlide key={item?.id}>
                      <div className="brand__item">
                        <Image src={item.img} alt="brand-logo" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSlider;

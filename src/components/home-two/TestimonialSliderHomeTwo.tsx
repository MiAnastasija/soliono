"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css/bundle";
import img1 from "../../../public/assets/img/testimonial/avater-1.jpg";
import team1 from "../../../public/assets/img/testimonial/team-1.png";
import team2 from "../../../public/assets/img/testimonial/team-2.png";
import team3 from "../../../public/assets/img/testimonial/team-3.png";
import team4 from "../../../public/assets/img/testimonial/team-4.png";
import img2 from "../../../public/assets/img/shape/dot-shape.png";
import Image from "next/image";
const testimonialSliderData = [
  {
    id: 1,
    img: img1, // Replace with the image source for the second testimonial
    sliderClass: "testimonial__thumb item-1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Emma Johnson",
    title: "Marketing Specialist",
    infoClass: "testimonial__item item-1",
  },
  {
    id: 2,
    img: team1, // Replace with the image source for the third testimonial
    sliderClass: "testimonial__thumb item-2",
    details:
      "Vestibulum quam quam, ultricies eu sagittis eget, feugiat ac eros. Integer gravida justo nec justo facilisis congue.",
    author: "Alex Carter",
    title: "Software Developer",
    infoClass: "testimonial__item item-2",
  },
  {
    id: 3,
    img: team2, // Replace with the image source for the fourth testimonial
    sliderClass: "testimonial__thumb item-3",
    details:
      "Curabitur a felis in nunc fringilla tristique. Sed odio ante, ullamcorper vel ligula sit amet, gravida tincidunt purus.",
    author: "Sophie Davis",
    title: "Financial Analyst",
    infoClass: "testimonial__item item-3",
  },
  {
    id: 4,
    img: team3, // Replace with the image source for the fifth testimonial
    sliderClass: "testimonial__thumb item-4",
    details:
      "Aliquam erat volutpat. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    author: "Michael Turner",
    title: "Graphic Designer",
    infoClass: "testimonial__item item-4",
  },
  {
    id: 5,
    img: team4, // Replace with the image source for the sixth testimonial
    sliderClass: "testimonial__thumb item-5",
    details:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Amanda White",
    title: "HR Manager",
    infoClass: "testimonial__item item-5",
  },
  // Add more testimonials as needed
];

const TestimonialSliderHomeTwo = () => {
 

  return (
    <>
      <section
        className="testimonial__area pt-20 pb-130 black-bg"
        data-background="assets/img/testimonial/testimonial-bg.png"
      >
        <div className="hero-shape">
          <span className="circle"></span>
          <span className="circle circle-yellow"></span>
          <span className="shape-plus shape-plus-green">+</span>
          <span className="shape-plus shape-plus-green shape-plus-2">+</span>
          <span className="dot-shape">
            <Image src={img2} alt="dot-shape" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="col-xl-7 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="testimonial__slider text-center testimonial__slider-active">
                  <div className="testimonial__nav mt-20">
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y, Autoplay,Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                      }}
                      pagination={{
                        el: '.portfolios-pagination-a', 
                        clickable: true,
                    }}
                      navigation={{
                        nextEl: ".testimonial-button-next",
                        prevEl: ".testimonial-button-prev",
                      }}
                    >
                      {testimonialSliderData.map((item, num) => {
                        return (
                          <SwiperSlide key={num}>
                            <div key={item.id} className={item?.sliderClass}>
                              <div className="testimonial__thumb-inner mb-60">
                                <div className="testimonial__quote">
                                  <i className="flaticon-quotation"></i>
                                </div>
                                <Image src={item?.img} alt="" />
                              </div>
                              <div key={item?.id} className={item?.infoClass}>
                                <p> {item?.details} </p>
                                <div className="testimonial__info">
                                  <h4> {item?.author} </h4>
                                  <span> {item?.title} </span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="portfolios-pagination-a portfolio-dots"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSliderHomeTwo;

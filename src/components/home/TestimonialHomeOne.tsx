"use client"
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import img1 from "../../../public/assets/img/testominal/solmix-01people.png";
import testImg2 from "../../../public/assets/img/testominal/test-img2.png";
import testImg3 from "../../../public/assets/img/testominal/test-img3.png";
import testImg4 from "../../../public/assets/img/testominal/test-img3.png";
import testImg5 from "../../../public/assets/img/testominal/test-img5.png";
import bgImg from "../../../public/assets/img/bg/map.png";
import Image from "next/image";
const TestimonialHomeOne = () => {
  const testimonialData = [
    {
      id: 1,
      details: "Discovering this job portal has revolutionized my job search. Its user-friendly design and intuitive interface make navigating the platform a breeze. The robust job search filters allow for precise customization based on industry, location, and job type.",
      user: "Jonathon Smith",
      title: "Web Developer",
      img:testImg3
    },
    {
      id: 2,
      details: "I'm incredibly impressed with the platform's efficiency. The application process is seamless, and the personalized dashboard makes managing applications a breeze. Kudos to the team for creating such a user-friendly experience!",
      user: "Emily Rodriguez",
      title: "UX Designer",
      img:testImg2
    },
    {
      id: 3,
      details: "This job portal is a game-changer! The detailed job listings and comprehensive profiles give a clear picture of what employers are looking for. The blog section with career advice is an excellent added bonus.",
      user: "Liam Johnson",
      title: "Marketing Specialist",
      img:testImg3
    },
    {
      id: 4,
      details: "The real-time updates and notifications for new job postings are a lifesaver. It's like having a personal job assistant. Highly recommend this platform for anyone serious about their job search!",
      user: "Sophia Carter",
      title: "Data Analyst",
      img:testImg4
    },
    {
      id: 5,
      details: "The platform's commitment to user success is evident. The email alerts for application status updates keep you in the loop, and the intuitive design makes the entire job search process a pleasure. Well done!",
      user: "Daniel Anderson",
      title: "Project Manager",
      img:testImg5
    }
  ];
  

  return (
    <>
      <div
        className="testimonial-area grey-bg pt-80 pb-60 fix"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-45">
                <h2>What Our Candidates Say</h2>
                <p>
                  Discover the voices of success! Our candidates speak for
                  themselves about their transformative experiences
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="test-img ml-40 mb-30">
                <Image src={img1} alt="testimonial-img" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
              >
                {testimonialData.map((item, num) => {
                  return (
                    <SwiperSlide key={num}>
                      <div className="test-active mt-50 mb-30">
                        <div className="testimonial-wrapper">
                          <div className="inner-test">
                            <div className="test-icon f-left">
                              <i className="fal fa-quote-right"></i>
                            </div>
                            <div className="test-text">
                              <p>
                                 {item.details}
                              </p>
                            </div>
                          </div>
                          <div className="clientsay-name">
                            <div className="client-say-img">
                              <Image src={item.img} alt="testimonial-img" />
                            </div>
                            <div className="client-say-content">
                              <h4> {item.user} </h4>
                              <span> {item.title} </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeOne;

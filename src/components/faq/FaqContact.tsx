"use client"
import React, { useState } from "react";
import faqImg1 from "../../../public/assets/img/faq/faq-1.jpg";
import faqImg2 from "../../../public/assets/img/faq/faq-2.jpg";
import faqImg3 from "../../../public/assets/img/faq/faq-3.jpg";
import faqImg4 from "../../../public/assets/img/faq/faq-4.jpg";
import Image from "next/image"; 
import Link from "next/link";
import ModalVideo from "react-modal-video";
const FaqContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="faq__contact pt-80 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="faq__thumb-wrapper">
                <div className="faq__thumb-top d-flex mb-30">
                  <div className="faq__thumb mr-30 mt-50">
                    <Image src={faqImg1} alt="faq-contact-img" />
                  </div>
                  <div className="faq__thumb">
                    <Image src={faqImg2} alt="faq-contact-img" />
                  </div>
                </div>
                <div className="faq__thumb-bottom d-flex">
                  <div className="faq__thumb mr-30 mb-30">
                    <Image src={faqImg3} alt="faq-contact-img" />
                  </div>
                  <div className="faq__thumb">
                    <Image src={faqImg4} alt="faq-contact-img" />
                    <Link
                      href=""
                      onClick={() => {
                        openVideoModal();
                      }}
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="faq__form pt-35">
                <h3>Contact Us</h3>
                <form action="#">
                  <div className="faq__input">
                    <input type="text" placeholder="Your Full Name" />
                    <i className="far fa-user"></i>
                  </div>
                  <div className="faq__input">
                    <input type="email" placeholder="Email Address" />
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="faq__input">
                    <textarea placeholder="Write Comments"></textarea>
                    <i className="far fa-edit"></i>
                  </div>
                  <button
                    type="submit"
                    className="b-btn b-btn-green b-btn-green-2 w-100"
                  >
                    Send Message <i className="far fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default FaqContact;

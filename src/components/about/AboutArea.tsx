"use client"
import React,{useState} from "react";
import img1 from "../../../public/assets/img/about/about-1.jpg";
import img2 from "../../../public/assets/img/about/about-2.jpg";
import img3 from "../../../public/assets/img/about/about-3.jpg";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
const AboutArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="about__area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-1 pl-0 col-lg-6">
              <div className="about__thumb-wrapper">
                <div className="about__thumb-top d-flex">
                  <div className="about__thumb mr-15">
                    <Image style={{ width: "auto", height: "auto" }} src={img1} alt="about-img" />
                  </div>
                  <div className="about__thumb about__thumb-2 mt-25">
                    <div className="about__thumb-inner">
                      <Image style={{ width: "auto", height: "auto" }} src={img2} alt="about-img" />
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
                <div className="about__thumb about__thumb-3">
                  <Image style={{ width: "auto", height: "auto" }} src={img3} alt="about-img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__content pt-20">
                <div className="section-title mb-20">
                  <span>About Us</span>
                  <h2>
                    We Provide Smart & <br /> Professional Expertise
                  </h2>
                </div>
                <p>
                  But I must explain to you how all this mistaken idea
                  denouncing pleasure and praising pain was born and will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth the
                  master-builder of human{" "}
                </p>

                <div className="about__list mb-45">
                  <ul>
                    <li>Inspired Design Decisions With Neville Brody</li>
                    <li>Embrace The Possibilities March Wallpapers</li>
                    <li>When You Find Good Idea Look For Better One</li>
                  </ul>
                </div>
                <Link href="/job-grid" className="b-btn">
                  Browse All Jobs <i className="far fa-arrow-right"></i>
                </Link>
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

export default AboutArea;

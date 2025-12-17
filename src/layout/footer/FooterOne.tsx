import React from "react";
import logo from "../../../public/assets/img/logo/SolionoLogoFYellow.svg";
import bgImg from "../../../public/assets/img/footer/footer-bg-1.png";
import Image from "next/image";
import CountUpContent from "@/elements/counter/CountUpContent";
import Link from "next/link";
const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div
            className="footer__bg"
            style={{ backgroundImage: `url(${bgImg.src})` }}
          ></div>
          <div className="footer__top black-bg pt-80 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-title mb-20">
                      <div className="logo">
                        <Link href="/">
                          <Image src={logo} alt="logo" />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <p>
                        Discover the latest in Job with Soliono. Your go-to
                        source for insights, trends, and Internship. Explore our
                        user-friendly platform for a seamless experience.
                        Elevate your Job journey with us.
                      </p>
                      <div className="footer__info d-sm-flex justify-content-between pr-40">
                        <div className="footer__info-item d-flex align-items-center mb-30">
                          <div className="icon mr-15">
                            <i className="fal fa-gift-card"></i>
                          </div>
                          <div className="text">
                            <h4>
                              <span className="counter">
                                <CountUpContent number={3560} text="+" />{" "}
                              </span>
                            </h4>
                            <span>Available Jobs</span>
                          </div>
                        </div>
                        <div className="footer__info-item d-flex align-items-center mb-30">
                          <div className="icon mr-15">
                            <i className="fal fa-user-circle"></i>
                          </div>
                          <div className="text">
                            <h4>
                              <span className="counter">
                                <CountUpContent number={8563} text="+" />{" "}
                              </span>
                            </h4>
                            <span>Employees</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-7">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="footer__widget pl-20 mb-50">
                        <div className="footer__widget-title mb-20">
                          <h3>Information</h3>
                        </div>
                        <div className="footer__widget-content">
                          <div className="footer__link">
                            <ul>
                              <li>
                                <Link href="/job-grid">
                                  Looking For A Jobs?
                                </Link>
                              </li>
                              <li>
                                <Link href="/job-sidebar">
                                  International Jobs
                                </Link>
                              </li>
                              <li>
                                <Link href="/application-form">
                                  Upload Resume
                                </Link>
                              </li>
                              <li>
                                <Link href="/privacy-policy">
                                  Setting & Privacy
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-standard">Career Advice</Link>
                              </li>
                              <li>
                                <Link href="/job-grid">Freelanc Category</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="footer__widget pl-10 mb-50">
                        <div className="footer__widget-title mb-20">
                          <h3>Quick Jobs</h3>
                        </div>
                        <div className="footer__widget-content">
                          <div className="footer__link">
                            <ul>
                              <li>
                                <Link href="/job-sidebar">
                                  Finance & Banking
                                </Link>
                              </li>
                              <li>
                                <Link href="/job-sidebar">
                                  Business & Consulting
                                </Link>
                              </li>
                              <li>
                                <Link href="/job-sidebar">
                                  Creative Designer
                                </Link>
                              </li>
                              <li>
                                <Link href="/job-sidebar">Web Developer</Link>
                              </li>
                              <li>
                                <Link href="/job-sidebar">
                                  Digital Marketing
                                </Link>
                              </li>
                              <li>
                                <Link href="/job-sidebar">Senior Manager</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-6">
                  <div className="footer__widget pl-30 mb-50">
                    <div className="footer__widget-title mb-20">
                      <h3>Newsletters</h3>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__subscribe">
                        <p>
                          Subscribe for job alerts, career tips, and exclusive
                          opportunities
                        </p>
                        <div className="footer__subscribe-form">
                          <form action="#">
                            <input type="text" placeholder="Enter Your Email" />
                            <button
                              type="submit"
                              className="b-btn b-btn-green b-btn-white"
                            >
                              Subscribe Now{" "}
                              <i className="far fa-arrow-right"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright black-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-7">
                  <div className="footer__copyright-text">
                    <p>
                      © Copyright 2026 <Link href="/">Soliono</Link> All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-5">
                  <div className="footer__social theme-social f-right">
                    <ul>
                      <li>
                        <Link href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.behance.net/">
                          <i className="fab fa-behance"></i>
                          <i className="fab fa-behance"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/">
                          <i className="fab fa-youtube"></i>
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;

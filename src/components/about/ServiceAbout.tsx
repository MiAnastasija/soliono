import Link from "next/link";
import React from "react";

const ServiceAbout = () => {
  return (
    <>
      <section className="services__area pt-130 pb-130 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-6 offset-xl-3">
              <div className="section-title text-center mb-45">
                <span>Core Features</span>
                <h2>We Provide Special Features</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__item services__item-2 white-bg transition-3 text-center mb-30">
                <div className="services__icon mb-10">
                  <i className="flaticon-management"></i>
                </div>
                <div className="services__content-2">
                  <h2>Flexible Staffing</h2>
                  <p>
                    But must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <Link href="/about" className="b-btn b-btn-grey">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__item services__item-2 white-bg transition-3 text-center mb-30">
                <div className="services__icon mb-10">
                  <i className="flaticon-research"></i>
                </div>
                <div className="services__content-2">
                  <h2>Advertising Jobs</h2>
                  <p>
                    But must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <Link href="/about" className="b-btn b-btn-grey">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__item services__item-2 white-bg transition-3 text-center mb-30">
                <div className="services__icon mb-10">
                  <i className="flaticon-save-money"></i>
                </div>
                <div className="services__content-2">
                  <h2>Compare Salaries</h2>
                  <p>
                    But must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <Link href="/about" className="b-btn b-btn-grey">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__item services__item-2 white-bg transition-3 text-center mb-30">
                <div className="services__icon mb-10">
                  <i className="flaticon-24-hours-support"></i>
                </div>
                <div className="services__content-2">
                  <h2>Online Interview</h2>
                  <p>
                    But must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <Link href="/about" className="b-btn b-btn-grey">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__item services__item-2 white-bg transition-3 text-center mb-30">
                <div className="services__icon mb-10">
                  <i className="flaticon-approved"></i>
                </div>
                <div className="services__content-2">
                  <h2>CV Research</h2>
                  <p>
                    But must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <Link href="/about" className="b-btn b-btn-grey">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="services__item services__item-2 white-bg transition-3 text-center mb-30">
                <div className="services__icon mb-10">
                  <i className="flaticon-internship"></i>
                </div>
                <div className="services__content-2">
                  <h2>Display Jobs</h2>
                  <p>
                    But must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <Link href="/about" className="b-btn b-btn-grey">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAbout;

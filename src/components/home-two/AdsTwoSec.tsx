import React from "react";
import bgImg from "../../../public/assets/img/bg/cta-bg2.jpg";
import Link from "next/link";
const AdsTwoSec = () => {
  return (
    <>
      <div
        className="counter-area bg-cover pt-80 pb-50"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="section-title section-title-white mb-30">
                <h2>Looking Best Employees?</h2>
                <p>
                Unlock a world of career possibilities with our extensive database featuring over 35,000 recent job openings.
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="cta-btn text-left text-lg-right mb-30">
                <Link className="b-btn green-btn ads_btn_home_two" href="/candidate-grid">
                  Meet With Us <i className="far fa-arrow-right"></i>
                </Link>
                <Link className="b-btn" href="/job-grid">
                  Browse All Jobs <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsTwoSec;

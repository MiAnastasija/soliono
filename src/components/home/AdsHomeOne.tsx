import Link from "next/link";
import React from "react";
import bgImg from "../../../public/assets/img/bg/sol-stripe-trafic.png";
import DivAnimateX from "../utils/DivAnimateX";

const AdsHomeOne = () => {
  return (
    <>
      <div
        className="cta-area pt-50 pb-20"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
            <DivAnimateX position={-60}>
              <div className="cta-text mb-30">
                <h2>
                  Started Your Career With <b>Soliono</b>
                </h2>
              </div>
            </DivAnimateX>
            </div>
            <div className="col-lg-5">
            <DivAnimateX position={60}>
              <div className="cta-btn text-lg-right mb-30">
                <Link className="b-btn" href="/about">
                  Get Started Now <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              </DivAnimateX>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsHomeOne;

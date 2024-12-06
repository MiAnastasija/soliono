import React from "react";
import bgImg from "../../../public/assets/img/bg/fact.jpg";
import CountUpContent from "@/elements/counter/CountUpContent";
const HomeOneCounter = () => {
  return (
    <>
      <div
        className="counter-area bg-cover pt-80 pb-50"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-fact mb-30">
                <i className="fal fa-gift-card"></i>
                <div className="fact-text">
                  <h2 className="counter-largeText">
                    {" "}
                    <CountUpContent number={3560} text="" />{" "}
                  </h2>
                  <span>Available Jobs</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-fact mb-30 ml-50">
                <i className="fal fa-user-circle"></i>
                <div className="fact-text">
                  <h2 className="counter-largeText">
                    {" "}
                    <CountUpContent number={8563} text="" />{" "}
                  </h2>
                  <span>Employees</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-fact mb-30 ml-70">
                <i className="fal fa-file-alt"></i>
                <div className="fact-text">
                  <h2 className="counter-largeText">
                    {" "}
                    <CountUpContent number={6852} text="" />{" "}
                  </h2>
                  <span>CV/Resume</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-fact mb-30 ml-70">
                <i className="fal fa-coffee"></i>
                <div className="fact-text">
                  <h2 className="counter-largeText">
                    {" "}
                    <CountUpContent number={420} text="" />{" "}
                  </h2>
                  <span>Campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneCounter;

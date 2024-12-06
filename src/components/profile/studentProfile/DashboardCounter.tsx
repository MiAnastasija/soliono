"use client";

import CountUpContent from "@/elements/counter/CountUpContent";
import React from "react";
const DashboardCounter = () => {

  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
            <CountUpContent number={8} text="" />
              <p> Total Applied </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <span className="counter">
                <CountUpContent number={6} text="" />
              </span>
              <p>Saved Jobs </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <span className="counter">
                <CountUpContent number={4} text="" />
              </span>
              <p> Sort Listed </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCounter;

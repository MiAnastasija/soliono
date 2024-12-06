import React from "react";
import SingleJobGridCard from "../shearedComponents/SingleJobGridCard";
import Link from "next/link";
const JobArea = () => {
  return (
    <>
      <div className="job-area pt-80 pb-50">
        <div className="container">
          <div className="row align-items-center mb-45">
            <div className="col-xl-5">
              <div className="section-title">
                <h2>35k+ Recent Jobs Available</h2>
                <p>
                  Unlock over 35,000 recent job opportunities waiting for your
                  expertise. Our job portal curates a dynamic list of openings
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="section-btn text-left text-lg-right">
                <Link className="b-btn job_area_btn" href="job-grid">
                  Browse All Jobs <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <SingleJobGridCard start={0} end={6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobArea;

import React from "react";
import SingleGridViewTwoCard from "../shearedComponents/SingleGridViewTwoCard";
import Pagination from "../shearedComponents/Pagination";
import Link from "next/link";

const JobAreaHomeTwo = () => {
  return (
    <>
      <div className="job-area grey-bg pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center mb-45">
            <div className="col-xl-5">
              <div className="section-title text-center">
                <h2>35k+ Recent Jobs Available</h2>
                <p>
                  Unlock a world of career possibilities with our extensive
                  database featuring over 35,000 recent job openings
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <SingleGridViewTwoCard start={6} end={10} />
            <div className="col-xl-12 d-flex justify-content-center align-items-center">
              <Link className="h-btn d-xl-inline-block" href="/job-grid">
                Browse All Jobs <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobAreaHomeTwo;

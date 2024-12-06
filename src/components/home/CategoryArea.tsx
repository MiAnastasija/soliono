import { allCategoryData } from "@/data/categoires-data";
import Link from "next/link";
import React from "react";
import DivAnimateY from "../utils/DivAnimateY";

const CategoryArea = () => {
  return (
    <>
      <div className="categories-area pt-80 grey-bg pb-50">
        <div className="container">
        <DivAnimateY>
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-45">
                <h2>Popular Categories</h2>
                <p>
                Explore our Job {` Portal's`}  to streamline your job search. From the cutting-edge world of Technology to the strategic realm of Finance,
                </p>
              </div>
            </div>
          </div>
          </DivAnimateY>
          <DivAnimateY>
          <div className="row">
            {allCategoryData?.map((item) => (
              <div key={item?.id} className="col-xl-4 col-lg-6 col-md-12 mb-30">
                <div className={`categories-wrapper pos-rel ${item?.activeClass ? item?.activeClass : ""}`}>
                  <div className="categories-icon f-left">
                    <i className={item?.icon}></i>
                  </div>
                  <div className="categories-text">
                    <h4> {item?.title} </h4>
                    <span> {item?.job} Available Jobs</span>
                  </div>
                  <div className="cat-button">
                    <Link href="/job-grid">
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}           
          </div>
          </DivAnimateY>
        </div>
      </div>
    </>
  );
};

export default CategoryArea;

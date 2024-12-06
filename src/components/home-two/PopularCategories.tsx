import { popularCategories } from "@/data/categoires-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularCategories = () => {
  return (
    <>
      <div className="cat-area pt-70 pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title text-center mb-50">
                <h2>Popular Categories</h2>
                <p>
                Discover a world of career possibilities in our popular categories. Whether {`you're`} seeking a new challenge or advancing your expertise
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {popularCategories.map((item) => (
              <div key={item?.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="b-cat mb-30">
                  <div className="cat-thumb">
                    <Image
                      src={item?.img}
                      style={{ width: "100%", height: "auto" }}
                      alt="category-img"
                    />
                  </div>
                  <div className="cat-top">
                    <div className="cat-back-icon">
                      <i className={item?.icon}></i>
                    </div>
                    <h5>
                      <i className={item?.icon}></i> {item?.title}
                    </h5>
                    <p> {item?.details} </p>
                    <Link className="cat-top-link" href="/job-details">
                      Read More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="cat-down">
                    <h5>
                      <i className={item?.icon}></i> {item?.title}
                    </h5>
                    <Link className="cat-d-link" href="/job-details">
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategories;

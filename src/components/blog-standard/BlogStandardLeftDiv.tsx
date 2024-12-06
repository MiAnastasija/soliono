import React from "react";
import BlogStandardSingleCard from "../shearedComponents/BlogStandardSingleCard";
import bgImg from "../../../public/assets/img/blog/map.png";
import Pagination from "../shearedComponents/Pagination";
const BlogStandardLeftDiv = () => {
  return (
    <>
      <div className="col-xl-8 col-lg-8">
        <div className="blog__wrapper">
          <BlogStandardSingleCard start={6} end={8} />
          <div
            className="blog__quote theme-bg mb-40"
            style={{ backgroundImage: `url(${bgImg.src})` }}
            
          >
            <blockquote>
              <p>
                Setting For Modern React Project Using Web How To Build Vue
                Surve Usinsn Firebase
              </p>
              <span>Goncalves Pereira</span>
            </blockquote>
          </div>
          <BlogStandardSingleCard start={2} end={4} />
          <Pagination propsclass="basic-pagination mb-40" />
        </div>
      </div>
    </>
  );
};

export default BlogStandardLeftDiv;

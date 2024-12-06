import React from "react";
import Pagination from "../shearedComponents/Pagination";
import BlogGridCard from "../shearedComponents/BlogGridCard";

const BlogArea = () => {
  return (
    <>
      <section className="grid__item pt-80 pb-50">
        <div className="container">
          <div className="row">
            <BlogGridCard start={0} end={9} />
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Pagination propsclass="basic-pagination text-center" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;

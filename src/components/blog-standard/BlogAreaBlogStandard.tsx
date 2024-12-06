import React from "react";
import BlogStandardLeftDiv from "./BlogStandardLeftDiv";
import BlogStandardRightDiv from "./BlogStandardRightDiv";
const BlogAreaBlogStandard = () => {
  return (
    <>
      <section className="blog__area grey-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <BlogStandardLeftDiv />
            <BlogStandardRightDiv/>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaBlogStandard;

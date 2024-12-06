import React from "react";
import BlogStandardRightDiv from "../blog-standard/BlogStandardRightDiv";
import BlogDetailsLeftDiv from "./BlogDetailsLeftDiv";
const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog__area grey-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <BlogDetailsLeftDiv />
            <BlogStandardRightDiv />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;

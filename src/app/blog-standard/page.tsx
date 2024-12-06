import BlogStandardMain from "@/components/blog-standard/BlogStandardMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const BlogStandardPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <BlogStandardMain />
        </main>
      </Wrapper>
    </>
  );
};

export default BlogStandardPage;

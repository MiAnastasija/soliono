import BlogMain from "@/components/blog-grid/BlogMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const BlogGridPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <BlogMain />
        </main>
      </Wrapper>
    </>
  );
};

export default BlogGridPage;

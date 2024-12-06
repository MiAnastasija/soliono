import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const BlogDetailsPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <BlogDetailsMain />
        </main>
      </Wrapper>
    </>
  );
};

export default BlogDetailsPage;

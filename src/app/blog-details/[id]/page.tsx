"use client"
import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import useGlobalContext from "@/hooks/use-context";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect } from "react";
const BlogDetailsPageDynamic = ({ params }: { params: { id: number } }) => {
  const { setBlogId } = useGlobalContext();
  useEffect(() => {
    const id = params.id;
    setBlogId(id);
  }, [params.id, setBlogId]);

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

export default BlogDetailsPageDynamic;

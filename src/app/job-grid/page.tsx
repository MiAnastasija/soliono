import JobGridMain from "@/components/job-grid/JobGridMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const JobGridPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <JobGridMain />
        </main>
      </Wrapper>
    </>
  );
};

export default JobGridPage;

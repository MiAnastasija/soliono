import JobDetailsMain from "@/components/job-details/JobDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const JobDetailsPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <JobDetailsMain />
        </main>
      </Wrapper>
    </>
  );
};

export default JobDetailsPage;

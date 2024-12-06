import EmployDetailsMain from "@/components/employer-details/EmployDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const EmployerDetailsPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <EmployDetailsMain />
        </main>
      </Wrapper>
    </>
  );
};

export default EmployerDetailsPage;

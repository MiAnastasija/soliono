import React from "react";
import Pagination from "../shearedComponents/Pagination";
import CandidateCardColThree from "../shearedComponents/CandidateCardColThree";

const CandidateContent = () => {
  return (
    <>
      <section className="candidate__area pt-35 pb-140 grey-bg">
        <div className="container">
          <div className="candidate__inner">
            <div className="row">
              <CandidateCardColThree start={0} end={9} />
            </div>
            <div className="row">
              <div className="col-xl-12">
                <Pagination propsclass="basic-pagination basic-pagination-2 text-center"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandidateContent;

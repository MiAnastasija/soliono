import React from "react";
import CandidatesingleCardAditional from "./CandidatesingleCardAditional";

const AboutCandidateSort = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <CandidatesingleCardAditional start={0} end={2} />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <CandidatesingleCardAditional start={2} end={4} />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <CandidatesingleCardAditional start={4} end={6} />
        </div>
      </div>
    </>
  );
};

export default AboutCandidateSort;

"use client"
import { candidateData } from "@/data/candidate-data";
import useGlobalContext from "@/hooks/use-context";
import { sliceProps } from "@/interFace/interfaceCommon";
import React from "react";

const CandidatesingleCardAditional = ({ start, end }: sliceProps) => {
  const {candidateID} = useGlobalContext()
  const filterData = candidateData?.find((item) => item?.id == candidateID);
  return (
    <>
      {filterData?.candidateSortDetails ? (
        <>
          {filterData?.candidateSortDetails?.slice(start, end)?.map((itm) => (
            <div key={itm?.id} className="team__about-item d-flex mb-35">
              <div className="icon">
                <i className={itm?.icon}></i>
              </div>
              <div className="text">
                <h5>{itm?.title}</h5>
                <span> {itm?.value} </span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default CandidatesingleCardAditional;

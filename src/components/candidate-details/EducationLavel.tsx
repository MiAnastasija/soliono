"use client"
import { candidateData } from "@/data/candidate-data";
import { getSchoolName } from "@/hooks/getSchoolName";
import useGlobalContext from "@/hooks/use-context";
import React from "react";

const EducationLavel = () => {
  const { candidateID } = useGlobalContext();
  const filterData = candidateData?.find((item) => item?.id == candidateID);
  return (
    <>
      {filterData?.educationData ? (
        <>
          <div className="team__info mt-10">
            <div className="team__info-title">
              <h4>Education</h4>
            </div>
            <div className="team__info-content">
              <div className="team__education mt-30">
                <div className="row">
                  {filterData?.educationData?.map((itm, index) => (
                    <div key={index} className="col-xl-6 col-lg-6">
                      <div className="team__education-item d-flex mb-20">
                        <div className="icon">
                          <i className="fal fa-graduation-cap"></i>
                        </div>
                        <div className="text">
                          <span>
                            {itm?.degree} ({itm?.duration})
                          </span>
                          {getSchoolName(itm) && <h5>{getSchoolName(itm)}</h5>}
                          <p>{itm?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EducationLavel;

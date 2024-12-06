"use client";
import { candidateData } from "@/data/candidate-data";
import useGlobalContext from "@/hooks/use-context";
import React from "react";

const WrokExperience = () => {
  const { candidateID } = useGlobalContext();
  const filterData = candidateData?.find((item) => item?.id == candidateID);

  return (
    <>
      {filterData?.workExperienceData ? (
        <>
          <div className="team__info mt-10">
            <div className="team__info-title">
              <h4>Work Experience</h4>
            </div>
            <div className="team__info-content">
              <div className="team__education mt-30">
                <div className="row">
                  {filterData?.workExperienceData?.map((item, index) => (
                    <div key={index} className="col-xl-6 col-lg-6">
                      <div className="team__education-item d-flex mb-20">
                        <div className="icon">
                          <i className={item?.icon}></i>
                        </div>
                        <div className="text">
                          <span>
                            {item?.companyName} ({item?.duration})
                          </span>
                          <h5> {item?.position} </h5>
                          <p>{item?.description}</p>
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

export default WrokExperience;

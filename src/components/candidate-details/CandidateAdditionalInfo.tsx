"use client";
import { candidateData } from "@/data/candidate-data";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React from "react";

const CandidateAdditionalInfo = () => {
  const { candidateID } = useGlobalContext();
  const filterData = candidateData?.find((item) => item?.id == candidateID);
  return (
    <>
      {filterData?.candidateProfile ? (
        <>
          <div className="col-xl-4 col-lg-4">
            <div className="team__job mt-95 mb-30">
              <h4>Additional Information</h4>
              <ul>
                {filterData?.candidateProfile?.map((item, index) => (
                  <li key={index}>
                    <h5> {item?.label} </h5>
                    <span> {item?.value} </span>
                  </li>
                ))}
                 
              </ul>
               
            </div>
            <div className="team__contact mb-30">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <div className="icon">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="text">
                    <span>
                      Phone :
                      <Link href="tel:+880-123-456-78">+880 123 456 78</Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="icon theme-color">
                    <i className="far fa-envelope-open"></i>
                  </div>
                  <div className="text theme-color">
                    <span>
                      Email :
                      <Link href="mailto:support@gmail.com">
                        support@gmail.com
                      </Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="icon theme-color">
                    <i className="far fa-map-marker-alt"></i>
                  </div>
                  <div className="text theme-color">
                    <span>Location : 55 Main Street, USA</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="team__map">
              <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CandidateAdditionalInfo;

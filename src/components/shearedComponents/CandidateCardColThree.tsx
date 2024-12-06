 
import { candidateData } from "@/data/candidate-data";
import { sliceProps } from "@/interFace/interfaceCommon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const CandidateCardColThree = ({ start, end }: sliceProps) => {
  return (
    <>
      {candidateData?.slice(start, end)?.map((item) => {
        return (
          <div key={item?.id} className="col-xl-4 col-lg-4 col-md-6">
            <div className="candidate__item text-center mb-75">
              <div className="candidate__thumb mb-25">
                <Image src={item?.img} alt="candidate-img" />
              </div>
              <div className="candidate__content">
                <h5> {item?.title} </h5>
                <span> {item?.subTitle} </span>

                <div className="candidate__info mt-25 mb-30">
                  <span>
                    <i className="far fa-map-marker-alt"></i> {item?.location}{" "}
                  </span>
                  <span>
                    <i className="far fa-usd-circle"></i>
                    {item?.sallaryStart}k - {item?.sallaryEnd}k / Yearly
                  </span>
                </div>
                
              </div>
              <div className="candidate__btn">
                <Link
                 href={`/candidate-details/${item?.id}`}
                  className="b-btn b-btn-green"
                >
                  View Portfolio <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CandidateCardColThree;

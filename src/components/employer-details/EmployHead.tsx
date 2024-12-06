"use client";
import { employeData } from "@/data/employe-data";
import GetRatting from "@/hooks/GetRatting";
import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EmployHead = () => {
  const { employeId } = useGlobalContext();
  const [follow, setFollow] = useState<boolean>(false);
  const filterData = employeData?.find((item) => item.id == employeId);

  return (
    <>
      {filterData?.compnayName ? (
        <>
          <div className="employer__head pb-55">
            <div className="row">
              <div className="col-xl-8">
                <div className="employer__left d-md-flex">
                  <div className="employer__head-thumb  mr-25">
                    <Image
                      style={{ width: "100%", height: "auto" }}
                      src={filterData?.img}
                      alt="employe-img"
                    />
                  </div>
                  <div className="employer__content">
                    <h5 className="d-inline-block mr-15">
                      {" "}
                      <Link href="/employer-list">
                        {" "}
                        {filterData?.compnayName}{" "}
                      </Link>
                    </h5>
                    <div className="emp-rating d-inline-block ">
                      <GetRatting averageRating={filterData?.ratting} />
                    </div>
                    <div className="job-meta mt-10">
                      <span>
                        <i className="far fa-briefcase"></i> {filterData?.companyType}
                      </span>
                      <span>
                        <i className="far fa-map-marker-alt"></i>{" "}
                        {filterData?.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="employer__btn text-md-right">
                  <button
                    onClick={() => setFollow(!follow)}
                    className="b-btn b-btn-green"
                  >
                    {follow === true ? (
                      <>Following</>
                    ) : (
                      <>
                        Follow Us <i className="far fa-arrow-right"></i>
                      </>
                    )}
                  </button>
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

export default EmployHead;

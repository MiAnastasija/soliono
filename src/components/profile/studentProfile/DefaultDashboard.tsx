"use client";

import { jobData } from "@/data/job-data";
import { getTagClass } from "@/hooks/condition-class";
import { formatNumber } from "@/hooks/formatNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DefaultDashboard = () => {
  return (
    <>
      {jobData?.slice(5, 6)?.map((item) => {
        const tagClass = getTagClass(item?.tag);
        const postedTime = item.jobInfo.find((item) => item.title === "Posted");
        const experience = item.jobInfo.find(
          (item) => item.title === "Experience"
        );
        const sallaryStart = formatNumber(item?.sallaryRangeStart as number);
        const sallaryEnd = formatNumber(item?.sallaryRangeEnd as number);
        return (
          <div key={item.id} className="job-item">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="job-wrapper">
                  <div className="job-instructor-profile">
                    <div className="job-instructor-img f-left">
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        src={item?.img}
                        alt="company-img"
                      />
                    </div>
                    <div className="job-instructor-title">
                      <div className="save_post">
                        <button type="button">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                      <div className="job-tag mb-20">
                        <span className="tag-normal"> {item?.jobType} </span>
                        {item?.tag === "null" || (
                          <span className={tagClass}>{item?.tag}</span>
                        )}
                      </div>
                      <h5>
                        <Link href={`/job-details/${item?.id}`}>
                          {item?.jobTitle}
                        </Link>
                      </h5>
                      <Link
                        href={`/job-details/${item?.id}`}
                        className="company_name"
                      >
                        {item?.compnayName}{" "}
                        {item?.isVerified === true && (
                          <i className="fas fa-badge-check"></i>
                        )}
                      </Link>
                      <div className="job-meta">
                        <span>
                          <i className="far fa-map-marker-alt"></i>
                          {item?.location}
                        </span>
                        <span>
                          <i className={item?.currencyICon}></i>
                          {sallaryStart} - {sallaryEnd}
                        </span>
                        <span>
                          <i className="far fa-briefcase fa-fw"></i>
                          Experience : {experience?.value}s
                        </span>
                      </div>

                      <div className="skills_tags mt-30">
                        {item?.skillTags?.length ? (
                          <>
                            {item?.skillTags
                              ?.slice(0, 5)
                              ?.map((item, index) => (
                                <p key={index}> {item} </p>
                              ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="d-flex justify-content-between align-items-center job_sidebar flex-wrap">
                        <div className="job-salary">
                          {item?.tag === "close" ? (
                            <>
                              <span className="text-danger">
                                Position Closed
                              </span>
                            </>
                          ) : (
                            <>
                              <span>
                                <i className="fal fa-history"></i>
                                15 Days Left To Apply
                              </span>
                            </>
                          )}
                          <span>
                            <i className="far fa-calendar-week"></i>{" "}
                            {postedTime?.value}
                          </span>
                          <span>
                            <i className="far fa-users"></i>
                            Vacancy :{" "}
                            {item.vacancy ? (
                              <>
                                {item?.vacancy > 9
                                  ? item?.vacancy
                                  : `0${item?.vacancy}`}
                              </>
                            ) : (
                              <>0</>
                            )}
                          </span>
                        </div>
                        <div className="job-btn text-right">
                          <Link
                            className="b-btn btn-grey"
                            href={`/job-details/${item?.id}`}
                          >
                            Job Details <i className="far fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DefaultDashboard;

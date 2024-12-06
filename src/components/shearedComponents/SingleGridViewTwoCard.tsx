import { jobData } from "@/data/job-data";
import { getTagClass } from "@/hooks/condition-class";
import { formatNumber } from "@/hooks/formatNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  start: number;
  end: number;
}
const SingleGridViewTwoCard = ({ start, end }: propsType) => {
  return (
    <>
      {jobData?.slice(start, end).map((item) => {
        const tagClass = getTagClass(item?.tag);
        const postedTime = item.jobInfo.find((item) => item.title === "Posted");
        const experience = item.jobInfo.find(
          (item) => item.title === "Experience"
        );
        const sallaryStart = formatNumber(item?.sallaryRangeStart as number);
        const sallaryEnd = formatNumber(item?.sallaryRangeEnd as number);
        return (
          <div key={item?.id} className="col-xl-6 col-lg-6 col-md-12 mb-30">
            <div className="row">
              <div className="col-12">
                <div className="job-wrapper">
                   
                  <div className="job-instructor-profile">
                    <div className="job-instructor-img f-left">
                      <Image
                        style={{ width: "auto", height: "auto" }}
                        src={item?.img}
                        alt="company-img"
                      />
                    </div>
                    <div className="job-instructor-title">
                      <div className="save_post">
                        <i className="far fa-bookmark"></i>
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
                        href="/employer-details"
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
                          {sallaryStart}- {sallaryEnd}
                        </span>
                        <span>
                          <i className="far fa-briefcase fa-fw"></i>
                          Experience : {experience?.value}s
                        </span>
                        <span>
                          <i className="far fa-calendar-week"></i>{" "}
                          {postedTime?.value}
                        </span>
                      </div>

                      <div className="skills_tags mt-30 mb-30">
                        {item?.skillTags?.length ? (
                          <>
                            {item?.skillTags
                              ?.slice(0, 4)
                              ?.map((item, index) => (
                                <p key={index}> {item} </p>
                              ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="d-flex flex-wrap grid_two_job_card justify-content-between">
                        <div className="job-salary mt-15">
                          {item?.tag === "close" ? (
                            <>
                              <span className="text-danger">
                              0 Day Left To Apply
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

export default SingleGridViewTwoCard;

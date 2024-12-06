import { formatNumber } from "@/hooks/formatNumber";
import { IJobType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  item: IJobType;
  wrapperClass: string;
  tagClass: string;
  keyValue?: number;
}

const CommonGridJobCard = ({
  item,
  wrapperClass,
  tagClass,
  keyValue,
}: propsType) => {
  const postedTime = item.jobInfo.find((item) => item.title === "Posted");
  const experience = item.jobInfo.find((item) => item.title === "Experience");
  const sallaryStart = formatNumber(item?.sallaryRangeStart as number);
  const sallaryEnd = formatNumber(item?.sallaryRangeEnd as number);
  return (
    <>
      <div className={wrapperClass}>
        <div className="job-wrapper mb-30">
          <div className="">
            <div>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-30">
                <div className="job-tag">
                  <span className="tag-normal"> {item?.jobType} </span>
                  {item?.tag === "null" || (
                    <span className={tagClass}>{item?.tag}</span>
                  )}
                </div>
                <div className="posted_time">
                  <span>
                    <i className="far fa-calendar-week"></i> {postedTime?.value}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="job-instructor-profile mb-30">
            <div className="job-instructor-img f-left">
              <Image
                style={{ width: "auto", height: "auto" }}
                src={item?.img}
                alt="job-img"
              />
            </div>
            <div className="job-instructor-title">
              <h4>
                <Link href={`/job-details/${item?.id}`}>
                  {" "}
                  {item?.jobTitle}{" "}
                </Link>
              </h4>
              <Link href="/employer-details" className="company_name">
                {item?.compnayName}{" "}
                {item?.isVerified === true && (
                  <i className="fas fa-badge-check"></i>
                )}
              </Link>
              <span>
                <i className="far fa-map-marker-alt"></i> {item?.location}
              </span>
            </div>
          </div>
          <div className="job-content">
            <div className="experience_sallary d-flex flex-wrap">
              <span>
                <i className={item?.currencyICon}></i>
                {sallaryStart} - {sallaryEnd}
              </span>
              <span className="ml-20">
                <i className="far fa-briefcase fa-fw"></i>
                Experience : {experience?.value}s
              </span>
            </div>
            <div className="skills_tags mt-30 mb-30">
              {item?.skillTags?.length ? (
                <>
                  {item?.skillTags?.slice(0, 2)?.map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="job-salary dead_line">
              {item?.tag === "close" ? (
                <>
                  <span className="text-danger">0 Day Left To Apply</span>
                </>
              ) : (
                <>
                  <span>
                    <i className="fal fa-history"></i>
                    15 Days Left To Apply
                  </span>
                </>
              )}

              <Link href={`/job-details/${item?.id}`}>
                Job Details <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonGridJobCard;

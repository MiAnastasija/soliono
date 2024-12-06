import { jobData } from "@/data/job-data";
import { getTagClass } from "@/hooks/condition-class";
import { formatNumber } from "@/hooks/formatNumber";
import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SearchJobSidebarSingleCard = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const filterData = jobData?.filter((item) =>
    item.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filterData?.length ? (
        <>
          {filterData?.map((item) => {
            const tagClass = getTagClass(item?.tag);
            const postedTime = item.jobInfo.find(
              (item) => item.title === "Posted"
            );
            const experience = item.jobInfo.find(
              (item) => item.title === "Experience"
            );
            const sallaryStart = formatNumber(
              item?.sallaryRangeStart as number
            );
            const sallaryEnd = formatNumber(item?.sallaryRangeEnd as number);
            return (
              <div key={item.id} className="job-item mb-30">
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
                            <span className="tag-normal">{item?.jobType}</span>
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
                            {item?.compnayName}
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
                              <span>
                                <i className="far fa-calendar-week"></i>
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
                                Job Details
                                <i className="far fa-arrow-right"></i>
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
      ) : (
        <>
          <h2 className="text-center mt-105 d-flex align-content-center justify-content-center">
            No Job Found
            <button
              className="clear_search_btn ml-5"
              onClick={() => setSearchTerm("no-data")}
            >
              Clear Search
            </button>
          </h2>
        </>
      )}
    </>
  );
};

export default SearchJobSidebarSingleCard;

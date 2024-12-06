"use client";
import Link from "next/link";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { jobData } from "@/data/job-data";
import Image from "next/image";
import useGlobalContext from "@/hooks/use-context";
import { getTagClass } from "@/hooks/condition-class";
import { formatNumber } from "@/hooks/formatNumber";
const RelatedJobSlider = () => {
  const { jobId } = useGlobalContext();
  const data = jobData?.find((item) => item?.id == jobId);
  const jobCategory = data?.category;
  const filterData = jobData?.filter((item) => item?.category == jobCategory);
  return (
    <>
      <div className="related-job-slider owl-carousel position-relative">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".owl-next",
            prevEl: ".owl-prev",
          }}
        >
          {filterData?.slice(0, 4)?.map((item, num) => {
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
              <SwiperSlide key={num}>
                <div className="related-job-single">
                  <div className="job-item">
                    <div className="row align-items-center">
                      <div className="job-wrapper">
                        <div className="banck-icon">
                          <i className="flaticon-dashboard"></i>
                        </div>
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
                              <span className="tag-normal">
                                {" "}
                                {item?.jobType}{" "}
                              </span>
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
                                    ?.slice(0, 5)
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
                              </div>
                              <div className="job-btn text-right">
                                <Link
                                  className="b-btn btn-grey"
                                  href={`/job-details/${item?.id}`}
                                >
                                  Job Details{" "}
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
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="owl-nav">
          <div className="owl-prev">
            <button>
              <i className="fal fa-angle-left"></i>
            </button>
          </div>
          <div className="owl-next">
            <button>
              <i className="fal fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedJobSlider;

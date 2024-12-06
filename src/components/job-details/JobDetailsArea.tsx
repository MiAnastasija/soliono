"use client";
import React, { useState } from "react";
import RelatedJobSlider from "./RelatedJobSlider";
import { jobData } from "@/data/job-data";
import Image from "next/image";
import videoImg from "../../../public/assets/img/job/job-details-video.jpg";
import img1 from "../../../public/assets/img/job/job-details-sm-1.jpg";
import img2 from "../../../public/assets/img/job/job-details-sm-2.jpg";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import SocialMediaTwo from "../shearedComponents/SocialMediaTwo";
import useGlobalContext from "@/hooks/use-context";
import JobContactForm from "@/forms/JobContactForm";
import { formatNumber } from "@/hooks/formatNumber";
const JobDetailsArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const { jobId } = useGlobalContext();
  const filterData = jobData?.find((item) => item?.id == jobId);
  const sallaryStart = formatNumber(filterData?.sallaryRangeStart as number);
  const sallaryEnd = formatNumber(filterData?.sallaryRangeEnd as number);

  return (
    <>
      {filterData?.compnayName ? (
        <>
          <section className="job__details mt--80 pb-100 grey-bg">
            <div className="container">
              <div className="job-item job-item-2 white-bg">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="job-wrapper">
                      <div className="banck-icon">
                        <i className="flaticon-dashboard"></i>
                      </div>
                      <div className="job-instructor-profile">
                        <div className="job-instructor-img job-instructor-img-2 f-left">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={filterData?.img}
                            alt="job-instructor"
                          />
                        </div>
                        <div className="job-instructor-title">
                          <div className="job-tag mb-20">
                            <span className="tag-normal">
                              {" "}
                              {filterData?.jobType}{" "}
                            </span>
                          </div>
                          <h5>
                            <Link href="/job-grid">
                              {" "}
                              {filterData?.jobTitle}{" "}
                            </Link>
                          </h5>
                          <div className="skills_tags mt-20 mb-20">
                            {filterData?.skillTags?.length ? (
                              <>
                                {filterData?.skillTags?.map((item, index) => (
                                  <p key={index}> {item} </p>
                                ))}
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="job-meta job-meta-2 mt-15 d-lg-none">
                            <span>
                              <i className="far fa-map-marker-alt"></i>{" "}
                              {filterData?.location}
                            </span>
                            <span>
                              <i className={filterData?.currencyICon}></i>{" "}
                              {sallaryStart} - {sallaryEnd}
                            </span>
                          </div>
                          <div className="job-btn d-lg-none">
                            {filterData.tag === "closed" ? (
                              <>
                                <span className="b-btn ">Position Closed</span>
                              </>
                            ) : (
                              <>
                                {" "}
                                <Link
                                  className="b-btn b-btn-green"
                                  href="/application-form"
                                >
                                  Apply Job{" "}
                                  <i className="far fa-arrow-right"></i>
                                </Link>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                    <div className="job-right d-flex justify-content-between">
                      <div className="job-meta job-meta-2 mt-15">
                        <span>
                          <i className="far fa-map-marker-alt"></i>{" "}
                          {filterData?.location}
                        </span>
                        <span>
                          <i className={filterData?.currencyICon}></i>{" "}
                          {sallaryStart} - {sallaryEnd}
                        </span>
                      </div>
                      <div className="job-btn">
                        {filterData.tag === "closed" ? (
                          <>
                            <span className="b-btn ">Position Closed</span>
                          </>
                        ) : (
                          <>
                            <Link
                              className="b-btn b-btn-green"
                              href="/application-form"
                            >
                              Apply Job <i className="far fa-arrow-right"></i>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-details-wrapper white-bg">
                <div className="job-details-inner">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="job-list mb-50">
                        <h4>Responsibilities</h4>
                        <ul>
                          {filterData?.responsibilities?.map((item, index) => (
                            <li key={index}>{item.value}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="job-details-video mb-45">
                        <Image src={videoImg} alt="video-img" />
                        <Link
                          href=""
                          onClick={() => {
                            openVideoModal();
                          }}
                          className="job-play popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </Link>
                      </div>
                      <div className="job-list mb-50">
                        <h4>Requirements</h4>
                        <ul>
                          {filterData?.requirements?.map((item, index) => (
                            <li key={index}> {item.value} </li>
                          ))}
                        </ul>
                      </div>
                      <div className="job-thumb-wrapper mb-15">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="job-thumb mb-30">
                              <Image src={img1} alt="job-img" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="job-thumb mb-30">
                              <Image src={img2} alt="job-img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-list mb-50">
                        <h4>Professional Skills</h4>
                        <ul>
                          {filterData?.professionalSkills?.map(
                            (item, index) => (
                              <li key={index}>{item?.value}</li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="job-upload mb-50 d-none">
                        <form action="#">
                          <input type="text" placeholder="Upload Your Resume" />
                          <button type="submit" className="b-btn">
                            Upload Resume<i className="fal fa-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                      <div className="job-tags mb-15">
                        <span>Popular Tag :</span>
                        <ul>
                          <li>
                            <Link href="#">job</Link>
                          </li>
                          <li>
                            <Link href="#">resume</Link>
                          </li>
                          <li>
                            <Link href="#">job board</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="job-share theme-social d-sm-flex align-items-center mb-45">
                        <span>Share : </span>
                        {/* social links */}
                        <SocialMediaTwo />
                      </div>
                      <div className="job-map mb-50">
                        <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                      </div>
                      <div className="related-job">
                        <h4>Related Jobs</h4>

                        <RelatedJobSlider />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="team__job mt-15 mb-30">
                        <h4>Job Informations</h4>
                        <ul>
                          <li>
                            <h5> Company Name </h5>
                            <span> {filterData?.compnayName} </span>
                          </li>
                          <li>
                            <h5> Job Title </h5>
                            <span> {filterData?.jobTitle} </span>
                          </li>
                          {filterData?.jobInfo?.map((item, index) => (
                            <li key={index}>
                              <h5> {item?.title} </h5>
                              <span> {item?.value} </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="job-contact">
                        <h4>Send Us Message</h4>
                        <JobContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="vWLcyFtni6U"
            onClose={() => {
              openVideoModal();
            }}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default JobDetailsArea;

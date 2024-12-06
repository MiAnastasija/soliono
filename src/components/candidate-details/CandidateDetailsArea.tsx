"use client";
import React from "react";
import SocialMediaTwo from "../shearedComponents/SocialMediaTwo";
import img1 from "../../../public/assets/img/shape/team/team-shape-1.png";
import img2 from "../../../public/assets/img/shape/team/team-shape-2.png";
import img3 from "../../../public/assets/img/shape/team/team-shape-3.png";
import imgDetails2 from "../../../public/assets/img/team/details/team-quote.jpg";
import Image from "next/image";
import AboutCandidateSort from "./AboutCandidateSort";
import EducationLavel from "./EducationLavel";
import WrokExperience from "./WrokExperience";
import CandidateAdditionalInfo from "./CandidateAdditionalInfo";
import useGlobalContext from "@/hooks/use-context";
import { candidateData } from "@/data/candidate-data";
import Link from "next/link";
import CandidateReviewForm from "@/forms/CandidateReviewForm";
const CandidateDetailsArea = () => {
  const { candidateID } = useGlobalContext();
  const filterData = candidateData?.find((item) => item?.id == candidateID);
  return (
    <>
      {filterData?.id ? (
        <>
          <section className="team__area pb-140 grey-bg">
            <div className="container">
              <div className="team__avater">
                <div className="team__shape">
                  <Image className="one" src={img1} alt="img-one" />
                  <Image className="two" src={img2} alt="img-two" />
                  <Image className="three" src={img3} alt="img-3" />
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="team__avater-info d-sm-flex align-items-center">
                      <div className="team__avater-img mr-35">
                        <Image src={filterData?.img} alt="details" />
                      </div>
                      <div className="team__details">
                        <h4> {filterData?.title} </h4>
                        <span> {filterData?.subTitle} </span>

                        <div className="team__social-2 theme-social">
                          <SocialMediaTwo />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="team__btn d-sm-flex justify-content-lg-end">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                        className="b-btn b-btn-white-2 mr-20 mb-30"
                      >
                        Hire Me Now<i className="far fa-arrow-right"></i>
                      </button>
                      <button
                        type="button"
                        className="b-btn b-btn-white-2 mb-30"
                      >
                        Download CV<i className="far fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team__information">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="team__info-wrapper">
                      <div className="team__info mt-45 pt-55">
                        <div className="team__info-title">
                          <h4>Learn About Me</h4>
                        </div>
                        <div className="team__info-content">
                          {" "}
                          header_onteam__quote mt-10 mb-45
                          <div className="team__about">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt.
                            </p>
                            <AboutCandidateSort />
                          </div>
                        </div>
                      </div>
                      <EducationLavel />
                      <WrokExperience />
                      {/* <ProfetionalSkills /> */}
                      <div className="team__quote mt-10 mb-45">
                        <div className="team__quote-avater f-left fix">
                          <Image src={imgDetails2} alt="img-quate" />
                        </div>
                        <div className="team__quote-text ml-140">
                          <h4>Fábio Costa Carvalho</h4>
                          <span>CEO & Founder</span>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto
                          </p>
                        </div>
                      </div>
                      <div className="team__info mt-10">
                        <div className="team__info-title">
                          <h4>Add Reviews</h4>
                        </div>
                        <div className="team__info-content">
                          <div className="contact__form">
                            <CandidateReviewForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CandidateAdditionalInfo />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CandidateDetailsArea;

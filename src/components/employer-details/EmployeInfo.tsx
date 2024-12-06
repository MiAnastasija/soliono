"use client" 
import React, { useState } from "react";
import img1 from "../../../public/assets/img/b-employer/emp-1.jpg";
import img2 from "../../../public/assets/img/b-employer/emp-2.jpg";
import img3 from "../../../public/assets/img/b-employer/video/emp-v-1.jpg";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import EmployCardSingle from "../shearedComponents/EmployCardSingle";
import FaqCard from "../shearedComponents/FaqCard";
import useGlobalContext from "@/hooks/use-context";
import { employeData } from "@/data/employe-data";
const EmployeInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const { employeId } = useGlobalContext();
  const filterData = employeData?.find((item) => item.id == employeId);

  return (
    <>
      <div className="employer__info-wrapper pt-55">
        <div className="employer__title">
          <h3>Learn About Us</h3>
        </div>
        <div className="employer__info">
          <p>
            {filterData?.details}
          </p>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="employer__list  mt-15">
                <ul>
                  <li>Well 1st Class Company</li>
                  <li>Find A Good Idea Look For Better</li>
                  <li>Setting Height And Width Images </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="employer__list  mt-15">
                <ul>
                  <li>Best Awards Wining Company</li>
                  <li>Keyboard Event-Related Bugs Browser</li>
                  <li>Smashing Podcast Episode With Eduardo </li>
                </ul>
              </div>
            </div> 
          </div>
        </div>
        <div className="employer__img mt-20">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="employer__thumb mb-30">
                <Image style={{ width: "100%", height: "auto" }} src={img1} alt="employer-img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="employer__thumb mb-30">
                <Image style={{ width: "100%", height: "auto" }} src={img2} alt="employer-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="employer__video mb-45">
          <Image style={{ width: "100%", height: "auto" }} src={img3} alt="employe-img" />
          <Link
            href=""
            onClick={() => {
              openVideoModal();
            }}
            className="employer__play popup-video"
          >
            <i className="fas fa-play"></i>
          </Link>
        </div>
        <div className="employer__title mb-35">
          <h3>Available Jobs</h3>
        </div>
        <div className="employer__available mb-45">
          <EmployCardSingle start={8} end={12} />
        </div>
        <div className="employer__title mb-35">
          <h3>Why Choose Our Company</h3>
        </div>
        <div className="employer__faq faq__content">
          <FaqCard start={0} end={3} idProps="accordion" />
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default EmployeInfo;

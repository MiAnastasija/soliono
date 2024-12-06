"use client";
import { faqData } from "@/data/faq-data";
import { IFaqInterface } from "@/interFace/interFace";
import React, { useState } from "react";
import FaqCard from "../shearedComponents/FaqCard";
const FaqContent = () => {
  const [faqId, setFaqId] = useState<number>(2);
  const [active, setActive] = useState<boolean>(true);
  const handleOpneFaq = (item: IFaqInterface) => {
    setFaqId(item?.id);
    setActive(!active);
  };
  return (
    <>
      <div className="faq__area pt-130 pb-130 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="faq__content">
                <FaqCard start={0} end={8} idProps="accordion" />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="faq__content">
                <FaqCard start={8} end={16} idProps="accordion-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;

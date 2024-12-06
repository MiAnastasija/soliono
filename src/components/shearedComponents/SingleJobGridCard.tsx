"use client";
import { jobData } from "@/data/job-data";
import { getTagClass } from "@/hooks/condition-class";
import { sliceProps } from "@/interFace/interfaceCommon";
import React from "react";
import CommonGridJobCard from "./CommonGridJobCard";
const SingleJobGridCard = ({ start, end }: sliceProps) => {
  return (
    <>
      {jobData?.slice(start, end).map((item) => {
        const tagClass = getTagClass(item?.tag);
        return (
          <CommonGridJobCard
            key={item.id}
            item={item}
            wrapperClass="col-xl-6 col-lg-6 col-md-12"
            tagClass={tagClass}
          />
        );
      })}
    </>
  );
};

export default SingleJobGridCard;

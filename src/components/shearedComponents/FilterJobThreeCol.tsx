"use client";
import { jobData } from "@/data/job-data";
import { getTagClass } from "@/hooks/condition-class";
import useGlobalContext from "@/hooks/use-context";
import React from "react";
import CommonGridJobCard from "./CommonGridJobCard";

const FilterJobThreeCol = () => {
  const { niceSelectData } = useGlobalContext();

  const filterData = jobData?.filter(
    (item) =>
      item?.category === niceSelectData ||
      item?.location === niceSelectData ||
      item?.jobType === niceSelectData
  );

  return (
    <>
      {
        filterData?.length ?
        <>
        {filterData?.map((item) => {
        const tagClass = getTagClass(item?.tag);
        return (
           
          <CommonGridJobCard key={item.id} item={item} wrapperClass="col-xl-4 col-lg-6 col-md-12" tagClass={tagClass}/>
        );
      })}
        </>
        :
        <>
         <h2 className="text-center mt-105">No Job Found</h2>
        </>
      }
    </>
  );
};

export default FilterJobThreeCol;

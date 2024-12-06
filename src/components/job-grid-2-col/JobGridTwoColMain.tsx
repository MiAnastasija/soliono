"use client";
import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import FilteringAreaHomeTwo from "../shearedComponents/FilteringAreaHomeTwo";
import SingleGridViewTwoCard from "../shearedComponents/SingleGridViewTwoCard";
import useGlobalContext from "@/hooks/use-context";
import FilterSingleGridViewTwoCard from "./FilterSingleGridViewTwoCard";
import Pagination from "../shearedComponents/Pagination";

const JobGridTwoColMain = () => {
  const { niceSelectData, searchTerm } = useGlobalContext();
  return (
    <>
      <BreadCamb title="Job Grid Two Col" />
      <div className="job-area pt-80 pb-50">
        <div className="container">
          <FilteringAreaHomeTwo />
          <div className="row">
            {niceSelectData === "no-data" ||
            
            niceSelectData === "Job Categories" ||
            niceSelectData === "Job Types" ||
            niceSelectData === "Locations" ? (
              <>
                <SingleGridViewTwoCard start={8} end={16} />
              </>
            ) : (
              <>
                <FilterSingleGridViewTwoCard />
              </>
            )}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Pagination propsclass="basic-pagination text-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobGridTwoColMain;

"use client";
import React from "react";
import FilteringAreaHomeTwo from "../shearedComponents/FilteringAreaHomeTwo";
import Map from "./Map";
import SingleJobGridCard from "../shearedComponents/SingleJobGridCard";
import useGlobalContext from "@/hooks/use-context";
import FilterJobThreeCol from "../shearedComponents/FilterJobThreeCol";
import Pagination from "../shearedComponents/Pagination";
const JobGirdMapArea = () => {
  const { niceSelectData } = useGlobalContext();
  return (
    <>
      <div className="job-area pt-80 pb-50">
        <div className="container">
          <Map />
          <FilteringAreaHomeTwo />
          <div className="row">
            {niceSelectData === "no-data" ||
            niceSelectData === "Job Categories" ||
            niceSelectData === "Job Types" ||
            niceSelectData === "Locations" ? (
              <>
                <SingleJobGridCard start={0} end={12} />
              </>
            ) : (
              <>
                <FilterJobThreeCol />
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

export default JobGirdMapArea;

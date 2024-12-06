"use client";
import React from "react";
import JobSidebarSide from "../job-sidebar/JobSidebarSide";
import JobGridSidebarCardSingle from "./JobGridSidebarCardSingle";
import useGlobalContext from "@/hooks/use-context";
import FilterJobGridSidebarCardSingle from "./FilterJobGridSidebarCardSingle";
import Pagination from "../shearedComponents/Pagination";
import SearchJobGridCard from "./SearchJobGridCard";
const JobAreaJobGridSidebar = () => {
  const { niceSelectData, searchTerm } = useGlobalContext();

  return (
    <>
      <div className="job-area grey-bg pt-80 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <JobSidebarSide />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="row">
                <>
                  {searchTerm === "no-data" ? (
                    <>
                      {niceSelectData === "no-data" ||
                      niceSelectData === "Job Categories" ||
                      niceSelectData === "Job Types" ||
                      niceSelectData === "Locations" ? (
                        <>
                          <JobGridSidebarCardSingle start={12} end={20} />
                        </>
                      ) : (
                        <>
                          <FilterJobGridSidebarCardSingle />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                       <SearchJobGridCard/>
                    </>
                  )}
                </>
              </div>
            </div>
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

export default JobAreaJobGridSidebar;

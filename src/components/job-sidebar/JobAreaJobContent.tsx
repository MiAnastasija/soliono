"use client";
import React from "react";
import JobSidebarSide from "./JobSidebarSide";
import SingleJobOneGridView from "../shearedComponents/SingleJobOneGridView";
import useGlobalContext from "@/hooks/use-context";
import FilterSingleJobOneGridView from "./FilterSingleJobOneGridView";
import Pagination from "../shearedComponents/Pagination";
import SearchJobSidebarSingleCard from "./SearchJobSidebarSingleCard";

const JobAreaJobContent = () => {
  const { niceSelectData, searchTerm } = useGlobalContext();
  return (
    <>
      <div className="job-area grey-bg pt-80 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-12">
              <JobSidebarSide />
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12">
              <>
                {searchTerm === "no-data" ? (
                  <>
                    {" "}
                    {niceSelectData === "no-data" ||
                    niceSelectData === "Job Categories" ||
                    niceSelectData === "Job Types" ||
                    niceSelectData === "Locations" ? (
                      <>
                        <SingleJobOneGridView start={6} end={14} />
                      </>
                    ) : (
                      <>
                        <FilterSingleJobOneGridView />
                      </>
                    )}{" "}
                  </>
                ) : (
                  <>
                   <SearchJobSidebarSingleCard/>
                  </>
                )}
              </>
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

export default JobAreaJobContent;

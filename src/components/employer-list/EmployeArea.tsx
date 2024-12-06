"use client";
import React from "react";
import EmployCardSingle from "../shearedComponents/EmployCardSingle";
import Pagination from "../shearedComponents/Pagination";
import EmploySidebarFilter from "./EmploySidebarFilter";
import useGlobalContext from "@/hooks/use-context";
import FilterEmployerCard from "./FilterEmployerCard";
const EmployeArea = () => {
  const { niceSelectData } = useGlobalContext();
  return (
    <>
      <div className="job-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <EmploySidebarFilter />
            <div className="col-xl-8 col-lg-8 col-md-12">
              {niceSelectData === "no-data" ||
              niceSelectData === "Employer Category" ||
              niceSelectData === "Job Categories" ||
              niceSelectData === "Team Size" ||
              niceSelectData === "Experience" ||
              niceSelectData === "Gender" ||
              niceSelectData === "Qualification" ||
              niceSelectData === "Career Level" ? (
                <>
                  <EmployCardSingle start={0} end={6} />
                  <Pagination propsclass="basic-pagination mt-30" />
                </>
              ) : (
                <>
                  <FilterEmployerCard />
                </>
              )}

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeArea;

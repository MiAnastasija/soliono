"use client";
import { jobData } from "@/data/job-data";
import { getTagClass } from "@/hooks/condition-class";
import useGlobalContext from "@/hooks/use-context";
import React from "react";
import CommonGridJobCard from "../shearedComponents/CommonGridJobCard";

const SearchJobGridCard = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const filterData = jobData?.filter((item) =>
    item.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      {filterData?.length ? (
        <>
          {filterData?.map((item) => {
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
      ) : (
        <>
          <h2 className="text-center mt-105 d-flex align-content-center justify-content-center">
            No Job Found{" "}
            <button
              className="clear_search_btn ml-5"
              onClick={() => setSearchTerm("no-data")}
            >
              Clear Search
            </button>{" "}
          </h2>
        </>
      )}
    </>
  );
};

export default SearchJobGridCard;

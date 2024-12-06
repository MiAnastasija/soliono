"use client";
import {
  LocationsData,
  categoryData,
  shortByData,
} from "@/data/nice-select-data";
import NiceSelect from "@/elements/NiceSelect";
import React from "react";

const FilteringAreaHomeTwo = () => {
  const selectHandler = () => {};

  return (
    <>
      <div className="row mb-45">
        <div className="col-lg-3">
          <div className="job-filter mb-10">
            <NiceSelect
              options={shortByData}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              className=""
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="job-filter mb-10">
            <NiceSelect
              options={categoryData}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              className=""
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="job-filter mb-10">
            <NiceSelect
              options={LocationsData}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              className=""
            />
          </div>
        </div>
        <div className="col-lg-3 mb-10">
          <button className="b-btn w-100 btn-c-0">
            Find Jobs Now <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilteringAreaHomeTwo;

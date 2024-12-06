"use client";
import React, { FormEvent, useState } from "react";
import bannerImg from "../../../public/assets/img/bg/banner.png";
import Image from "next/image";
import NiceSelect from "@/elements/NiceSelect";
import {
  LocationsData,
  careerLavelData,
  categoryData,
  experienceData,
  genderData,
  qualificationData,
  shortByData,
} from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
const JobSidebarSide = () => {
  const [first, setfirst] = useState("");
  const { setSearchTerm } = useGlobalContext();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirst(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(first);
  };

  const selectHandler = () => {};
  return (
    <>
      <form className="job-widget" onSubmit={handleSubmit}>
        <div className="search_form">
          <input
            name="search-value"
            type="text"
            placeholder="Search Job"
            onChange={handleInputChange}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className="job-widget">
        <NiceSelect
          options={shortByData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>
      <div className="job-widget">
        <NiceSelect
          options={categoryData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>
      <div className="job-widget">
        <NiceSelect
          options={LocationsData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>
      <div className="job-widget">
        <NiceSelect
          options={careerLavelData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>
      <div className="job-widget">
        <NiceSelect
          options={experienceData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>
      <div className="job-widget">
        <NiceSelect
          options={genderData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>
      <div className="job-widget">
        <NiceSelect
          options={qualificationData}
          defaultCurrent={0}
          onChange={selectHandler}
          name=""
          className=""
        />
      </div>

      <div className="job-widget border-0">
        <Image className="mb-50" src={bannerImg} alt="" />
      </div>
    </>
  );
};

export default JobSidebarSide;

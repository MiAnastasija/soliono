"use client"
import { LocationsData, careerLavelData, categoryData, employCategory, experienceData, genderData, qualificationData, teamSize } from "@/data/nice-select-data";
import NiceSelect from '@/elements/NiceSelect';
import React from 'react';
import thumb from "../../../public/assets/img/bg/banner-job.png"
import Image from "next/image";
import Link from "next/link";
const EmploySidebarFilter = () => {

 
    const selectHandler = () => {}
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="emp-sidebar">
                <div className="job-widget">
                <NiceSelect
                      options={employCategory}
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
                      options={categoryData}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name=""
                      className=""
                    />
                </div>
                <div className="job-widget">
                <NiceSelect
                      options={teamSize}
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
                  <div className="filter-btn">
                    <Link href="" className="f-btn">
                      Filter <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="job-widget border-0 mt-30">
                  <Image src={thumb} alt="thumb-img" />
                </div>
              </div>
            </div> 
        </>
    );
};

export default EmploySidebarFilter;
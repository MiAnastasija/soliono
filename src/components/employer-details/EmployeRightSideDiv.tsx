"use client";
import { employeData } from "@/data/employe-data";
import JobContactForm from "@/forms/JobContactForm";
import { formatNumber } from "@/hooks/formatNumber";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React from "react";

const EmployeRightSideDiv = () => {
  const { employeId } = useGlobalContext();
  const filterData = employeData?.find((item) => item.id == employeId);
  const data = filterData?.companyData;
  const employess = formatNumber(data?.employees as number);
  const followers = formatNumber(data?.followers as number);

  return (
    <>
      {data ? (
        <>
          <div className="employer__company mb-30">
            <h4>Company Info</h4>
            <ul>
              <li>
                <h5>
                  <i className="far fa-building"></i>Company Name
                </h5>
                <span> {filterData?.compnayName} </span>
              </li>
              <li>
                <h5>
                  <i className="far fa-user-circle"></i>Founders
                </h5>
                <span>
                  {data.founders[0]},{data.founders[1]}
                </span>
              </li>
              <li>
                <h5>
                  <i className="far fa-map-marker-alt"></i>Head Office
                </h5>
                <span> {filterData?.location} </span>
              </li>
              <li>
                <h5>
                  <i className="far fa-tag"></i> Industry
                </h5>
                <span> {data?.industry} </span>
              </li>
              <li>
                <h5>
                  <i className="far fa-tag"></i> Type
                </h5>
                <span> {data?.type} </span>
              </li>

              <li>
                <h5>
                  <i className="far fa-user-circle"></i>Employee
                </h5>
                <span>{employess}</span>
              </li>

              <li>
                <h5>
                  <i className="fal fa-clock"></i>Founded in
                </h5>
                <span> {data?.year} </span>
              </li>
              <li>
                <h5>
                  <i className="far fa-briefcase"></i>Jobs Posted
                </h5>
                <span>25</span>
              </li>

              <li>
                <h5>
                  <i className="fal fa-envelope"></i>Email
                </h5>
                <span>{data?.contact_information.email}</span>
              </li>
              <li>
                <h5>
                  <i className="fal fa-envelope"></i>HR Contact
                </h5>
                <span>{data?.contact_information.hr_contact}</span>
              </li>
              <li>
                <h5>
                  <i className="fal fa-phone"></i>Phone
                </h5>
                <span>{data?.contact_information.phone}</span>
              </li>

              <li>
                <h5>
                  <i className="fal fa-heart"></i>Followers
                </h5>
                <span> {followers} </span>
              </li>
              <li>
                <h5><i className="fas fa-share-alt"></i> Socials </h5>
                <span className="employe_socials">
                  {" "}
                  <Link href={data?.website}>
                    <i className="fal fa-globe"></i>
                  </Link>
                  <Link href={data?.social_media?.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href={data?.social_media?.twitter}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href={data?.social_media?.linkedin}>
                    <i className="fab fa-linkedin"></i>
                  </Link>{" "}
                </span>
              </li>
            </ul>

            
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="employer__map mb-30">
        <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div className="job-contact">
        <h4>Conatct Us</h4>
        <JobContactForm />
      </div>
    </>
  );
};

export default EmployeRightSideDiv;

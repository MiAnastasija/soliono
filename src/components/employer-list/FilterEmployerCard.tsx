import { employeData } from "@/data/employe-data";
import GetRatting from "@/hooks/GetRatting";
import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "../shearedComponents/Pagination";

const FilterEmployerCard = () => {
  const { niceSelectData } = useGlobalContext();

  const filterData = employeData?.filter(
    (item) => item?.companyType === niceSelectData
  );
  return (
    <>
      {filterData?.length ? (
        <>
          {filterData?.map((item) => (
            <div key={item?.id} className="job-item employer-item mb-30">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="job-wrapper">
                    <div className="banck-icon">
                      <i className={item?.icon}></i>
                    </div>
                    <div className="job-instructor-profile">
                      <div className="job-instructor-img f-left">
                        <Image
                          style={{ width: "100%", height: "auto" }}
                          src={item?.img}
                          alt=""
                        />
                      </div>
                      <div className="employe_card_body">
                        <h5 className="company_title">
                          <Link href={`/employer-details/${item?.id}`}>
                            {" "}
                            {item?.compnayName}{" "}
                            {item?.isVerified === true && (
                              <i className="fas fa-badge-check"></i>
                            )}
                          </Link>
                        </h5>
                        <div className="job-meta mt-15">
                          <span>
                            <i className="fas fa-building"></i>{" "}
                            {item?.companyType}
                          </span>
                          <span className="emp-rating">
                            (<GetRatting averageRating={item?.ratting} />)
                          </span>
                          <span>
                            <i className="far fa-map-marker-alt"></i>{" "}
                            {item?.location}{" "}
                          </span>
                        </div>
                        <div className="mt-40">
                          <p>
                            Quis autem vel eum reprehenderit voluptate velitquam
                            molestiae Quis autem vel eum reprehenderit voluptate
                            velitquam molestiae Quis autem vel eum reprehenderit
                            voluptate velitquam molestiae
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="employe_card_footer">
                    <div className="employe_cards d-flex align-items-center flex-wrap">
                      <span>
                        Open Job{" "}
                        {item?.openJob ? (
                          <>
                            {item?.openJob > 9
                              ? item?.openJob
                              : `0${item?.openJob}`}{" "}
                          </>
                        ) : (
                          <>0</>
                        )}{" "}
                      </span>
                      <span>
                        Vacancy{" "}
                        {item?.vacancy ? (
                          <>
                            {item?.vacancy > 9
                              ? item?.vacancy
                              : `0${item?.vacancy}`}{" "}
                          </>
                        ) : (
                          <>0</>
                        )}
                      </span>
                    </div>
                    <div className="job-btn empl-btn">
                      <Link
                        className="b-btn b-btn-green"
                        href={`/employer-details/${item?.id}`}
                      >
                        View Details <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Pagination propsclass="basic-pagination mt-30" />
        </>
      ) : (
        <>
          <h2 className="text-center mt-105">
            No Employe Found For {`"${niceSelectData}"`}{" "}
          </h2>
        </>
      )}
    </>
  );
};

export default FilterEmployerCard;

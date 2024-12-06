"use client";
import { pricingdata } from "@/data/pricing-data";
import useGlobalContext from "@/hooks/use-context";
import { IPricingPlan } from "@/interFace/interFace";
import Link from "next/link";
import React, { useState } from "react";

const PricingArea = () => {
  const {setBuyPackage} = useGlobalContext()
  const [tag, setTag] = useState<string>("monthly");
  const filterData = pricingdata.filter((item) => item.pack === tag);
  const [data, setData] = useState<IPricingPlan[]>(filterData);

  const handleFilterData = (pack: string) => {
    setTag(pack);
    const filterData = pricingdata.filter((item) => item.pack === pack);
    setData(filterData);


  };

  const packageData = [
    {
      id: 1,
      pack: "monthly",
    },
    {
      id: 2,
      pack: "yearly",
    },
  ];

  return (
    <>
      <section className="price__area pt-75 pb-50 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="section-title text-center mb-40">
                <h2>Pricing Plan</h2>
                <p className="pl-65 pr-65">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur
                </p>
              </div>
            </div>
          </div>
          <div className="price__tab mb-45">
            <ul
              className="nav nav-pills justify-content-center"
              id="price-tab"
              role="tablist"
            >
              {packageData?.map((item) => (
                <li key={item?.id} className="nav-item">
                  <button
                    onClick={() => handleFilterData(item?.pack)}
                    className={`nav-link ${
                      item?.pack === tag ? "active show" : ""
                    }`}
                  >
                    {item?.pack}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="price__tab-content">
            <div className="tab-content" id="price-tab-content">
              <div
                className="tab-pane fade active show"
                id="yearly"
                role="tabpanel"
                aria-labelledby="yearly-tab"
              >
                <div className="row no-gutters">
                  {data?.map((item) => (
                    <div key={item?.id} className="col-xl-4 col-lg-4 col-md-6">
                      <div className="price__item white-bg mb-30">
                        <div className="price__item-wrapper">
                          <div className="price__price">
                            <h4>{item?.plan}</h4>
                            <span>
                              ${item?.price}/
                              <span>
                                {item?.pack === "monthly" ? "m" : "yr"}
                              </span>
                            </span>
                          </div>
                          <div className="price__offer mb-25">
                            <span>
                              {item?.fullPack ? (
                                <> {item?.offer} </>
                              ) : (
                                <>
                                  {" "}
                                  Start With full{" "}
                                  <span className="off">
                                    {item?.offer}
                                  </span>{" "}
                                </>
                              )}
                            </span>
                          </div>
                          <div className="price__list mb-40">
                            <ul>
                              {item?.pricingList?.map((item, index) => (
                                <li key={index} className={item?.class}>
                                  <span> {item?.tite} </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="price__btn">
                            <Link onClick={()=> setBuyPackage(item)} href="/checkout" className="b-btn">
                              Buy Package <i className="far fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;

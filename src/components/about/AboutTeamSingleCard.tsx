import { teamData } from "@/data/team-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const AboutTeamSingleCard = () => {
  return (
    <>
      {teamData?.map((item) => (
        <div key={item?.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="team__item mb-90">
            <div className="team__thumb text-center mt--50 mb-25">
              <Image style={{ width: "100%", height: "auto" }} src={item?.img} alt="team" />
            </div>
            <div className="team__content text-center">
              <h4>
                <Link href="/candidate-details"> {item?.name} </Link>
              </h4>
              <span>{item?.title}</span>
              <div className="team__social theme-social">
                <ul>
                  {item?.social?.map((itm, index) => (
                    <li key={index}>
                      <Link href={itm.links}>
                        <i className={itm.icon}></i>
                        <i className={itm.icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutTeamSingleCard;

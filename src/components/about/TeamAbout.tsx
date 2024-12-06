import React from "react";
import AboutTeamSingleCard from "./AboutTeamSingleCard";

const TeamAbout = () => {
  return (
    <>
      <section className="team__area pb-40 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-95">
                <span>Team Member</span>
                <h2>Exclusive Team Member</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <AboutTeamSingleCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAbout;

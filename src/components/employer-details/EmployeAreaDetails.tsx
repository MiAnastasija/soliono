import React from "react";
import EmployHead from "./EmployHead";
import EmployeInfo from "./EmployeInfo";
import EmployeRightSideDiv from "./EmployeRightSideDiv";

const EmployeAreaDetails = () => {
  return (
    <>
      <section className="employer__details pt-35 pb-125 grey-bg">
        <div className="container">
          <div className="employer__inner">
            <div className="row">
              <div className="col-xl-8">
                <div className="employer__wrapper">
                  <EmployHead />
                  <EmployeInfo />
                </div>
              </div>
              <div className="col-xl-4">
                <EmployeRightSideDiv />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeAreaDetails;

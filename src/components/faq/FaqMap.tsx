import React from "react";

const FaqMap = () => {
  return (
    <>
      <section className="faq__map fix">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-xl-12">
              <div className="faq__map-wrapper">
                <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqMap;

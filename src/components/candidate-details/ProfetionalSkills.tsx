import React from "react";

const ProfetionalSkills = () => {
  return (
    <>
      <div className="team__info mt-10">
        <div className="team__info-title">
          <h4>Professional Skills</h4>
        </div>
        <div className="team__info-content">
          <div className="team__skill mt-40">
            <div className="row skill-parent">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="team__skill-item text-center mb-45">
                  <div className="progress-circular">
                    <input
                      type="text"
                      className="knob"
                      value="0"
                      data-rel="85"
                      data-linecap="square"
                      data-width="115"
                      data-height="115"
                      data-bgcolor="#f5f7fc"
                      data-fgcolor="#2c2937"
                      data-thickness=".10"
                      data-readonly="true"
                      disabled
                    />
                  </div>
                  <div className="team__skill-content">
                    <h4>Graphic Design</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="team__skill-item text-center mb-45">
                  <div className="progress-circular">
                    <input
                      type="text"
                      className="knob"
                      value="0"
                      data-rel="79"
                      data-linecap="square"
                      data-width="115"
                      data-height="115"
                      data-bgcolor="#f5f7fc"
                      data-fgcolor="#2c2937"
                      data-thickness=".10"
                      data-readonly="true"
                      disabled
                    />
                  </div>
                  <div className="team__skill-content">
                    <h4>Web Developer</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="team__skill-item text-center mb-45">
                  <div className="progress-circular">
                    <input
                      type="text"
                      className="knob"
                      value="0"
                      data-rel="82"
                      data-linecap="square"
                      data-width="115"
                      data-height="115"
                      data-bgcolor="#f5f7fc"
                      data-fgcolor="#2c2937"
                      data-thickness=".10"
                      data-readonly="true"
                      disabled
                    />
                  </div>
                  <div className="team__skill-content">
                    <h4>IT Consulting</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="team__skill-item text-center mb-45">
                  <div className="progress-circular">
                    <input
                      type="text"
                      className="knob"
                      value="0"
                      data-rel="68"
                      data-linecap="square"
                      data-width="115"
                      data-height="115"
                      data-bgcolor="#f5f7fc"
                      data-fgcolor="#2c2937"
                      data-thickness=".10"
                      data-readonly="true"
                      disabled
                    />
                  </div>
                  <div className="team__skill-content">
                    <h4>Business Sense</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfetionalSkills;

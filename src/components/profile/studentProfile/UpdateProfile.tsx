"use client";
import React from "react";
import bgImg from "../../../../public/assets/img/page-title/jobs-header-original.jpg";
import thumb from "../../../../public/assets/img/team/team-1.jpg";
import Image from "next/image";
import RestPasswordForm from "@/forms/RestPasswordForm";
import UserProfileUpdate from "@/forms/UserProfileUpdate";
const UpdateProfile = () => {
  return (
    <>
      <div className="student-profile-enroll">
        <div className="tab-content mt-30" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="profileA"
            role="tabpanel"
            aria-labelledby="profileA-tab"
          >
            <div className="student-profile-settings">
              <div className="student-profile-setting-img mb-40">
                <div
                  className="student-profile-setting-cover-img"
                  style={{ backgroundImage: `url(${bgImg.src})` }}
                ></div>
                <div className="student-profile-setting-author-img upload-profile-pic">
                  <Image
                    
                    src={thumb}
                    alt="img not found"
                  />
                </div>
              </div>
              <UserProfileUpdate />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <RestPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;

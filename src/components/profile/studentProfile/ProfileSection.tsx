"use client";
import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import DashboardCounter from "./DashboardCounter";
import DefaultDashboard from "./DefaultDashboard";
import thumb from "../../../../public/assets/img/team/team-1.jpg";
import MyProfile from "./MyProfile";
import UpdateProfile from "./UpdateProfile";
import ApplicationList from "./ApplicationList";
import Image from "next/image";
import SavedJobList from "./SavedJobList";
import SortList from "./SortList";
const ProfileSection = () => {
  return (
    <div className="course-details-area grey-bg pt-100 pb-100">
      <div className="container">
        <div className="student-profile-author pb-30">
          <div className="student-profile-author-img">
            <Image
                src={thumb}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
          </div>
          <div className="student-profile-author-text">
            <span>Hello,</span>
            <h3 className="student-profile-author-name text-capitalize">
              {" "}
              Jhnathon Smith{" "}
            </h3>
          </div>
        </div>
        <div className="row">
          <ProfileSidebar />
          <div className="col-xl-9 col-lg-8">
            <div className="student-profile-content">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h4 className="mb-25">Dashboard</h4>
                  <div className="student-profile-content-fact">
                    <DashboardCounter />
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb-25">Recent Applied Job </h4>

                        <DefaultDashboard />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h4 className="mb-25">Profile Info</h4>
                  <MyProfile />
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <h4 className="mb-25">  Applied Job </h4>
                  <ApplicationList />
                </div>
                <div
                  className="tab-pane fade"
                  id="saved"
                  role="tabpanel"
                  aria-labelledby="saved-tab"
                >
                  <h4 className="mb-25"> Saved Job </h4>
                  <SavedJobList />
                </div>
                <div
                  className="tab-pane fade"
                  id="sort"
                  role="tabpanel"
                  aria-labelledby="sort-tab"
                >
                  <h4 className="mb-25"> Sort Listed Jobs </h4>
                  <SortList/>
                </div>

                <div
                  className="tab-pane fade"
                  id="setting"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                >
                  <h4 className="mb-25"> Update Profile </h4>
                  <UpdateProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

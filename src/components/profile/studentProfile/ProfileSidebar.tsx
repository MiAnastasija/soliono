"use client";
import React from "react";
import { useRouter } from "next/navigation";
const ProfileSidebar = () => {
  const router = useRouter();
  const logout = () => {
    router.push("/login");
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="student-profile-sidebar mb-30">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i className="fas fa-tachometer-alt-fast"></i>
              Dashboard
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="sort-tab"
              data-bs-toggle="tab"
              data-bs-target="#sort"
              type="button"
              role="tab"
              aria-controls="sort"
              aria-selected="false"
            >
              <i className="fas fa-ballot"></i>
              Sort Listed Job
            </button>
          </li> 

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              <i className="fas fa-browser"></i> Applied Job
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="saved-tab"
              data-bs-toggle="tab"
              data-bs-target="#saved"
              type="button"
              role="tab"
              aria-controls="saved"
              aria-selected="false"
            >
              <i className="fas fa-bookmark"></i> Saved Job
            </button>
          </li>
          
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <i className="fas fa-user"></i> My Profile
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="setting-tab"
              data-bs-toggle="tab"
              data-bs-target="#setting"
              type="button"
              role="tab"
              aria-controls="setting"
              aria-selected="false"
            >
              <i className="fas fa-cog"></i> Settings
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              onClick={logout}
              className="nav-link"
              id="logout-tab"
              data-bs-toggle="tab"
              data-bs-target="#logout"
              type="button"
              role="tab"
              aria-controls="logout"
              aria-selected="false"
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;

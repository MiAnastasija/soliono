"use client";
import Link from "next/link";
import React from "react";
import Menu from "./components/Menu";
import logoOne from "../../../public/assets/img/logo/SolionoLogoFYellow.svg";
import logoTwo from "../../../public/assets/img/logo/SolionoLogoFPositive.svg";
import Image from "next/image";
import useGlobalContext from "@/hooks/use-context";
import Sidebar from "./components/Sidebar";
const HeaderOne = () => {
  const { setActiveForm, toggleSideMenu,  scrollDirection ,sideMenuOpen} = useGlobalContext();
  return (
    <>
      <header className="header-transparent">
        <div
          id="sticky-header"
          className={`main-menu-area menu-01 header-area ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 header_one_logos col-md-6 col-sm-6 col-6">
                <div className="logo">
                  <Link href="/">
                    <Image src={logoOne} alt="logo-img" />
                  </Link>
                </div>
                <div className="logo-black">
                  <Link href="/">
                    <Image src={logoTwo} alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-6 col-sm-6 col-6">
                <div className="header-right d-flex justify-content-end justify-content-lg-between align-items-center">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                  <div className="header-btn show_header_one">
                    <div className="hedder-button">
                      <Link
                        className="h-btn d-lg-none d-xl-inline-block"
                        href="/register"
                      >
                        <i className="far fa-user-circle"></i> Sign In
                      </Link>
                      <Link
                        className="h-btn h-btn-green"
                        href="/application-form"
                      >
                        Upload CV <i className="far fa-cloud-upload"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="sidebar__menu d-lg-none">
                    <div
                      onClick={toggleSideMenu}
                      className="sidebar-toggle-btn"
                      id="sidebar-toggle"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar />
      <div onClick={toggleSideMenu} className={`body-overlay ${sideMenuOpen ? "opened" : "" } `}></div>
    </>
  );
};

export default HeaderOne;

import React from "react";
import Menu from "./components/Menu";
import logo from "../../../public/assets/img/logo/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/use-context";
import Sidebar from "./components/Sidebar";

const HeaderTwo = () => {
  const { scrollDirection, toggleSideMenu,sideMenuOpen } = useGlobalContext();
  return (
    <>
      <header className="header-transparent white-bg">
        <div
          id="sticky-header"
          className={`main-menu-area header-area header-area-2 header_padding ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 header_two col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="logo-black">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-6 col-sm-6 col-6">
                <div className="header-right d-flex justify-content-end justify-content-lg-between align-items-center">
                  <div className="main-menu main-menu-2 d-none d-lg-block">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                  <div className="header-btn d-none d-lg-block">
                    <div className="hedder-button">
                      <Link
                        className="h-btn h-btn-white d-lg-none d-xl-inline-block"
                        href="/profile"
                      >
                        <i className="far fa-user-circle"></i> My Account
                      </Link>
                      <Link
                        className="h-btn h-btn-green"
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                      >
                        <i className="far fa-lock-alt"></i> Create Account
                      </Link>
                    </div>
                  </div>
                  <div className="sidebar__menu d-lg-none">
                    <div
                     onClick={toggleSideMenu} 
                      className="sidebar-toggle-btn sidebar-toggle-btn-2"
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
      <Sidebar/>
      <div onClick={toggleSideMenu} className={`body-overlay ${sideMenuOpen ? "opened" : "" } `}></div>
    </>
  );
};

export default HeaderTwo;

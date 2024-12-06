import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "../../../../public/assets/img/logo/SolionoLogoFYellow.svg";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Sidebar = () => {
  const { sideMenuOpen, toggleSideMenu } = useGlobalContext();
  return (
    <>
      <section
        className={
          sideMenuOpen ? "sidebar__area sidebar-opened" : "sidebar__area"
        }
      >
        <div
          className="sidebar__shape"
          data-background="assets/img/shape/hexa.png"
        ></div>
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button onClick={toggleSideMenu} className="responsive_cls_btn">
              <span>
                <i className="fal fa-times"></i>
              </span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo responsive_menu mb-40">
              <Link href="/">
                <Image src={logoImg} alt="logo" />
              </Link>
            </div>
            <div className="mobile-menu d-block mean-container">
              <div className="mean-bar">
                <nav className="mean-nav">
                  <MobileMenu />
                </nav>
              </div>
            </div>
            <div className="hedder-button mt-30">
              <Link className="h-btn h-btn-2 mt-15 mb-15" href="/login">
                <i className="far fa-user-circle"></i> Sign In
              </Link>
              <Link className="h-btn h-btn-green h-btn-white" href="/application-form">
               <i className="far fa-cloud-upload"></i> Upload Cv
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

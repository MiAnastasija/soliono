//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import Modal from "@/elements/Modal";
import ContactModal from "@/elements/ContactModal";
import BacktoTop from "@/utils/BacktoTop";
interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case "/home-two":
            return <HeaderTwo />;
          default:
            return <HeaderOne />;
        }
      })()}
      {children}
      <Modal />
      <ContactModal />
      {(() => {
        switch (pathName) {
          case "/":
            return <FooterOne />;

          default:
            return <FooterOne />;
        }
      })()}
    </>
  );
};

export default Wrapper;

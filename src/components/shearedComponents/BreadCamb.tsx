import React from "react";
import shapeImg from "../../../public/assets/img/shape/dot-shape.png";
import bgImg from "../../../public/assets/img/page-title/page-title-1.jpg";
import Image from "next/image";
import Link from "next/link";
interface propsType {
  title: string;
}
const BreadCamb = ({ title }: propsType) => {
  return (
    <>
      <section
        className="page__title page__title-height d-flex align-items-center position-relative"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="hero-shape">
          <span className="circle"></span>
          <span className="circle circle-yellow"></span>
          <span className="shape-plus shape-plus-green">+</span>
          <span className="shape-plus shape-plus-green shape-plus-2">+</span>
          <span className="dot-shape">
            <Image src={shapeImg} alt="dot-shape" />
          </span>
        </div>
        <div className="container custom-zindex">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__title-content text-center mt-80">
                <h2> {title} </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      {title}{" "}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCamb;

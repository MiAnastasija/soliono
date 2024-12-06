import React from "react";
import thumbImg from "../../../public/assets/img/b-app/mobile.png";
import Image from "next/image";
import Link from "next/link";
const AppPromotionSec = () => {
  return (
    <>
      <section className="app__area pt-125">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="app__content">
                <h3>Downloads Mobile Apps</h3>
                <p>
                Enhance your experience with our user-friendly mobile apps, designed to bring convenience to your fingertips. Whether {`you're `} on the go or prefer mobile accessibility, our apps provide a seamless way to connect, explore, and stay updated
                </p>
                <div className="app__counter d-sm-flex">
                  <div className="app__counter-item d-flex mr-45 mb-35">
                    <div className="icon mr-15">
                      <i className="fal fa-cloud-upload"></i>
                    </div>
                    <div className="text">
                      <h5>
                        <span className="counter">62314521</span>
                      </h5>
                      <p>Download Apps</p>
                    </div>
                  </div>
                  <div className="app__counter-item d-flex mb-35">
                    <div className="icon mr-15">
                      <i className="fal fa-star"></i>
                    </div>
                    <div className="text">
                      <h5>
                        <span className="counter">8563</span>
                      </h5>
                      <p>5 Star Rating</p>
                    </div>
                  </div>
                </div>
                <div className="app__btn">
                  <Link href="#" className="b-btn mr-15 mb-15">
                    Apple Store<i className="fab fa-apple"></i>{" "}
                  </Link>
                  <Link href="#" className="b-btn b-btn-green mb-15">
                    Windows<i className="fab fa-windows"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-1 col-lg-6">
              <div className="app__img text-center">
                <Image
                  src={thumbImg}
                  style={{ width: "auto", height: "auto" }}
                  alt="thumb-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppPromotionSec;

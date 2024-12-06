import LoginForm from "@/forms/LoginForm";
import Link from "next/link";
import React from "react";

const LoginArea = () => {
  return (
    <>
      <section className="login-area pt-80 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-20">
                <h2>Log In </h2>
                <p>Discover the latest in Job with Soliono. Your go-to source for insights, trends, and Internship.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="signin-popup-box d-flex justify-content-center">
                <div className="login-form">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginArea;

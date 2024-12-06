import RegisterForm from "@/forms/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterArea = () => {
  return (
    <>
      <section className="login-area pt-80 pb-80 d-flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-20">
                <h2>Sign Up</h2>
                <p>Discover the latest in Job with Soliono. Your go-to source for insights, trends, and Internship.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="signin-popup-box">
                <div
                  className="tab-content d-flex justify-content-center"
                  id="myTabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="login-form">
                      <RegisterForm />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="login-form">
                      <form>
                        <div className="input-text">
                          <input type="text" placeholder="Username" />
                          <i className="la la-user"></i>
                        </div>
                        <div className="input-text input-pass">
                          <input type="password" placeholder="********" />
                        </div>
                        <div className="input-text input-email">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-text input-phone">
                          <input type="text" placeholder="Phone" />
                        </div>
                        <p className="remember-label">
                          <input type="checkbox" id="A" name="A" value="A" />{" "}
                          <label htmlFor="A">Remember Me</label>
                        </p>
                        <Link href="#" title="">
                          Forgot Password?
                        </Link>
                        <button type="submit">Login</button>
                      </form>
                      <div className="extra-login">
                        <span>Or</span>
                        <div className="login-social">
                          <Link className="fb-login" href="#" title="">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link className="tw-login" href="#" title="">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;

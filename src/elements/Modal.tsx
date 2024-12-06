"use client";
import LoginForm from "@/forms/LoginForm";
import RegisterForm from "@/forms/RegisterForm";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React from "react";
const Modal = () => {
  const { activeForm, setActiveForm } = useGlobalContext();
  return (
    <>
      <div
        className="modal fade register__modal-area"
        id="registerModal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="register__modal">
                <div className="register__nav">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          activeForm === 1 ? "active show" : ""
                        }`}
                        onClick={() => setActiveForm(1)}
                        href=""
                      >
                        <i className="far fa-user-circle"></i>Register Account
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          activeForm === 2 ? "active show" : ""
                        }`}
                        onClick={() => setActiveForm(2)}
                        href=""
                      >
                        <i className="fal fa-lock-open-alt"></i>Login Account
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="register__nav-content">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={`tab-pane fade ${
                        activeForm === 1 ? "show active" : ""
                      }`}
                    >
                      <div className="register__form">
                        <RegisterForm />
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeForm === 2 ? "show active" : ""
                      }`}
                    >
                      <div className="register__form">
                        <LoginForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

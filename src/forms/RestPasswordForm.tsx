"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface FormData {
  password: string;
  newPassword: string;
}

const RestPasswordForm = () => {

 


  return (
    <>
      <div className="bd-login__area">
        <div className="container small-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="Login-form-wrapper">
                <div className="bd-postbox__contact">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                         
                      </div>

                      <div className="col-md-6">
                        
                      </div>

                      <div className="bd-sigin__action-button mb-20">
                        <button className="bd-fill__btn w-100" type="submit">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestPasswordForm;

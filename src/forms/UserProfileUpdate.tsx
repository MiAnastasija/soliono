"use client";
import React from "react";
import { useFormik } from "formik";
import {
  job_apply_schema,
  user_profile_schema,
} from "@/utils/validation-schema";
import ErrorMsg from "./ErrorMsg";

const UserProfileUpdate = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    values,
    resetForm,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      Password: "",
      resume: "",
      certificate: "",
      phone: "",
    },
    validationSchema: user_profile_schema,
    onSubmit: async (values) => {
      try {
        resetForm();
      } catch (error) {}
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="signin-popup-box d-flex justify-content-center mt-10 mb-10">
              <form className="parent_form">
                <div className="parent_container">
                  <div className="row">
                    <div className="col-md-6 col-12 col-lg-6 col-xl-6 col-sm-12">
                      <div className="application-form profile_update_form">
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="fullName"
                              defaultValue={values.fullName}
                              type="text"
                              placeholder="Full Name"
                            />
                          </div>

                          {touched.fullName && (
                            <ErrorMsg
                              errors={errors.fullName}
                              className="application-form-error"
                            />
                          )}
                        </div>

                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="phone"
                              defaultValue={values.phone}
                              type="text"
                              placeholder="Phone"
                            />
                          </div>
                          {touched.phone && (
                            <ErrorMsg
                              errors={errors.phone}
                              className="application-form-error"
                            />
                          )}
                        </div>

                        <div className="cashier-input-field-style">
                          <div className="single-input-field w-full single-input-field-file">
                            <label
                              className="upload_file"
                              htmlFor="profileImage1"
                            >
                              Upload Resume (.PDF) File
                              <i className="fas fa-file-user"></i>
                            </label>
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="resume"
                              defaultValue={values.resume}
                              id="profileImage1"
                              className="hidden"
                              accept=".pdf"
                              required={true}
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 col-lg-6 col-xl-6 col-sm-12">
                      <div className="application-form profile_update_form">
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="email"
                              defaultValue={values.email}
                              type="email"
                              placeholder="Email Address"
                            />
                          </div>
                          {touched.email && (
                            <ErrorMsg
                              errors={errors.email}
                              className="application-form-error"
                            />
                          )}
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="Password"
                              defaultValue={values.Password}
                              type="text"
                              placeholder="Update Password"
                            />
                          </div>
                          {touched.Password && (
                            <ErrorMsg
                              errors={errors.Password}
                              className="application-form-error"
                            />
                          )}
                        </div>

                        <div className="cashier-input-field-style">
                          <div className="single-input-field w-full single-input-field-file">
                            <label
                              className="upload_file"
                              htmlFor="profileImage1"
                            >
                              Upload Certifications (.PDF) File
                              <i className="fas fa-file-user"></i>
                            </label>
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="certificate"
                              defaultValue={values.certificate}
                              id="profileImage1"
                              className="hidden"
                              accept=".pdf"
                              required={true}
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12">
                      <button className="apply_now_btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileUpdate;

"use client";
import { skillsData } from "@/data/nice-select-data";
import NiceSelect from "@/elements/NiceSelect";
import ErrorMsg from "@/forms/ErrorMsg";
import { job_apply_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

const ApplicationForm = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();

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
      dateOfBirth: "",
      address: "",
      jobPosition: "",
      portfolio: "",
      resume: "",
      certificate: "",
      skills: "",
      linkedin: "",
      refarence: "",
      salllay: "",
      technicalSkills: "",
      leadership: "",
      workExperience: "",
      phone: "",
      careerGoal: "",
      language: "",
      question: "",
      aboutUs: "",
      offerLetter: "",
    },
    validationSchema: job_apply_schema,
    onSubmit: async (values) => {
      try {
        resetForm();
       
        router.push("/");
      } catch (error) {}
    },
  });

  const selectHandler = () => {};

  const [spanText, setSpanText] = useState("Select Skills");

  useEffect(() => {
    // Assuming you have a reference to the span element
    const spanElement = document.querySelector(
      ".rmsc.multi-select .dropdown-heading .dropdown-heading-value span"
    );

    // Check if the element exists before updating its text content
    if (spanElement) {
      // Change the text content
      spanElement.textContent = spanText;
    }
  }, [spanText]);

  const options = [
    { label: "Javascript", value: "Javascript" },
    { label: "React Js", value: "React Js" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "Next Js", value: "Next Js" },
    { label: "Express Js", value: "Express Js" },
    { label: "Node Js", value: "Node Js", disabled: true },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="signin-popup-box d-flex justify-content-center mt-50 mb-50">
              <form className="parent_form" onSubmit={handleSubmit}>
                <div className="parent_container">
                  <div className="row">
                    <div className="col-md-6 col-12 col-lg-4 col-xl-4 col-sm-12">
                      <div className="application-form">
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
                              name="address"
                              defaultValue={values.address}
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                          {touched.address && (
                            <ErrorMsg
                              errors={errors.address}
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
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="linkedin"
                              defaultValue={values.linkedin}
                              type="text"
                              placeholder="LinkedIn Profile"
                            />
                          </div>
                          {touched.linkedin && (
                            <ErrorMsg
                              errors={errors.linkedin}
                              className="application-form-error"
                            />
                          )}
                        </div>

                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="technicalSkills"
                              defaultValue={values.technicalSkills}
                              type="text"
                              placeholder="Technical Skills (Optional)"
                            />
                          </div>
                          {touched.technicalSkills && (
                            <ErrorMsg
                              errors={errors.technicalSkills}
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
                      </div>
                    </div>
                    <div className="col-md-6 col-12 col-lg-4 col-xl-4 col-sm-12">
                      <div className="application-form">
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
                              name="jobPosition"
                              defaultValue={values.jobPosition}
                              type="text"
                              placeholder="Job Position"
                            />
                          </div>
                          {touched.jobPosition && (
                            <ErrorMsg
                              errors={errors.jobPosition}
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

                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="refarence"
                              defaultValue={values.refarence}
                              type="text"
                              placeholder="References (Optional )"
                            />
                          </div>
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="leadership"
                              defaultValue={values.leadership}
                              type="text"
                              placeholder="Leadership Experience (Optional )"
                            />
                          </div>
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="careerGoal"
                              defaultValue={values.careerGoal}
                              type="text"
                              placeholder="Long-Term Career Goals"
                            />
                          </div>
                          {touched.careerGoal && (
                            <ErrorMsg
                              errors={errors.careerGoal}
                              className="application-form-error"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 col-lg-4 col-xl-4 col-sm-12">
                      <div className="application-form">
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="dateOfBirth"
                              defaultValue={values.dateOfBirth}
                              type="text"
                              placeholder="Date Of Birth"
                            />
                          </div>
                          {touched.dateOfBirth && (
                            <ErrorMsg
                              errors={errors.dateOfBirth}
                              className="application-form-error"
                            />
                          )}
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="portfolio"
                              defaultValue={values.portfolio}
                              placeholder="Portfolio/Work Samples Links"
                            />
                          </div>
                          {touched.portfolio && (
                            <ErrorMsg
                              errors={errors.portfolio}
                              className="application-form-error"
                            />
                          )}
                        </div>

                        <div className="multi_select">
                          <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                          />
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="salllay"
                              defaultValue={values.salllay}
                              type="text"
                              placeholder="Salary Expectations"
                            />
                          </div>
                          {touched.salllay && (
                            <ErrorMsg
                              errors={errors.salllay}
                              className="application-form-error"
                            />
                          )}
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="workExperience"
                              defaultValue={values.workExperience}
                              type="text"
                              placeholder="Work Experience"
                            />
                          </div>
                          {touched.workExperience && (
                            <ErrorMsg
                              errors={errors.workExperience}
                              className="application-form-error"
                            />
                          )}
                        </div>
                        <div className="input_box_applicaton">
                          <div className="input-text">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="language"
                              defaultValue={values.language}
                              type="text"
                              placeholder="Language Proficiency"
                            />
                          </div>
                          {touched.language && (
                            <ErrorMsg
                              errors={errors.language}
                              className="application-form-error"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="application_form_textarea">
                        <div className="input-text">
                          <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="question"
                            defaultValue={values.question}
                            rows={2}
                            cols={2}
                            placeholder="Job-Specific Questions (Optional )"
                          />
                        </div>
                      </div>
                      <div className="application_form_textarea">
                        <div className="input-text">
                          <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="aboutUs"
                            defaultValue={values.aboutUs}
                            rows={2}
                            cols={2}
                            placeholder="How Did You Hear About Us? (Optional) "
                          />
                        </div>
                      </div>
                      <div className="application_form_textarea">
                        <div className="input-text">
                          <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="offerLetter"
                            defaultValue={values.offerLetter}
                            rows={10}
                            cols={10}
                            placeholder="Cover Letter"
                          />
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

export default ApplicationForm;

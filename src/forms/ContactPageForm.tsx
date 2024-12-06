"use client";
import { contact_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsg from "./ErrorMsg";

const ContactPageForm = () => {
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
      name: "",
      email: "",
      phone: "",
      massage: "",
    },
    validationSchema: contact_schema,
    onSubmit: async (values) => {
      try {
        resetForm();
        toast.success("Message Send Success");
      } catch (error) {}
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6">
            <div className="contact__input">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                defaultValue={values.name}
                type="text"
                placeholder="Your Full Name"
              />
              <i className="far fa-user"></i>
              {touched.name && (
                <ErrorMsg errors={errors.name} className="error-msg-two" />
              )}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact__input">
              <input
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                defaultValue={values.email}
                placeholder="Email Address"
              />
              <i className="far fa-envelope"></i>
              {touched.email && (
                <ErrorMsg errors={errors.email} className="error-msg-two" />
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact__input">
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="phone"
                defaultValue={values.phone}
                placeholder="Phone Number"
              />
              <i className="far fa-phone"></i>
              {touched.phone && (
                <ErrorMsg errors={errors.phone} className="error-msg-two" />
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact__input">
              <textarea
                onChange={handleChange}
                onBlur={handleBlur}
                name="massage"
                defaultValue={values.massage}
                placeholder="Write Message"
              ></textarea>
              <i className="far fa-pen-alt"></i>
              {touched.massage && (
                <ErrorMsg errors={errors.massage} className="error-msg-two" />
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <button type="submit" className="b-btn b-btn-green w-100">
              Send Message <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactPageForm;

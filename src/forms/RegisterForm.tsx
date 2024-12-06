"use client";
import { register_schema } from "@/utils/validation-schema";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import ErrorMsg from "./ErrorMsg";
import useGlobalContext from "@/hooks/use-context";
const RegisterForm = () => {
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(true);
  const { setActiveForm } = useGlobalContext();

  const handleCheckbox = () => {
    setSubscribeToUpdates(!subscribeToUpdates);
  };

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
      fName: "",
      lName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: register_schema,
    onSubmit: async (values) => {
      try {
        resetForm();
        setActiveForm(2);
      } catch (error) {}
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="register__input">
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your First Name"
            name="fName"
            defaultValue={values.fName}
            required
          />
          <i className="far fa-user"></i>
          {touched.fName && (
            <ErrorMsg errors={errors.fName} className="error-msg" />
          )}
        </div>
        <div className="register__input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="lName"
            defaultValue={values.lName}
            type="text"
            placeholder="Your Last Name"
            required
          />
          <i className="far fa-user"></i>
          {touched.lName && (
            <ErrorMsg errors={errors.lName} className="error-msg" />
          )}
        </div>
        <div className="register__input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            defaultValue={values.email}
            type="email"
            placeholder="Your  Email Address"
            required
          />
          <i className="far fa-envelope-open"></i>
          {touched.email && (
            <ErrorMsg errors={errors.email} className="error-msg" />
          )}
        </div>
        <div className="register__input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="phone"
            defaultValue={values.phone}
            type="text"
            placeholder="Your  Phone Number"
            required
          />
          <i className="far fa-phone"></i>
          {touched.phone && (
            <ErrorMsg errors={errors.phone} className="error-msg" />
          )}
        </div>

        <div className="register__input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            defaultValue={values.password}
            type="password"
            placeholder="Password"
          />
          <i className="far fa-lock-alt"></i>
          {touched.password && (
            <ErrorMsg errors={errors.password} className="error-msg" />
          )}
        </div>

        <div className="register__mail">
          <p>Email Me Career-Related Soliono Updates And Job Opportunities</p>
          <span onClick={handleCheckbox} className="log-rem f-left">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={subscribeToUpdates}
              className="mr-3"
            />
            Yes
          </span>
          <span className="log-rem f-left">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={!subscribeToUpdates}
              className="mr-3"
            />
            No
          </span>
        </div>
        <div className="register__btn mb-45">
          <button type="submit" className="b-btn b-btn-green fix_button w-100">
            Create Account <i className="far fa-arrow-right"></i>
          </button>
        </div>
        <div className="register__or text-center">
          <div className="register__or-title mb-20">
            <h3 className="mt-30">OR</h3>
          </div>
          <div className="register__option theme-social">
            <ul>
              <li>
                <Link href="" className="fb">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="" className="tw">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="" className="gp">
                  <i className="fab fa-google-plus-g"></i>
                  <i className="fab fa-google-plus-g"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

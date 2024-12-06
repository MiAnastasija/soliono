import { commentSchema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import ErrorMsgTwo from "./ErrorMsgTwo";
import { toast } from "react-toastify";
import ErrorMsg from "./ErrorMsg";

const CandidateReviewForm = () => {
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
      comment: "",
    },
    validationSchema: commentSchema,
    onSubmit: async (values) => {
      try {
        resetForm();
        toast.success("Review Send Success")
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
              {touched.name && <ErrorMsg errors={errors.name} className="error-msg-two"/>}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact__input">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                defaultValue={values.email}
                type="email"
                placeholder="Email Address"
              />
              <i className="far fa-envelope"></i>
              {touched.email && <ErrorMsg errors={errors.email} className="error-msg-two"/>}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact__input">
              <textarea
                onChange={handleChange}
                onBlur={handleBlur}
                name="comment"
                defaultValue={values.comment}
                placeholder="Write Comments"
              ></textarea>
              <i className="far fa-pen-alt"></i>
              {touched.comment && <ErrorMsg errors={errors.comment} className="error-msg-two"/>}
            </div>
          </div>
          <div className="col-xl-12">
            <button type="submit" className="b-btn b-btn-green w-100">
              Send Reviews <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CandidateReviewForm;

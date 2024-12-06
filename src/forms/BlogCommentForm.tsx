import { commentSchema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsg from "./ErrorMsg";
const BlogCommentForm = () => {
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
        toast.success("Comment Added Success");
      } catch (error) {}
    },
  }); 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="post-input">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            defaultValue={values.name}
            type="text"
            placeholder="Full Name Here"
          />
          <i className="far fa-user"></i>
          {touched.name && <ErrorMsg errors={errors.name} className="error-msg-three" />}
        </div>
        <div className="post-input">
          <input
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            defaultValue={values.email}
            placeholder="Email Address"
          />
          <i className="far fa-envelope"></i>
          {touched.email && <ErrorMsg errors={errors.email} className="error-msg-three"/>}
        </div>
        <div className="post-input">
          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            name="comment"
            defaultValue={values.comment}
            placeholder="comment"
          ></textarea>
          <i className="far fa-pen-alt"></i>
          {touched.comment && <ErrorMsg errors={errors.comment} className="error-msg-three"/>}
        </div>
        <button type="submit" className="b-btn">
          Send Message <i className="far fa-arrow-right"></i>
        </button>
      </form>
    </>
  );
};

export default BlogCommentForm;

import React from "react";

const ContactForm = () => {
  return (
    <>
      <form action="#">
        <div className="row">
          <div className="col-xl-6">
            <div className="contact__input">
              <input type="text" placeholder="Your Full Name" />
              <i className="far fa-user"></i>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact__input">
              <input type="email" placeholder="Email Address" />
              <i className="far fa-envelope"></i>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact__input">
              <input type="text" placeholder="Phone Number" />
              <i className="far fa-phone"></i>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact__input">
              <textarea placeholder="Write Comments"></textarea>
              <i className="far fa-pen-alt"></i>
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

export default ContactForm;

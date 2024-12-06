import React from "react";

const ContactModal = () => {
  return (
    <>
      <div
        className="modal fade register__modal-area"
        id="contactModal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="p-25">
              <div className="contact__form">
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
                        <textarea placeholder="Write Message"></textarea>
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
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;

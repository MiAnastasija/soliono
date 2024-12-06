import ContactPageForm from "@/forms/ContactPageForm";
import Link from "next/link";
import React from "react";
const ContactArea = () => {
  return (
    <>
      <section className="contact__area pt-50 pb-150 grey-bg">
        <div className="container">
          <div className="contact__inner">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="contact__content">
                  <h4>Contact Us</h4>
                  <p>
                    Quis autem vel eum iure reprehenderit quiin voluptate velit
                    esse quam molestiae
                  </p>
                  <div className="contact__info">
                    <ul>
                      <li>
                        <div className="contact__item d-flex">
                          <div className="icon mr-30">
                            <i className="flaticon-map"></i>
                          </div>
                          <div className="text">
                            <h4>Location</h4>
                            <p>
                              205 Main Street, 2nd - Floor, <br /> D - Block,
                              New York
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="contact__item d-flex">
                          <div className="icon mr-30">
                            <i className="flaticon-email"></i>
                          </div>
                          <div className="text">
                            <h4>Email Address</h4>
                            <p>
                              <Link href="mailto:support@gmail.com">
                                support@gmail.com
                              </Link>
                            </p>
                            <p>
                              <Link href="mailto:www.jobcare.net">
                                www.jobcare.net
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="contact__item d-flex">
                          <div className="icon mr-30">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="text">
                            <h4>Phone Number</h4>
                            <p>
                              <Link href="tel:+880-123-456-789">
                                +880 - 123 - 456 - 789
                              </Link>
                            </p>
                            <p>
                              <Link href="tel:+0123(456)-789">
                                {" "}
                                +0123(456) 789
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6">
                <div className="contact__form">
                  <ContactPageForm />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact__map mt-30">
                  <div className="contact__map-inner">
                    <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;

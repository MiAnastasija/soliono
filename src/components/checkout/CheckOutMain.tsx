"use client";
import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";

const CheckOutMain = () => {
  const { buyPackage } = useGlobalContext();

  const handlleSuccess = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      {" "}
      <BreadCamb title="Checkout" />
      <section className="checkout-area pt-115 pb-100">
        <div className="container small-container">
          <form onSubmit={handlleSuccess}>
            <div className="row">
              <div className="col-lg-6 left-checkout-form">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input type="text" defaultValue={"Jhonathon Smith"} />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          defaultValue={"jhonathon@gmail.com"}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={"+88256412514"}
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* order info */}
              <div className="col-lg-6">
                <div className="your-order mb-30 ">
                  <h3>Your package</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Package Name</th>
                          <th className="product-total">Type</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart_item">
                          <td className="product-name">
                            {buyPackage?.plan ? buyPackage?.plan : "Golden"}
                            <strong className="product-quantity"> </strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">
                              {buyPackage?.pack ? buyPackage?.pack : "Monthly"}
                            </span>
                          </td>
                          <td className="product-total">
                            <span className="amount">
                              ${buyPackage?.price ? buyPackage?.price : "56"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="order-total">
                          <th>Total</th>
                          <td>
                            <strong></strong>
                          </td>
                          <td>
                            <strong>
                              <span className="amount">
                                ${buyPackage?.price ? buyPackage?.price : "56"}
                              </span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">
                    <div className="accordion" id="checkoutAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bankOne"
                            aria-expanded="true"
                            aria-controls="bankOne"
                          >
                            Direct Bank Transfer
                          </button>
                        </h2>
                        <div
                          id="bankOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="checkoutOne"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="col-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Enter Your Account Info"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#payment"
                            aria-expanded="false"
                            aria-controls="payment"
                          >
                            Online Payment
                          </button>
                        </h2>
                        <div
                          id="payment"
                          className="accordion-collapse collapse"
                          aria-labelledby="paymentTwo"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="col-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Enter Your Card  Info"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item cart-input-box">
                        <div
                          id="paypal"
                          className="accordion-collapse collapse"
                          aria-labelledby="paypalThree"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment mt-20">
                      <Link href="/invoice" className="bd-fill__btn checkout_btn">
                        Place Order
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckOutMain;

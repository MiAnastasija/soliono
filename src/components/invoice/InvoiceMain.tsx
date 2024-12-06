"use client";
import React from "react";
import BreadCamb from "../shearedComponents/BreadCamb";
import useGlobalContext from "@/hooks/use-context";

const InvoiceMain = () => {
  const { buyPackage } = useGlobalContext();
 
  return (
    <>
      <BreadCamb title="Invoice" />
      <div className="mt-30 mb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card card_wrap">
                <div className="invoice_heading">
                  <h2 className="mb-0">#Invoice</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <address>
                        <strong>Jonathon Smith</strong>
                        <br />
                        123 Maple Street
                        <br />
                        Toronto, ON M1A 2B3, Canada
                        <br />
                        Email: smith@email.com
                        <br />
                        Phone: (123) 456-7890
                      </address>
                    </div>
                    
                  </div>
                  <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Package</th>
                          <th>Type</th>
                          <th>Unit Price</th>
                          <th>Payment Method</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-capitalize"> 
                            {buyPackage?.plan ? buyPackage?.plan : "Premium"}
                          </td>
                          <td className="text-capitalize">
                            {buyPackage?.pack ? buyPackage?.pack : "yearly"}
                          </td>
                          <td>
                            {buyPackage?.price ? `$${buyPackage?.price}` : "$500"}
                          </td>
                          <td>
                             Card
                          </td>
                          <td>
                            {buyPackage?.price ? `$${buyPackage?.price}` : "$500"}
                          </td>
                           
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                  <div className="row mt-3">
                   
                    <div className="col-md-6 text-start">
                      <p className="lead">Total Amount:</p>
                      <h3> {buyPackage?.price ? `$${buyPackage?.price}` : "$500"} </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceMain;

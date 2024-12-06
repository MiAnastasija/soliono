"use client";
 
import { faqData } from "@/data/faq-data";
import React from "react";

interface propsType {
  start: number;
  end: number;
  idProps: string;
}

const FaqCard = ({ start, end, idProps }: propsType) => {
  return (
    <div id={idProps}>
      {faqData?.slice(start, end)?.map((item) => (
         <div key={item.id} className="card mb-15">
         <div className="card-header" id={`faq-${item.id}`}>
           <h5 className="mb-0">
             <button
               className={`btn btn-link ${item.id === 2 ? "" : "collapsed"}`}
               data-bs-toggle="collapse"
               data-bs-target={`#collapse-${item.id}`}
               aria-expanded={item.id === 2 ? "true" : "false"}
               aria-controls={`collapse-${item.id}`}
             >
               {item.title}
             </button>
           </h5>
         </div>

         <div
           id={`collapse-${item.id}`}
           className={`collapse ${item.id === 2 ? "show" : ""}`}
           aria-labelledby={`faq-${item.id}`}
           data-bs-parent="#accordion"
         >
           <div className="card-body">
             <p>{item.details}</p>
           </div>
         </div>
       </div>
      ))}
    </div>
  );
};

export default FaqCard;

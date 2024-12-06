import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const RecentNews = () => {
  return (
    <>
      {blogData?.slice(0, 4)?.map((item) => (
        <li key={item?.id}>
          <div className="blog__sm-item">
            <div className="blog__sm-thumb f-left">
              <Image src={item?.smallImg} alt="small-img" />
            </div>
            <div className="blog__sm-content ml-100">
              <h5>
                <Link href={`/blog-details/${item?.id}`}>
                  {" "}
                  {item?.blogTitle}{" "}
                </Link>
              </h5>
              <span>
                <Link href={`/blog-details/${item?.id}`}>
                  <i className="fal fa-angle-right"></i>By {item?.author}
                </Link>
              </span>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default RecentNews;

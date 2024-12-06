import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  start: number;
  end: number;
}

const BlogGridCard = ({ start, end }: propsType) => {
  return (
    <>
      {blogData?.slice(start, end)?.map((item) => (
        <div key={item?.id} className="col-xl-4 col-md-6">
          <div className="blog__item-2 mb-30 ">
            <div className="blog__thumb fix">
              <Link href={`/blog-details/${item?.id}`}>
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={item?.img}
                  alt="blog-img"
                />
              </Link>
            </div>
            <div className="blog__content-2">
              <div className="blog__date text-center">
                <h4> {item?.date} </h4>
                <span> {item?.month} </span>
              </div>
              <div className="blog__meta blog__meta-2">
                <span>
                  <i className="fal fa-user-circle"></i>
                  <Link href="#"> {item?.author} </Link>
                </span>
                <span>
                  <i className="fal fa-comments"></i>
                  <Link href="#">
                    Com (
                    {item?.comment > 9 ? item?.comment : `0${item.comment}`})
                  </Link>
                </span>
              </div>
              <h4>
                <Link href={`/blog-details/${item?.id}`}>
                  {item?.blogTitle}
                </Link>
              </h4>
              <p>{item?.details}</p>
              <Link
                href={`/blog-details/${item?.id}`}
                className="b-btn b-btn-grey"
              >
                Read More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogGridCard;

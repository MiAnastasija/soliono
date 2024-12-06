import React from "react";
import BlogSearchBox from "./BlogSearchBox";
import { categoryData } from "@/data/nice-select-data";
import RecentNews from "./RecentNews";
import PhotoGallay from "./PhotoGallay";
import Link from "next/link";
import Image from "next/image";
import imgBanner from "../../../public/assets/img/banner/blog-banner.jpg";
const BlogStandardRightDiv = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="blog__sidebar">
          <BlogSearchBox />
          <div className="blog__sidebar-link mb-40">
            <ul>
              {categoryData?.map((item) => (
                <li key={item?.id}>
                  <Link href="#"> {item?.option} </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="blog__widget mb-40">
            <div className="blog__widget-title mb-25">
              <h4>Recent News</h4>
            </div>
            <div className="blog__widget-content">
              <div className="blog__sm">
                <ul>
                  <RecentNews />
                </ul>
              </div>
            </div>
          </div>

          <PhotoGallay />

          <div className="blog__widget mb-40">
            <div className="blog__widget-title mb-25">
              <h4>Popular Tags</h4>
            </div>
            <div className="blog__widget-content">
              <div className="blog__tags">
                <Link href="#">Design</Link>
                <Link href="#">Portfolio</Link>
                <Link href="#">Energy</Link>
                <Link href="#">Resume</Link>
                <Link href="#">Gallery</Link>
                <Link href="#">Renewable</Link>
              </div>
            </div>
          </div>

          <div className="blog__banner">
            <Link href="#">
              <Image style={{ width: "100%", height: "auto" }} src={imgBanner} alt="banner img" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogStandardRightDiv;

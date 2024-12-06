"use client";
import { blogData } from "@/data/blog-data";
import { sliceProps } from "@/interFace/interfaceCommon";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import React, { useState } from "react";
const BlogStandardSingleCard = ({ start, end }: sliceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      {blogData?.slice(start, end)?.map((item) => (
        <div key={item?.id} className="blog__item mb-40">
          <div
            className={`blog__thumb fix ${item?.isModal ? "blog__video" : ""}`}
          >
            <Link href={`/blog-details/${item?.id}`}>
              <Image
                style={{ width: "100%", height: "auto" }}
                src={item?.img}
                alt="blog-standard-img"
              />
            </Link>
            {item?.isModal && (
              <Link
                href=""
                onClick={() => {
                  openVideoModal();
                }}
                className="blog__play popup-video"
              >
                <i className="fas fa-play"></i>
              </Link>
            )}
          </div>
          <div className="blog__content white-bg">
            <div className="blog__meta">
              <span>
                <i className="fal fa-user-circle"></i>
                <Link href="#"> {item?.author} </Link>
              </span>
              <span>
                <i className="fal fa-calendar-alt"></i>
                {item?.date} {item?.month} 2020
              </span>
              <span>
                <i className="fal fa-comments"></i>
                <Link href="#">
                  {" "}
                  {item.comment > 1 ? `Commnets` : `Commnet`} (
                  {item?.comment > 9 ? item.comment : `0${item?.comment}`})
                </Link>
              </span>
            </div>
            <h3>
              <Link href={`/blog-details/${item?.id}`}>{item?.blogTitle}</Link>
            </h3>
            <p>{item?.details}</p>
            <Link
              href={`/blog-details/${item?.id}`}
              className="b-btn b-btn-green"
            >
              Read More<i className="far fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      ))}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default BlogStandardSingleCard;

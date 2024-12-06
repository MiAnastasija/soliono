import { photoGallayData } from "@/data/photo-gallary-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType{
    start:number;
    end:number;
    propsclass:string;
}

const GallaryImgCard = ({ start, end,propsclass }: propsType) => {
  return (
    <>
      <li className={`d-flex ${propsclass}`}>
        {photoGallayData?.slice(start, end)?.map((item) => (
          <div key={item?.id} className={`blog__insta-item ${item?.class}`}>
            <Link href="https://www.instagram.com/">
              <Image src={item?.img} alt="insta-img" />
            </Link>
            <Link href="https://www.instagram.com/" className="insta">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        ))}
      </li>
    </>
  );
};

export default GallaryImgCard;

import React from "react";
import GallaryImgCard from "./GallaryImgCard";

const PhotoGallay = () => {
  return (
    <>
      <div className="blog__widget mb-40">
        <div className="blog__widget-title mb-25">
          <h4>Photo Gallery</h4>
        </div>
        <div className="blog__widget-content">
          <div className="blog__insta">
            <ul>
              <GallaryImgCard start={0} end={2} propsclass="mb-20" />
              <GallaryImgCard start={2} end={4} propsclass="mb-20" />
              <GallaryImgCard start={4} end={6} propsclass="" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallay;

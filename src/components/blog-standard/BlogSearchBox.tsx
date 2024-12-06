import React from "react";

const BlogSearchBox = () => {
  return (
    <>
      <div className="blog__widget mb-40">
        <div className="blog__widget-title">
          <h4>Search Here</h4>
        </div>
        <div className="blog__widget-content">
          <div className="blog__search">
            <input type="text" placeholder="Keywords" />
            <button type="submit">
              <i className="far fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSearchBox;

import React from 'react';
import BlogGridCard from '../shearedComponents/BlogGridCard';

const BlogSecHomeOne = () => {
    return (
        <>
            <div className="blog__area-2 pt-75 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-10 offset-md-1">
                            <div className="section-title text-center mb-45">
                                <h2>Latest News & Blog</h2>
                                <p>Stay Informed and Inspired: Explore Our Latest News & Blog for Industry Insights and Career Tips</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <BlogGridCard start={0} end={3}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSecHomeOne;
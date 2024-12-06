"use client";
import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../../public/assets/img/blog/user/user-1.png";
import comment1 from "../../../public/assets/img/blog/comment/comment-1.png";
import comment2 from "../../../public/assets/img/blog/comment/comment-2.png";
import comment3 from "../../../public/assets/img/blog/comment/comment-3.png";
import SocialMedia from "../shearedComponents/SocialMedia";
import useGlobalContext from "@/hooks/use-context";
import BlogCommentForm from "@/forms/BlogCommentForm";
const BlogDetailsLeftDiv = () => {
  const { blogId } = useGlobalContext();
  const filterData = blogData?.find((item) => item.id == blogId);
  return (
    <>
      {filterData?.author ? (
        <>
          <div className="col-xl-8 col-lg-8">
            <div className="blog__wrapper white-bg">
              <div className="blog__details">
                <div className="blog__content white-bg">
                  <h3>
                    <Link href="#">{filterData?.blogTitle}</Link>
                  </h3>
                  <div className="blog__meta">
                    <span>
                      <i className="fal fa-user-circle"></i>
                      <Link href="#">By {filterData?.author}</Link>
                    </span>
                    <span>
                      <i className="fal fa-calendar-alt"></i>
                      {filterData?.date} {filterData?.month} 2020
                    </span>
                    <span>
                      <i className="fal fa-comments"></i>
                      <Link href="#">
                        {" "}
                        {filterData.comment > 1 ? `Commnets` : `Commnet`} (
                        {filterData?.comment > 9
                          ? filterData.comment
                          : `0${filterData?.comment}`}
                        )
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="blog__thumb fix">
                  <Link href="#">
                    <Image
                      src={filterData?.largeImg}
                      style={{ width: "100%", height: "auto" }}
                      alt="details img"
                    />
                  </Link>
                </div>
                <div className="blog__details-wrapper">
                  <div className="blog__text mb-30">
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in
                      which toil and pain can procure him some great pleasure.
                    </p>
                  </div>
                  <div className="blog__resume">
                    <h4>How To Send Resume?</h4>
                    <p>
                      No one rejects, dislikes, or avoids pleasure itself,
                      because it is pleasure, but because those who do not know
                      how to pursue pleasure rationally encounter consequences
                      that are extremely painful. Nor again is there anyone who
                      loves or pursues or desires to obtain pain of itself,
                      because it is pain, but because occasionally circumstances{" "}
                    </p>
                    <ul>
                      <li>
                        Understanding Client-Side GraphQl With Apollo-Client In
                        React Apps
                      </li>
                      <li>
                        Inspired Design Decisions With Emmett McBaise Direction
                        Social Equity
                      </li>
                      <li>
                        Smashing Podcast Episode 21 With Chris Ferdinandi
                        Practices Bad
                      </li>
                      <li>
                        Create A Responsive Dashboard With Angular Material And
                        nsCharts
                      </li>
                    </ul>
                  </div>
                  <div className="blog__quote-2 mb-35">
                    <blockquote>
                      <p>
                        Avoid Keyboard Event-Related Bugs In Browser-Based
                        Transliteration Introducing Alpine Tiny Script{" "}
                      </p>
                      <h5>Norman S. Roberts</h5>
                    </blockquote>
                  </div>
                  <div className="blog__action mb-45">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="blog__tag">
                          <span>Tags : </span>
                          <ul> 
                            <li>
                              <Link href="#">Job Board,</Link>
                            </li>
                            <li>
                              <Link href="#"> CV</Link>
                            </li>
                            <li>
                              <Link href="#">Resume</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="blog__share f-right fix">
                          <span>Share :</span>
                          <SocialMedia />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog__user grey-bg mb-55">
                    <div className="blog__user-thumb f-left fix">
                      <Image src={img1} alt="user-img" />
                    </div>
                    <div className="blog__user-content ml-195">
                      <h4>Eugene A. Pearson</h4>
                      <p>
                        But must explain to you how all this mistake idea
                        deounciasure and praising pain was born and will give
                        you comete account the system
                      </p>
                      <div className="blog__user-social">
                        <SocialMedia />
                      </div>
                    </div>
                  </div>
                  <div className="post-comments">
                    <div className="post-comment-title mb-30">
                      <h3>{`People’s`} Comments</h3>
                    </div>
                    <div className="latest-comments">
                      <ul>
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <Image src={comment1} alt="comment-img" />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>David Angel Makel</h5>
                                <span>IT Consultant</span>
                              </div>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content page
                                looking at its layout point of using normal.
                              </p>
                              <Link href="#" className="comment-reply">
                                Reply Comments{" "}
                                <i className="far fa-long-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="children">
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <Image src={comment2} alt="comment-img" />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>Michel Rason Roy</h5>
                                <span>Product Designer</span>
                              </div>
                              <p>
                                It is a long established fact that a reader will
                                be distracted the readable contentof a page when
                                looking
                              </p>
                              <Link href="#" className="comment-reply link-btn">
                                Reply Comments{" "}
                                <i className="far fa-long-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <Image src={comment3} alt="comment-img" />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>David Angel Makel</h5>
                                <span>IT Consultant</span>
                              </div>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content page
                                looking at its layout point of using normal.
                              </p>
                              <Link href="#" className="comment-reply">
                                Reply Comments{" "}
                                <i className="far fa-long-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-comment-form grey-bg">
                    <h4>Reply Comments</h4>
                    <BlogCommentForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BlogDetailsLeftDiv;

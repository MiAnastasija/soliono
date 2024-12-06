import Link from "next/link";
import React from "react";

const SocialMediaTwo = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.behance.net/">
            <i className="fab fa-behance"></i>
            <i className="fab fa-behance"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-youtube"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialMediaTwo;

import { IBlogDataType } from "@/interFace/interFace";
import img1 from "../../public/assets/img/blog/blog-1.jpg";
import img2 from "../../public/assets/img/blog/blog-2.jpg";
import img3 from "../../public/assets/img/blog/blog-3.jpg";
import img4 from "../../public/assets/img/blog/blog-4.jpg";
import img5 from "../../public/assets/img/blog/blog-5.jpg";
import img6 from "../../public/assets/img/blog/blog-6.jpg";
import img7 from "../../public/assets/img/blog/blog-7.jpg";
import img8 from "../../public/assets/img/blog/blog-8.jpg";
import img9 from "../../public/assets/img/blog/blog-9.jpg";
//
import smallImg1 from "../../public/assets/img/blog/sm/blog-sm-1.jpg";
import smallImg2 from "../../public/assets/img/blog/sm/blog-sm-2.jpg";
import smallImg3 from "../../public/assets/img/blog/sm/blog-sm-3.jpg";
import smallImg4 from "../../public/assets/img/blog/sm/blog-sm-4.jpg";
// largeImg
import largeImg1 from "../../public/assets/img/blog/details/blog-details-1.png";
import largeImg2 from "../../public/assets/img/blog/details/blog-details-2.png";
import largeImg3 from "../../public/assets/img/blog/details/blog-details-3.png";
import largeImg4 from "../../public/assets/img/blog/details/blog-details-4.png";
import largeImg5 from "../../public/assets/img/blog/details/blog-details-5.png";
import largeImg6 from "../../public/assets/img/blog/details/blog-details-6.png";
import largeImg7 from "../../public/assets/img/blog/details/blog-details-7.png";
import largeImg8 from "../../public/assets/img/blog/details/blog-details-8.png";
import largeImg9 from "../../public/assets/img/blog/details/blog-details-9.png";
export const blogData: IBlogDataType[] = [
  {
    id: 1,
    img: img1,
    smallImg: smallImg1,
    largeImg: largeImg1,
    date: 20,
    month: "Jan",
    author: "John Doe",
    comment: 5,
    blogTitle: "Software Engineer",
    details: "Exciting opportunity for a skilled Software Engineer to join our dynamic team at Tech Solutions Inc.",
  },
  {
    id: 2,
    img: img2,
    smallImg: smallImg2,
    largeImg: largeImg2,
    date: 15,
    month: "Jan",
    author: "John Doe",
    comment: 15,
    blogTitle: "Data Scientist",
    details: "Join our innovative team at Data Insights Co. as a Data Scientist and contribute to cutting-edge projects.",
  },
  {
    id: 3,
    img: img3,
    smallImg: smallImg3,
    largeImg: largeImg3,
    date: 10,
    month: "Jan",
    author: "Jane Smith",
    comment: 10,
    blogTitle: "UX/UI Designer",
    details: "Creative Designs Studio is seeking a talented UX/UI Designer to enhance user experiences for our clients.",
  },
  {
    id: 4,
    img: img4,
    smallImg: smallImg4,
    largeImg: largeImg4,
    date: 18,
    month: "Mar",
    author: "John Doe",
    comment: 10,
    blogTitle: "Marketing Specialist",
    details: "Global Marketing Solutions is hiring a Marketing Specialist to drive our marketing initiatives to new heights.",
  },
  {
    id: 5,
    img: img5,
    smallImg: smallImg1,
    largeImg: largeImg5,
    date: 12,
    month: "Jan",
    author: "Jane Smith",
    comment: 10,
    blogTitle: "Financial Analyst",
    details: "Join Finance Experts LLC as a Financial Analyst and play a crucial role in financial planning and analysis.",
  },
  {
    id: 6,
    img: img6,
    smallImg: smallImg2,
    largeImg: largeImg6,
    date: 10,
    month: "Jan",
    author: "Jane Smith",
    comment: 10,
    blogTitle: "Customer Support Representative",
    details: "Service Excellence Corp. is hiring a Customer Support Representative to deliver exceptional customer service.",
  },
  {
    id: 7,
    img: img7,
    smallImg: smallImg3,
    largeImg: largeImg7,
    date: 19,
    month: "Nov",
    author: "Jane Smith",
    comment: 10,
    blogTitle: "IT Project Manager",
    details: "Tech Innovations Ltd. is seeking an IT Project Manager to lead and deliver successful IT projects.",
  },
  {
    id: 8,
    img: img8,
    smallImg: smallImg4,
    largeImg: largeImg8,
    isModal: true,
    date: 13,
    month: "Feb",
    author: "Jane Smith",
    comment: 10,
    blogTitle: "Human Resources Specialist",
    details: "People Management Inc. is hiring a Human Resources Specialist to manage HR functions and employee relations.",
  },
  {
    id: 9,
    img: img9,
    smallImg: smallImg1,
    largeImg: largeImg9,
    date: 10,
    month: "Jan",
    author: "Jane Smith",
    comment: 10,
    blogTitle: "Sales Representative",
    details: "Sales Producers LLC is looking for a Sales Representative to drive sales and achieve revenue targets.",
  },
];

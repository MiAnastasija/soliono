import { ICategory, IPopularCategory } from "@/interFace/interFace";
import img1 from "../../public/assets/img/cat/cat1.jpg";
import img2 from "../../public/assets/img/cat/cat2.jpg";
import img3 from "../../public/assets/img/cat/cat3.jpg";
import img4 from "../../public/assets/img/cat/cat4.jpg";
import img5 from "../../public/assets/img/cat/cat5.jpg";
import img6 from "../../public/assets/img/cat/cat6.jpg";
import img7 from "../../public/assets/img/cat/cat7.jpg";
import img8 from "../../public/assets/img/cat/cat8.jpg";
export const allCategoryData: ICategory[] = [
  {
    id: 1,
    title: "Graphics Design",
    job: 52,
    icon: "fal fa-bezier-curve",
  },
  {
    id: 2,
    title: "Movie & Films",
    job: 304,
    icon: "fal fa-acorn",
  },
  {
    id: 3,
    title: "Web Development",
    job: 73,
    icon: "fal fa-laptop-code",
  },
  {
    id: 5,
    title: "Digital Marketing",
    job: 308,
    icon: "fal fa-bullhorn",
  },
  {
    id: 6,
    title: "It/Web Consulting",
    job: 69,
    icon: "fal fa-broadcast-tower",
  },
  {
    id: 7,
    title: "Business Group",
    job: 69,
    icon: "fal fa-briefcase-medical",
  },
  {
    id: 8,
    title: "Cleaning Services",
    job: 182,
    icon: "fal fa-broom",
  },
  {
    id: 9,
    title: "Culinary Arts",
    job: 89,
    icon: "fal fa-clinic-medical",
  },
  {
    id: 10,
    title: "Private Tutors",
    job: 89,
    icon: "fal fa-graduation-cap",
  },

  //  categories home two
];

export const popularCategories: IPopularCategory[] = [
  {
    id: 1,
    title: "Web Design",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-bezier-curve",
    img: img1,
  },

  {
    id: 2,
    title: "Movie & Films",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-film",
    img: img2,
  },

  {
    id: 3,
    title: "Programming",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-laptop-code",
    img: img3,
  },
  {
    id: 4,
    title: "Private Tutors",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "fal fa-graduation-cap",
    img: img4,
  },
  {
    id: 5,
    title: "Marketing",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-bullhorn",
    img: img5,
  },
  {
    id: 6,
    title: "IT Consulting",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-broadcast-tower",
    img: img6,
  },
  {
    id: 7,
    title: "Cleaning",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-acorn",
    img: img7,
  },
  {
    id: 8,
    title: "Medical Health",
    details: "Sed perspiciatis undeomsc natus error sit volptate",
    job: 89,
    icon: "far fa-clinic-medical",
    img: img8,
  },
];

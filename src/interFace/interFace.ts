import { StaticImageData } from "next/image";
 
import React from "react";
// context api data type
export interface AppContextType {
  scrollDirection?: string;
  toggleSideMenu?: () => void;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  jobId: number;
  setJobId: React.Dispatch<React.SetStateAction<number>>;
  candidateID: number;
  setCandidateID: React.Dispatch<React.SetStateAction<number>>;
  employeId: number;
  setEmployeId: React.Dispatch<React.SetStateAction<number>>;
  activeForm: number;
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
  blogId: number;
  setBlogId: React.Dispatch<React.SetStateAction<number>>;
  modalId: number;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buyPackage: byePackgeInfo | null;
  setBuyPackage: React.Dispatch<React.SetStateAction<byePackgeInfo | null>>;
  jobSearchData: IJobType[] | [];
  setjobSearchData: React.Dispatch<React.SetStateAction<IJobType[] | []>>;
}

export interface ICategory {
  id: number;
  title: string;
  job: number;
  icon: string;
  activeClass?: string;
}
export interface IPopularCategory {
  id: number;
  title: string;
  job: number;
  icon: string;
  activeClass?: string;
  details: string;
  img: StaticImageData;
}

export interface IjobInfo {
  title: string;
  value: string;
}
export interface IresponsibilitiesAndRequrnment {
  value: string;
}

export interface IJobType {
  id: number;
  isVerified?: boolean;
  icon: string;
  jobType: string;
  tag: string;
  skillTags: string[];
  hourlyRate?: number;
  vacancy?: number;
  img: StaticImageData;
  currencyICon: string;
  compnayName: string;
  location: string;
  jobTitle: string;
  category: string;
  jobDetails: string;
  sallaryRangeStart: number;
  sallaryRangeEnd: number;
  jobInfo: IjobInfo[];
  responsibilities: IresponsibilitiesAndRequrnment[];
  requirements: IresponsibilitiesAndRequrnment[];
  professionalSkills: IresponsibilitiesAndRequrnment[];
}

interface CompanyInformation {
  companyName: string;
  type: string;
  industry: string;
  year: number;
  founders: string[];
  locations: CompanyLocation[];
  employees: number;
  website: string;
  social_media: SocialMediaLinks;
  contact_information: ContactInformation;
  followers: number;
}

interface CompanyLocation {
  city: string;
  country: string;
  address: string;
}

interface SocialMediaLinks {
  linkedin: string;
  twitter: string;
  facebook: string;
}

interface ContactInformation {
  email: string;
  phone: string;
  hr_contact: string;
}

export interface IEmployType {
  id: number;
  companyType: string;
  details: string;
  openJob: number;
  vacancy?: number;
  icon: string;
  ratting: number;
  isVerified?: boolean;
  totalEmployeStart?: number;
  totalEmployeEnd?: number;
  img: StaticImageData;
  compnayName: string;
  location: string;
  companyData: CompanyInformation;
}
export interface IBlogDataType {
  id: number;
  img: StaticImageData;
  smallImg: StaticImageData;
  largeImg: StaticImageData;
  isModal?: boolean;
  date: number;
  month: string;
  author: string;
  comment: number;
  blogTitle: string;
  details: string;
}

interface IcandidateSortDetails {
  id: number;
  icon: string;
  title: string;
  value: string;
}
interface IcandidateProfile {
  label: string;
  value: string | number;
}

export interface IeducationData {
  degree: string;
  duration: string;
  university?: string;
  conservatory?: string;
  lawSchool?: string;
  businessSchool?: string;
  description: string;
}
export interface IworkExperienceData {
  companyName: string;
  duration: string;
  position: string;
  description: string;
  icon: string;
}

export interface IcadidateData {
  id: number;
  img: StaticImageData;
  title: string;
  subTitle: string;
  location: string;
  sallaryStart: number;
  sallaryEnd: number;
  skillsTag: string[];
  candidateSortDetails: IcandidateSortDetails[];
  candidateProfile: IcandidateProfile[];
  educationData: IeducationData[];
  workExperienceData: IworkExperienceData[];
}

// team interface

interface SocialMedia {
  icon: string;
  links: string;
}

export interface ITeamInterface {
  id: number;
  img: StaticImageData;
  name: string;
  title: string;
  social: SocialMedia[];
}

// faq interface
export interface IFaqInterface {
  id: number;
  title: string;
  details: string;
}
// pricing data

interface PricingItem {
  class: string;
  tite: string; // Note: It seems like there's a typo in the property name, correcting it to "title"
}

export interface IPricingPlan {
  id: number;
  pack: "monthly" | "yearly";
  plan: string;
  price: number;
  offer: string;
  pricingList: PricingItem[];
  fullPack?: boolean;
}

export interface byePackgeInfo {
  plan: string;
  pack: string;
  price: number;
}

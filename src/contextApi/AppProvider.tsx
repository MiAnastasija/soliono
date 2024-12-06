"use client";
import React, { createContext, useState, useEffect } from "react";
import { AppContextType, IJobType, byePackgeInfo } from "@/interFace/interFace";
import { usePathname } from "next/navigation";
import Preloader from "@/elements/Preloader";
export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("no-data");
  const [jobSearchData, setjobSearchData] = useState<IJobType[] | []>([]);
  const [filterType, setFilterType] = useState<string>("");
  const [niceSelectData, setNiceSelectData] = useState<string>("no-data");
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<number>(1);
  const [modalId, setModalId] = useState<number>(0);
  const [jobId, setJobId] = useState<number>(1);
  const [blogId, setBlogId] = useState<number>(1);
  const [candidateID, setCandidateID] = useState<number>(1);
  const [employeId, setEmployeId] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [buyPackage, setBuyPackage] = useState<byePackgeInfo | null>(null);
  useEffect(() => {
    setNiceSelectData("no-data");
    setSearchTerm("no-data");
  }, [pathName]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const contextValue: AppContextType = {
    jobSearchData,
    setjobSearchData,
    searchTerm,
    setSearchTerm,
    sideMenuOpen,
    setSideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    filterType,
    setFilterType,
    jobId,
    setJobId,
    candidateID,
    setCandidateID,
    employeId,
    setEmployeId,
    activeForm,
    setActiveForm,
    blogId,
    setBlogId,
    niceSelectData,
    setNiceSelectData,
    buyPackage,
    setBuyPackage,
    openModal,
    setOpenModal,
    modalId,
    setModalId,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {isLoading ? (
        <>
          <Preloader />
        </>
      ) : (
        <>{children}</>
      )}
    </AppContext.Provider>
  );
};

export default AppProvider;

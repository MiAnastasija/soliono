"use client"
import JobDetailsMain from "@/components/job-details/JobDetailsMain";
import useGlobalContext from "@/hooks/use-context";
import Wrapper from "@/layout/DefaultWrapper";
import React,{useEffect} from "react";

const JobDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const {setJobId} = useGlobalContext()
    useEffect(() => {
      const id =  params.id
      setJobId(id)  
    }, [params.id,setJobId])
    
  return (
    <>
      <Wrapper>
        <main>
          <JobDetailsMain />
        </main>
      </Wrapper>
    </>
  );
};

export default JobDetailsDynamicPage;

"use client"
import EmployDetailsMain from "@/components/employer-details/EmployDetailsMain";
import useGlobalContext from "@/hooks/use-context";
import Wrapper from "@/layout/DefaultWrapper";
import React,{useEffect} from "react";

const EmployDynamicDetialsPage = ({ params }: { params: { id: number } }) => {
    const {setEmployeId} = useGlobalContext()
    useEffect(() => {
      const id =  params.id
      setEmployeId(id)
    }, [params.id,setEmployeId])  
  return (
    <>
      <Wrapper>
        <main>
          <EmployDetailsMain />
        </main>
      </Wrapper>
    </>
  );
};

export default EmployDynamicDetialsPage;

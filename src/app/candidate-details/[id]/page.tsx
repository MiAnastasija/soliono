"use client"
import CandidateDetailsMain from "@/components/candidate-details/CandidateDetailsMain";
import useGlobalContext from "@/hooks/use-context";
import Wrapper from "@/layout/DefaultWrapper";
import React,{useEffect} from "react";
const CandidateDetailsPageDynamic = ({ params }: { params: { id: number } }) => {
    const {setCandidateID} = useGlobalContext()
    useEffect(() => {
      const id =  params.id
      setCandidateID(id)  
    }, [params.id,setCandidateID])
  return (
    <>
      <Wrapper>
        <main>
          <CandidateDetailsMain />
        </main>
      </Wrapper>
    </>
  );
};

export default CandidateDetailsPageDynamic;

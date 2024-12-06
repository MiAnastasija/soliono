import CandidateGridMain from '@/components/candidate-grid/CandidateGridMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CandidateGridPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                <CandidateGridMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default CandidateGridPage;
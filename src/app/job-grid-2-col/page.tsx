import JobGridTwoColMain from '@/components/job-grid-2-col/JobGridTwoColMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const JobGridTwoColPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <JobGridTwoColMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default JobGridTwoColPage;
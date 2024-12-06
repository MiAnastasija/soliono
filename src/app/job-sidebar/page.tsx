import JobSidebarMain from '@/components/job-sidebar/JobSidebarMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const JobSidebarPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <JobSidebarMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default JobSidebarPage;
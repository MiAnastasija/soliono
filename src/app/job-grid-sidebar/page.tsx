import JobGridSidebarMain from '@/components/job-grid-sidebar/JobGridSidebarMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const JobGridSidebarPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <JobGridSidebarMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default JobGridSidebarPage;
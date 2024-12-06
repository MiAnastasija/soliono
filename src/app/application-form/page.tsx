import ApplicationFormMain from '@/components/application-form/ApplicationFormMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const JobApplicationFormPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ApplicationFormMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default JobApplicationFormPage;
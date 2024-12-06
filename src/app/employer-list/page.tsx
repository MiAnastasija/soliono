import EmployeListMain from '@/components/employer-list/EmployeListMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const EmployerListPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <EmployeListMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default EmployerListPage;
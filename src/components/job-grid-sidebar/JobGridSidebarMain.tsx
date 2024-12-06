import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import JobAreaJobGridSidebar from './JobAreaJobGridSidebar';

const JobGridSidebarMain = () => {
    return (
        <>
            <BreadCamb title='Job Sidebar'/>
            <JobAreaJobGridSidebar/>
        </>
    );
};

export default JobGridSidebarMain;
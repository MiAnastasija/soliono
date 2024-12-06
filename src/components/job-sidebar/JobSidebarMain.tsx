import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import JobAreaJobContent from './JobAreaJobContent';


const JobSidebarMain = () => {
    return (
        <>
            <BreadCamb title='Job Sidebar'/>
            <JobAreaJobContent/>
        </>
    );
};

export default JobSidebarMain;
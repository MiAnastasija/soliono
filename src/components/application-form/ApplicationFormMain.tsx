import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import ApplicationForm from './ApplicationForm';

const ApplicationFormMain = () => {
    return (
        <>
            <BreadCamb title='Application Form'/>
            <ApplicationForm/>
        </>
    );
};

export default ApplicationFormMain;
import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import FaqContent from './FaqContent';
import FaqContact from './FaqContact';
import FaqMap from './FaqMap';


const FaqMain = () => {
    return (
        <>
            <BreadCamb title='Faq'/>
            <FaqContent/>
            <FaqContact/>
            <FaqMap/>
        </>
    );
};

export default FaqMain;
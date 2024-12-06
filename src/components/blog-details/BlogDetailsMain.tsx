import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import BlogDetailsContent from './BlogDetailsContent';

const BlogDetailsMain = () => {
    return (
        <>
           <BreadCamb title='Blog Details'/> 
           <BlogDetailsContent/>
        </>
    );
};

export default BlogDetailsMain;
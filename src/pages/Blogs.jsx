import React from 'react';
import { useLoaderData } from 'react-router';
import BlogsContainer from './BlogsContainer';

const Blogs = () => {
    const blogsData = useLoaderData();
    return (
        <div>
            <div className='text-center py-20'>
            <h1 className='font-bold text-5xl'>All Blogs</h1>
            </div>

            <BlogsContainer blogsData={blogsData}></BlogsContainer>
        </div>
    );
};

export default Blogs;
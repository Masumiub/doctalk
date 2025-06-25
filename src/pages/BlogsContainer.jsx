import React from 'react';
import BlogCard from './BlogCard';

const BlogsContainer = ({blogsData}) => {
    return (
        <div>
            {
                blogsData.map((blog)=><BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default BlogsContainer;
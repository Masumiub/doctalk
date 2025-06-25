import React from 'react';

const BlogCard = ({blog}) => {
    const { question, answer} = blog;
    return (
        <div className='py-10 m-5 bg-slate-100 px-6 rounded-2xl'>
            <h1 className='font-bold text-xl mb-3'>{question}</h1>
            <hr className='border-gray-200 mb-3' />
            <p>{answer}</p>
        </div>
    );
};

export default BlogCard;
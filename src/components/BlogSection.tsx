import { BlogProps } from '@/interfaces';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { FaCommentAlt, FaEye } from 'react-icons/fa';


const BlogSection: NextPage<BlogProps> = ({ data }) => {

    return (
        <section className="text-base-600 body-font">
            <h1 className="text-3xl font-bold text-center title-font mb-4 text-accent-content">
                <span className='text-secondary'>🎯👨‍💻💥 Latest Blogs & </span>Tech news! 🔥💻🚀
            </h1>
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data?.map((blog, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog?.image} alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                                    <h1 className="title-font text-lg font-medium text-secondary mb-3">{blog.title}</h1>
                                    <p className="leading-relaxed mb-3 text-base">{blog?.description.slice(0, 100)}...</p>
                                    <div className="flex items-center flex-wrap">
                                        <a href={`/blogs/${blog?._id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <FaEye className="w-4 h-4 mr-1" />
                                            1.3k
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <FaCommentAlt className="w-4 h-4 mr-1" />
                                            9
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

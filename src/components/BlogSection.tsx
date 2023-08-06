import React from 'react';
import { FaCommentAlt, FaEye } from 'react-icons/fa';

const BlogSection: React.FC = () => {
    const blogs = [
        {
            imageSrc: 'https://i.ibb.co/sgvJvQp/OIG-removebg-preview.png',
            category: 'CATEGORY',
            title: 'The Catalyzer',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            views: '1.2K',
            comments: 6,
        },
        {
            imageSrc: 'https://i.ibb.co/tB95Vcw/OIG-m-Q5-J05-W1m-removebg-preview.png',
            category: 'CATEGORY',
            title: 'The 400 Blows',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            views: '800',
            comments: 10,
        },
        {
            imageSrc: 'https://i.ibb.co/tbntQPg/bc21dc2c-4c84-40d0-8b1a-ed5904cc41a5-removebg-preview.png',
            category: 'CATEGORY',
            title: 'Shooting Stars',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            views: '1.5K',
            comments: 4,
        },
        // Add more blog data here
    ];

    return (
        <section className="text-gray-300 body-font">
            <h1 className="text-3xl font-bold text-center title-font mb-4 text-accent-content">
                <span className='text-secondary'>🎯👨‍💻💥 Latest Blogs & </span>Tech news! 🔥💻🚀
            </h1>
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {blogs.map((blog, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.imageSrc} alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                                    <h1 className="title-font text-lg font-medium text-secondary mb-3">{blog.title}</h1>
                                    <p className="leading-relaxed mb-3">{blog.description}</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <FaEye className="w-4 h-4 mr-1" />
                                            {blog.views}
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <FaCommentAlt className="w-4 h-4 mr-1" />
                                            {blog.comments}
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

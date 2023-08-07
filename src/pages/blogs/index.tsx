import RootLayout from '@/components/RootLayout';
import React, { ReactElement } from 'react';
import { FaCommentAlt, FaEye } from 'react-icons/fa';

const Blogs: React.FC = () => {
    const blogs = [
        {
            imageSrc: 'https://i.ibb.co/sgvJvQp/OIG-removebg-preview.png',
            category: 'Web Development',
            title: '10 Essential JavaScript Concepts Every Developer Should Know',
            description: 'Explore the fundamental JavaScript concepts that will enhance your skills and make you a better developer.',
            views: '1.2K',
            comments: 6,
        },
        {
            imageSrc: 'https://i.ibb.co/tB95Vcw/OIG-m-Q5-J05-W1m-removebg-preview.png',
            category: 'React',
            title: 'Building Dynamic UIs with React Hooks',
            description: 'Learn how to create interactive and dynamic user interfaces using React Hooks and state management.',
            views: '800',
            comments: 10,
        },
        {
            imageSrc: 'https://i.ibb.co/tbntQPg/bc21dc2c-4c84-40d0-8b1a-ed5904cc41a5-removebg-preview.png',
            category: 'Python',
            title: 'Introduction to Python Data Science Libraries',
            description: 'Discover the powerful Python libraries for data science and start analyzing and visualizing data.',
            views: '1.5K',
            comments: 4,
        },
        // Add more blog data here
    ];

    return (
        <section className="text-gray-300 body-font min-h-screen">
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

export default Blogs;

(Blogs as any).getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    );
};
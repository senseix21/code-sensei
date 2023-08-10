import BlogSection from '@/components/BlogSection';
import { BlogData } from '@/interfaces';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';


interface BlogProps {
    blogs: BlogData[];
}

const Blogs: NextPage<BlogProps> = ({ blogs }) => {
    console.log(blogs.length);


    return (
        <section className=" body-font min-h-screen">

            <div>
                <BlogSection data={blogs} />
            </div>

        </section>
    );
};

export default Blogs;


export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    try {
        // Replace with the JSON data file path or API endpoint
        const res = await fetch('https://code-sensei-backend.vercel.app/blogs');
        const blogs = await res.json();

        // Return the fetched data as props
        return {
            props: {
                blogs,
            },
        };

    } catch (error) {
        // Handle any errors that might occur during the data fetching process
        console.error('Error fetching data:', error);
        return {
            props: {
                blogs: [],
            },
        };
    }
};


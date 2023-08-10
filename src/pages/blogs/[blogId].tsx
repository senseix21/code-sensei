import BlogDetails from '@/components/BlogDetails';
import { BlogEntry } from '@/interfaces';
import { Head } from 'next/document';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Section {
    title: string;
    content: string;
    code: string;
    note: string;
}

interface BlogData {
    title: string;
    description: string;
    image: string;
    sections: Section[];
    tags: string[];
}

interface BlogProps {
    data: BlogData;
}

const BlogPost: React.FC<BlogProps> = ({ data }) => {
    const { title, description, image, sections, tags } = data;
    const meta = {
        title: `${title} | SENSEI's Blogs`,
        description: `${description}`,
        keywords: `${tags}`,
        author: 'SENSEI aka Mehedi Hasan',
    };

    return (
        <div>
            <main>
                <BlogDetails data={data} />
            </main>
        </div>
    );
};

export default BlogPost;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://code-sensei-backend.vercel.app/blog/${params?.blogId}`);
    const blog = await res.json();

    return {
        props: {
            data: blog,
        },
    };
};

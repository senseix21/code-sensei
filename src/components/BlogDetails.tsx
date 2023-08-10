import { BlogData } from '@/interfaces';
import { NextPage } from 'next';
import React from 'react';


interface BlogProps {
    data: BlogData;
}
const BlogDetails: NextPage<BlogProps> = ({ data }) => {
    const { title, description, image, sections, tags } = data;

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="prose lg:prose-xl">
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className=''>{description}</p>
                <img src={image} alt={title} className="my-8 mx-auto max-w-full h-auto" />

                {sections?.map((section, index) => (
                    <div key={index} className="my-8">
                        <h2 className="text-2xl font-bold">{section?.title}</h2>
                        <p>{section?.content}</p>
                        {
                            section?.code ? <pre className="bg-base-300 text-accent-content p-4 my-4 rounded-lg">{section.code}</pre> : null
                        }
                        <p>{section?.note}</p>

                    </div>

                ))}

                <div className="flex space-x-2 my-4">
                    {tags?.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {tag}
                        </span>
                    ))}
                </div>
            </article>
        </div>
    );
};

export default BlogDetails;
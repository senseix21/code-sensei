import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { RxResume } from 'react-icons/rx'
import Link from 'next/link';

export default function HeroBanner(): React.JSX.Element {
    return (
        <section className="text-gray-100 body-font">
            <div className="container mx-auto flex px-5 py-5 md:flex-row items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-4xl md:text-4xl mb-4 font-medium text-orange-600">Hello! SENSEI Here.🌟
                        <span className="hidden lg:inline-block text-white">A Code Craftsman with a Flair for Full-Stack Magic ✨</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Versatile Tech Wizard | TypeScript, JavaScript, Node, Express, React, Redux, Next.js
                        | MongoDB, Postgres SQL, NoSQL Sorcerer | Git Enchanter | Crafting Digital Magic with Code. 🧙‍♂️🚀✨
                    </p>
                    <div className="flex justify-center text-white">
                        <Link href={'https://github.com/senseix21'} className='btn btn-md mr-2 bg-slate-500'><FaGithub /> Github </Link >
                        <Link href={'https://www.linkedin.com/in/mehedi-hasan-hridoy-4b9130193/'} className='btn btn-md bg-blue-600 mr-2'><AiFillLinkedin /> LinkedIn </Link >
                        <Link href={'https://docs.google.com/document/d/16yz1jpeN2g8djZvLkq0e8vQUKwfjarKGohPhFWIuPOU/edit?usp=sharing'} className='btn btn-md bg-orange-700'><RxResume /> Resume </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/QYxDb32/hero-img.png" />
                </div>
            </div>
        </section>
    )
}

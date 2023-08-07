import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About(): React.JSX.Element {
    return (
        <section className="text-gray-100 body-font my-5">
            <div className="container mx-auto lg:flex lg:flex-row-reverse lg:px-5 py-5 lg:items-center">

                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-4xl md:text-4xl mb-4 font-bold text-accent">About SENSEI!🌟
                        <span className=" text-white">aka Mehedi Hasan ✨</span>
                    </h1>
                    <p className="lg:mb-8 leading-relaxed">
                        "Passionate Full-Stack Developer. Crafting Digital Experiences with TypeScript, React, and Python. Turning Ideas into Reality, One Line of Code at a Time.
                        Let's Build Something Extraordinary Together! 🚀✨"
                    </p>
                    <button className='btn btn-accent btn-md lg:mt-0 mt-3' onClick={() => window.location.href = 'mailto:mehedihasanx2118@gmail.com'}>Hire Me</button>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-2/3">
                    <Image className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/LgBtzX3/about-sensei.png" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}

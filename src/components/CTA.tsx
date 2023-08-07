import Image from 'next/image';
import React from 'react';

const CTA = () => {
    return (
        <div>
            <section className="text-base body-font my-10">
                <div className="container mx-auto lg:flex px-5 py-5 md:flex-row items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-2/3 w-full">
                        <Image className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/7KHR3YL/cta-img.png" width={500} height={500} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-4xl md:text-4xl mb-4 font-bold text-accent">🚀🌟 Ready to Bring Your Ideas to Life?
                            <span className="hidden lg:inline-block text-accent-content">Let's Create Something Amazing Together! 🚀✨</span>
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Are you looking for a skilled full-stack developer to turn your vision into reality?
                            Whether you have a specific project in mind or need expert guidance, I'm here to make it happen.🚀✨"
                        </p>
                        <button className='btn btn-accent btn-md' onClick={() => window.location.href = 'mailto:mehedihsanx2118@gmail.com'}>Contact Me</button>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default CTA;
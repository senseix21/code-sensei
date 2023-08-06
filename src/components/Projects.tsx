import { NextPage, GetStaticProps } from 'next';
import { FaGithub, FaRocket } from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/interfaces';

interface ProjectProps {
    projects: Project[];
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
    const data = Object.values(projects);
    console.log(data);
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
            {data?.map((project) => (
                <div key={project.id} className="p-4">
                    <div className=" lg:flex ">
                        <div className="carousel rounded-box w-full">
                            {project?.image?.map((imageUrl, index) => (
                                <div key={index} className="carousel-item w-full h-80 flex-shrink-0">
                                    <Image src={imageUrl} alt='project' width={288} height={288} />
                                </div>
                            ))}
                        </div>
                        <div className="ml-5">
                            <h2 className="title-font text-2xl text-secondary font-semibold">{project.title}</h2>
                            <div>
                                <p className="mb-4 text-base-900"><span className='text-xl text-accent-content font-semibold'>Features:</span> <br />{project.description}</p>
                                <h3 className="text-gray-300 mb-3"><span className='text-xl text-accent-content font-semibold'>Technology stack:</span> <br />{project.technologies}</h3>
                            </div>
                            <div>
                                <Link href={project?.liveSite} className='btn btn-sm btn-secondary  '><FaRocket />Live site</Link>
                                <Link href={project?.githubRepo} className='btn btn-sm btn-black btn-outline lg:ml-5 ml-1 '><FaGithub />Github</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;


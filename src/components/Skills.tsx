import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiPostgresql, SiReact, SiRedux, SiNextdotjs, SiExpress, SiFirebase, SiVercel, SiNetlify, SiCss3, SiSass } from 'react-icons/si';
import { DiMongodb, DiGit, DiReact, DiDatabase, DiNodejs, DiJavascript1, DiCss3 } from 'react-icons/di';

const skills = [
    { skill: "TypeScript", icon: <SiTypescript />, color: "bg-blue-300" },
    { skill: "JavaScript", icon: <SiJavascript />, color: "bg-yellow-300" },
    { skill: "Python", icon: <SiPython />, color: "bg-green-300" },
    { skill: "Node", icon: <SiNodedotjs />, color: "bg-red-300" },
    { skill: "Express", icon: < SiExpress />, color: "bg-purple-300" },
    { skill: "MongoDB", icon: <SiMongodb />, color: "bg-orange-300" },
    { skill: "Mongoose", icon: <  SiMongodb />, color: "bg-indigo-300" },
    { skill: "Postgres SQL", icon: <SiPostgresql />, color: "bg-pink-300" },
    { skill: "Prisma", icon: <DiDatabase />, color: "bg-cyan-300" },
    { skill: "React", icon: <SiReact />, color: "bg-teal-300" },
    { skill: "Redux", icon: <SiRedux />, color: "bg-amber-300" },
    { skill: "NextJS", icon: <SiNextdotjs />, color: "bg-lime-300" },
    { skill: "NoSQL", icon: <DiDatabase />, color: "bg-orange-300" },
    { skill: "Git", icon: <DiGit />, color: "bg-red-300" },
    { skill: "Firebase", icon: <SiFirebase />, color: "bg-yellow-300" },
    { skill: "Vercel", icon: <SiVercel />, color: "bg-blue-300" },
    { skill: "NETLIFY", icon: <SiNetlify />, color: "bg-purple-300" },
    { skill: "OOP", icon: <DiJavascript1 />, color: "bg-red-300" },
    { skill: "DBMS", icon: <DiDatabase />, color: "bg-pink-300" },
    { skill: "Ant Design", icon: <DiReact />, color: "bg-blue-300" },
    { skill: "MUI", icon: <SiReact />, color: "bg-teal-300" },
    { skill: "TailwindCSS", icon: <SiCss3 />, color: "bg-cyan-300" },
    { skill: "DAISY UI", icon: <SiCss3 />, color: "bg-green-300" },
    { skill: "SASS", icon: <SiSass />, color: "bg-pink-300" },
];



const Skills: React.FC = () => {
    return (
        <div className='mt-20'>
            <h1 className="text-3xl font-bold text-center title-font mb-4 text-accent-content">
                <span className='text-accent'>🎯👨‍💻💥 Skills & </span>Experience 🔥💻🚀
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Full Stack Sorcerer 🧙‍♂️ Coding Magic ✨ Debugging Wizard 🔍
                Turning Ideas into Web Marvels 🌐🚀 Passionate Problem-Solver 💪💻🎯......
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-8 gap-4 mt-10">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center ">
                        <div className={`p-4 rounded-sm text-black text-2xl ${skill.color}`}>
                            {skill.icon}
                        </div>
                        <p className="mt-2 text-center">{skill.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
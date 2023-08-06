import React from 'react';
import { AiFillCode } from 'react-icons/ai';

const Navbar: React.FC = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><AiFillCode className="text-secondary text-2xl" /> CODE-SENSEI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href={'https://docs.google.com/document/d/16yz1jpeN2g8djZvLkq0e8vQUKwfjarKGohPhFWIuPOU/edit?usp=sharing'} className="btn bg-secondary btn-md text-white">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;

import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCode } from 'react-icons/ai';
import ThemeToggle from './themeToggle';

interface NavbarProps {
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkTheme, setDarkTheme }) => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/#about'>About</Link></li>
                        <li><Link href='/#projects'>Projects</Link></li>
                        <li><Link href='/#skills'>Skills</Link></li>
                        <li><Link href='/#contact'>Contact</Link></li>
                        <li><Link href='/#blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost normal-case text-xl"><AiFillCode className="text-secondary text-2xl" /> CODE-SENSEI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/#about'>About</Link></li>
                    <li><Link href='/#projects'>Projects</Link></li>
                    <li><Link href='/#skills'>Skills</Link></li>
                    <li><Link href='/#contact'>Contact</Link></li>
                    <li><Link href='/#blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Link href={'https://docs.google.com/document/d/16yz1jpeN2g8djZvLkq0e8vQUKwfjarKGohPhFWIuPOU/edit?usp=sharing'} className="btn bg-secondary btn-md text-white">Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;

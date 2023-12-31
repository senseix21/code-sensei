import Link from 'next/link'
import React from 'react'
import { AiFillCode } from 'react-icons/ai'

export default function Footer(): React.JSX.Element {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content justify-around">

            <div>
                <a className="btn btn-ghost normal-case text-xl"><AiFillCode className="text-secondary text-6xl" /></a>
                <p className='mt-3'>CODE-SENSEI Industries Ltd.<br />Providing reliable solutions since 2022</p>
            </div>

            <div>
                <Link href={'/legals'} className="footer-title">Legal</Link>
                <Link href='/legals/#terms-of-use' className="link link-hover">Terms of use</Link>
                <Link href='/legals/#privacy-policy' className="link link-hover">Privacy policy</Link>
                <Link href='/legals/#cookie-policy' className="link link-hover">Cookie policy</Link>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <form className="form-control w-80" method="POST" >
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </form>
            </div>
        </footer>
    )
}

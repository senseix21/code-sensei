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
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

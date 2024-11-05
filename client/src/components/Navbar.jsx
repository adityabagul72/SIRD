import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

function Navbar() {
    const navbarRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            navbarRef.current, 
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }
        );
    }, []);

    return (
        <div ref={navbarRef} className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50 font-poppins">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <button 
                            tabIndex={0} 
                            aria-label="Open menu" 
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className=''><Link to="/academics">Academics & Research</Link></li>
                            <li>
                                <Link to="/international-collaborations">
                                    International Collaborations
                                </Link>
                                <ul className="p-2">
                                    <li><Link to="/international-mous">Interational Mous</Link></li>
                                    <li><Link to="/international-collaborations">Interational Collaborations</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/students">Students</Link></li>
                            <li><Link to="/aboutUs">Abouts Us</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="  btn btn-ghost text-xl">Sanjivani International</Link>
                </div>
                
                {/* Desktop Menu */}
                <div className="font-semibold ml-[600px] navbar-center hidden lg:flex gap-15">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/academics"><span className='hover:text-blue-500'>Academics & Research</span></Link></li>
                        <li>
                            <details>
                                <summary> <span className='hover:text-blue-500'>International Collaborations</span></summary>
                                <ul className="p-2">
                                    <li><Link to="/international-mous"><span className='hover:text-blue-500'>International MoUs</span></Link></li>
                                    <li><Link to="/international-collaborations"><span className='hover:text-blue-500'>International collaborations</span></Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/students"><span className='hover:text-blue-500'>Students</span></Link></li>
                        <li><Link to="/aboutUs"><span className='hover:text-blue-500'>About Us</span></Link></li>
                    </ul>
                </div>

                {/* Right Side of Navbar */}
                <div className="navbar-end">
                    {/* Placeholder for future items like login button */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;

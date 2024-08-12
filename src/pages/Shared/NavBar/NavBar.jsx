import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';

const NavBar = () => {

    const navOptions = <>
        <li>
            <ActiveLink to={'/'} className='font-bold md:text-white'>HOME</ActiveLink>
        </li>
        <li>
            <ActiveLink to={'/contact'} className='font-bold md:text-white'>CONTACT US</ActiveLink>
        </li>
        <li>
            <ActiveLink to={'/dashboard'} className='font-bold md:text-white'>DASHBOARD</ActiveLink>
        </li>
        <li>
            <ActiveLink to={'/menu'} className='font-bold md:text-white'>OUR MENU</ActiveLink>
        </li>
        <li>
            <ActiveLink to={'/shop'} className='font-bold md:text-white'>OUR SHOP</ActiveLink>
        </li>
        <li>
            <img
            className='w-10 rounded-full hidden lg:block'
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </li>

    </>
    return (
        <div>
            <div className="navbar bg-[#15151580] py-8">
                <div className="w-[60%] md:w-[70%] justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="md:ml-12"><span className='cinzel-font text-xl md:text-[32px] font-black text-white '>BISTRO BOSS</span> <br /> <span className='cinzel-font text-xl md:text-2xl text-white tracking-widest md:tracking-custom'>Restaurant</span></Link>

                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex lg:pr-8">
                        <ul className="flex items-center gap-5">
                            {navOptions}
                        </ul>
                        <div className="w-10">

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NavBar;
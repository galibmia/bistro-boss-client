import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { GiWallet } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { MdReviews, MdEmail, MdMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import ActiveLink from '../components/ActiveLink/ActiveLink';




const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side bg-[#D1A054] text-[#151515]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <h1 className='w-4/5 mx-auto my-8'>
                    <span className='cinzel-font text-xl md:text-[32px] font-black text-black'>BISTRO BOSS</span> <br /> <span className='cinzel-font font-semibold text-xl md:text-2xl text-black tracking-widest md:tracking-custom'>Restaurant</span>
                </h1>
                <ul className="menu  w-80 p-4 cinzel-font">
                    {/* Sidebar content here */}
                    <li className='uppercase cinzel-font'><ActiveLink to='/dashboard/home'><AiFillHome className='text-2xl' /> User Home</ActiveLink></li>
                    <li className='uppercase cinzel-font'><ActiveLink to='/dashboard/reservation'><SlCalender className='text-2xl' /> Reservation </ActiveLink></li>
                    <li className='uppercase cinzel-font'><ActiveLink to='/dashboard/payment'><GiWallet className='text-2xl' /> Payment History</ActiveLink></li>
                    <li className='uppercase cinzel-font'><ActiveLink to='/dashboard/myCart'><FaShoppingCart className='text-2xl' /> My Cart</ActiveLink></li>
                    <li className='uppercase cinzel-font'><ActiveLink to='/dashboard/review'><MdReviews className='text-2xl' /> Add Review</ActiveLink></li>
                    <li className='uppercase cinzel-font'><ActiveLink to='/dashboard/booking'><BsFillCalendarDateFill className='text-2xl' /> My Booking</ActiveLink></li>

                    <div className="divider border-white"></div>

                    <li className='uppercase cinzel-font'><Link to='/'><AiFillHome className='text-2xl' /> Home</Link></li>
                    <li className='uppercase cinzel-font'><Link to='/menu'><MdMenu className='text-2xl' /> Menu </Link></li>
                    <li className='uppercase cinzel-font'><Link to='/shop'><FaShoppingBag  className='text-2xl' /> Order</Link></li>
                    <li className='uppercase cinzel-font'><Link to='/contact'><MdEmail className='text-2xl' />Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { GiWallet } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaShoppingCart, FaShoppingBag, FaBook, FaUsers  } from "react-icons/fa";
import { MdReviews, MdEmail, MdMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";


import useCart from '../hooks/useCart';
// import useAdmin from '../hooks/useAdmin';




const Dashboard = () => {
    const [cart] = useCart();

    // TODO: Set isAdmin value based on data load from server.
    // const [isAdmin] = useAdmin();
    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-[70%] mx-auto bg-[#F6F6F6]">
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
                <ul className="menu  w-80 p-4 cinzel-font space-y-2 ">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/adminHome'><AiFillHome className='text-2xl' /> Admin Home</NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/addItem'><ImSpoonKnife className='text-2xl' /> Add item </NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/manageItems'><TfiMenuAlt className='text-2xl' /> Manage Items</NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/manageBookings'><FaBook className='text-2xl' /> Manage Bookings</NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/allUsers'><FaUsers className='text-2xl' /> All Users</NavLink></li>
                        </> : <>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/home'><AiFillHome className='text-2xl' /> User Home</NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/reservation'><SlCalender className='text-2xl' /> Reservation </NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/payment'><GiWallet className='text-2xl' /> Payment History</NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/myCart'><FaShoppingCart className='text-2xl' /> My Cart
                                <span className="badge badge-sm indicator-item bg-red-700 text-white border-red-700">{cart?.length}</span>
                            </NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/review'><MdReviews className='text-2xl' /> Add Review</NavLink></li>
                            <li className='uppercase cinzel-font'><NavLink to='/dashboard/booking'><BsFillCalendarDateFill className='text-2xl' /> My Booking</NavLink></li>
                        </>
                    }

                    <div className="divider border-white"></div>

                    <li className='uppercase cinzel-font'><Link to='/'><AiFillHome className='text-2xl' /> Home</Link></li>
                    <li className='uppercase cinzel-font'><Link to='/menu'><MdMenu className='text-2xl' /> Menu </Link></li>
                    <li className='uppercase cinzel-font'><Link to='/shop'><FaShoppingBag className='text-2xl' /> Order</Link></li>
                    <li className='uppercase cinzel-font'><Link to='/contact'><MdEmail className='text-2xl' />Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
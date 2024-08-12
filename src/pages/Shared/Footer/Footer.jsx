import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row text-neutral-content">
                <aside className='bg-[#1F2937] p-10 md:w-1/2'>
                    <div className='w-[345px] lg:ml-[158px]'>
                        <h6 className="text-3xl text-center text-white inter-font font-medium">CONTACT US</h6>
                        <p className='mb-8 text-center mt-6 font-medium text-white'>123 ABS Street, Uni 21, Bangladesh
                            <br />+88 123456789
                            <br />Mon - Fri: 08:00 - 22:00
                            <br />Sat - Sun: 10:00 - 23:00</p>
                        {/* <div className="flex justify-center gap-4">
                            <a href='#'>
                                <FaFacebookF className='text-3xl' />
                            </a>
                            <a href='#'>
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href='#'>
                                <BsTwitterX className='text-3xl' />
                            </a>
                        </div> */}
                    </div>
                </aside>
                <nav className='md:w-1/2 bg-[#111827] p-10'>
                    <div className='w-[345px]'>
                        <h6 className="text-3xl text-center text-white inter-font font-medium">Follow Us</h6>
                        <p className='mb-8 text-center font-medium text-xl text-white mt-6'>Join us on social media</p>
                        <div className="flex justify-center gap-4">
                            <a href='#'>
                                <FaFacebookF className='text-3xl text-white' />
                            </a>
                            <a href='#'>
                                <FaInstagram className='text-3xl text-white' />
                            </a>
                            <a href='#'>
                                <BsTwitterX className='text-3xl text-white' />
                            </a>
                        </div>
                    </div>
                </nav>

            </div>
            <div className="footer footer-center font-medium text-xl bg-[#151515] text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Bistro Boss</p>
                </aside>
            </div>

        </footer>
    );
};

export default Footer;
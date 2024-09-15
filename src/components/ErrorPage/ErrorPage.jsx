import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.gif'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <div className="my-8">
                <img
                    src={errorImg} // Add the image you want to use for 404
                    alt="404 Not Found"
                    className=""
                />
            </div>
            <Link to="/" className="mt-8 bg-custom-gradient font-bold text-white text-2xl rounded-sm py-2 px-6 hover:opacity-90 transition-opacity flex items-center gap-2">
                Back To Home <FaHome className='text-2xl'></FaHome>
            </Link>
        </div>
    );
};

export default ErrorPage;

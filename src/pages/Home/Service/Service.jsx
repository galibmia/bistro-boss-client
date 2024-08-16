import React from 'react';

const Service = ({serviceImg, title, details}) => {
    return (
        <div className="relative text-center">
            <img src={serviceImg} alt="" className='w-full rounded-md' />
            <div className='absolute inset-0 flex flex-col items-center justify-center my-8 lg:my-24 bg-black bg-opacity-60 p-6 mx-auto w-4/5 rounded-lg shadow-lg'>
                <h1 className='cinzel-font uppercase text-xl text-white lg:text-5xl font-bold text-center mb-2'>{title}</h1>
                <p className='text-center text-md hidden text-white md:block w-[80%] mx-auto'>{details}</p>
            </div>
        </div>
    );
};  

export default Service;

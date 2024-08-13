import React from 'react';
import serviceImg from '../../../assets/home/chef-service.jpg';

const Service = () => {
    return (
        <div className="relative text-center">
            <img src={serviceImg} alt="" className='w-full h-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center my-8 lg:my-24 bg-white bg-opacity-80 p-6 mx-auto w-4/5 rounded-lg shadow-lg'>
                <h1 className='cinzel-font uppercase text-xl lg:text-5xl text-center mb-2'>Bistro Boss</h1>
                <p className='text-center text-md hidden md:block w-[80%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Service;

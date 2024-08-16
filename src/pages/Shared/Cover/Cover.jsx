import React from 'react';
import Tilt from 'react-parallax-tilt';

const Cover = ({ coverImg, title, details }) => {
    return (
        <div className="relative text-center" >
            <img src={coverImg} alt="" className='w-full rounded-md' />

            <div className='absolute inset-0 flex items-center justify-center'>
                <Tilt
                    className="background-stripes parallax-effect-glare-scale"
                    perspective={800}
                    scale={1.00}
                >
                    <div className='px-6 py-36  rounded-lg shadow-lg flex flex-col items-center justify-center'>
                        <h1 className='cinzel-font uppercase text-xl text-white lg:text-5xl font-bold text-center mb-2'>{title}</h1>
                        <p className='text-center text-md hidden text-white md:block w-[80%] mx-auto'>{details}</p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Cover;

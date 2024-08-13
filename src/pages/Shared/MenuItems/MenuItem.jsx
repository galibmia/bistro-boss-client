import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex space-x-4 p-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" className='w-12 h-12 md:w-24 md:h-24 object-cover' />
            <div className='flex-1'>
                <h3 className='text-md md:text-xl Cinzel-font uppercase'>{name} <span className='text-gray-400 hidden md:block'>----------------</span></h3>
                <p className='text-gray-600'>{recipe}</p>
            </div>
            <p className='text-lg font-semibold text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;

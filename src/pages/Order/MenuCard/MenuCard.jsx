import React from 'react';
import useMenu from '../../../hooks/useMenu';

const MenuCard = ({ category }) => {
    const { menu } = useMenu(category);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pl-2'>
            {
                menu.map(item => <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={item?.image}
                            alt={item?.name}
                        />
                    </figure>
                    <p className='absolute right-0 mr-4 mt-5 bg-black bg-opacity-70 text-white py-3 px-4 rounded-lg'>${item?.price}</p>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold my-2 text-center">{item?.name}</h2>
                        <p className='text-center my-2'>{item?.recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">Add to Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MenuCard;
import React from 'react';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shared/MenuItems/MenuItem';

const MenuCategory = ({category}) => {
    const { menu } = useMenu(category);
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-4 w-4/5 mx-auto'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-5'>
                <button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </>

    );
};

export default MenuCategory;
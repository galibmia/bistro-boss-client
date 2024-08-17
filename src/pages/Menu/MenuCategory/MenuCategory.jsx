import React from 'react';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shared/MenuItems/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({category}) => {
    const { menu } = useMenu(category);
    console.log(category);
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
                <Link to={`/order/${category}`}><button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">Order your favorite {category=='offered'? 'Food': category}</button></Link>
            </div>
        </>

    );
};

export default MenuCategory;
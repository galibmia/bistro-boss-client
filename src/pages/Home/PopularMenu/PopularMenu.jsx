import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItems/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const {menu, loading} = useMenu('popular');
    if(loading){
        return <div> Loading</div>
    }

    return (
        <section>
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></SectionTitle>
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
                <button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
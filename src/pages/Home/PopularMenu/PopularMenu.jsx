import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItems/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    } , [])

    
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
        </section>
    );
};

export default PopularMenu;
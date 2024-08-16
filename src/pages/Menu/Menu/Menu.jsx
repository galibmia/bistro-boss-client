import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <div className='mb-20'>
                <Cover
                    coverImg={menuImg}
                    title={'Our Menu'}
                    details={'Would you like to try a dish?'}
                ></Cover>
            </div>
            <div className='my-20'>
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"TODAY'S OFFER"}
                ></SectionTitle>
            </div>
            <div className='my-20'>
                <PopularMenu></PopularMenu>
            </div>


        </div>
    );
};

export default Menu;
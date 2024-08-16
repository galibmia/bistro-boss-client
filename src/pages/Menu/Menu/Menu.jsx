import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../../assets/menu/dessert-bg.jpeg'

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
                <MenuCategory
                    category={'offered'}
                ></MenuCategory>
            </div>

            <div className='mb-20'>
                <Cover
                    coverImg={desertImg}
                    title={'Deserts'}
                    details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
            </div>
            <div className='my-20'>
                <MenuCategory
                    category={'offered'}
                ></MenuCategory>
            </div>


        </div>
    );
};

export default Menu;
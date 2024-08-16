import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            {/* Main menu section */}
            <div className='mb-20'>
                <Cover
                    coverImg={menuImg}
                    title={'Our Menu'}
                    details={'Would you like to try a dish?'}
                ></Cover>
            </div>

                 {/* Offer menu section */}
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

                 {/* Dessert menu section */}
            <div className='mb-20'>
                <Cover
                    coverImg={desertImg}
                    title={'dessert'}
                    details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
            </div>
            <div className='my-20'>
                <MenuCategory
                    category={'dessert'}
                ></MenuCategory>
            </div>
                 {/* Pizza menu section */}
            <div className='mb-20'>
                <Cover
                    coverImg={pizzaImg}
                    title={'Pizza'}
                    details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
            </div>
            <div className='my-20'>
                <MenuCategory
                    category={'pizza'}
                ></MenuCategory>
            </div>
                 {/* Salad menu section */}
            <div className='mb-20'>
                <Cover
                    coverImg={saladImg}
                    title={'salads'}
                    details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
            </div>
            <div className='my-20'>
                <MenuCategory
                    category={'salad'}
                ></MenuCategory>
            </div>
                 {/* Soup menu section */}
            <div className='mb-20'>
                <Cover
                    coverImg={soupImg}
                    title={'Soups'}
                    details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>
            </div>
            <div className='my-20'>
                <MenuCategory
                    category={'soup'}
                ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;
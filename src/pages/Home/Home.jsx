import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Service from './Service/Service';
import PopularMenu from './PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import ChefRecommends from './ChefRecommends/ChefRecommends';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div className='mb-20'>
                <Banner></Banner>
            </div>
            <div className='my-20'>
                <Category></Category>
            </div>
            <div className='my-20'>
                <Service></Service>
            </div>
            <div className='my-20'>
                <PopularMenu></PopularMenu>
            </div>
            {/* <div className='my-20'>
                <CallUs></CallUs>
            </div> */}
            <div className='my-20'>
                <ChefRecommends></ChefRecommends>
            </div>
            <div className='my-20'>
                <Featured></Featured>
            </div>
            <div className='my-20'>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;
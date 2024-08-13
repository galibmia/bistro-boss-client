import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Service from './Service/Service';

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
        </div>
    );
};

export default Home;
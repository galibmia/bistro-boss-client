import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <div className='mb-20'>
                <Banner></Banner>
            </div>
            <div className='my-20'>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Service from './Service/Service';
import PopularMenu from './PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import ChefRecommends from './ChefRecommends/ChefRecommends';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet} from 'react-helmet-async';
import serviceImg from '../../assets/home/chef-service.jpg';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <div className='mb-20'>
                <Banner></Banner>
            </div>
            <div className='my-20'>
                <Category></Category>
            </div>
            <div className='my-20'>
                <Service
                    serviceImg={serviceImg}
                    title={'Bistro Boss'}
                    details={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}
                ></Service>
            </div>
            <div className='my-20'>
                <PopularMenu></PopularMenu>
            </div>
            <div className='my-20'>
                <CallUs></CallUs>
            </div>
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
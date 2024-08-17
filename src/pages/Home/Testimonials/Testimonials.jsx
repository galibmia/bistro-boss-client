import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import quoteIcon from '../../../assets/icon/quote-left 1.png'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-one-umber.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    console.log(reviews)
    return (
        <div>
            <div className='mb-8'>
                <SectionTitle
                    subHeading={'What Our Clients Say'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>
            </div>
            <div className='mt-8 py-8'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='w-4/5 mx-auto'>
                                <Rating
                                    style={{ maxWidth: 180, marginLeft: 'auto', marginRight: 'auto' }}
                                    value={review.rating}
                                    autoPlay={true}
                                    readOnly
                                />
                                <img src={quoteIcon} alt="" className='w-[60px] mx-auto my-8' />
                                <p className='text-center mb-4 text-xl'>{review.details}</p>
                                <h4 className='text-center text-3xl text-[#CD9003] font-medium uppercase'>{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
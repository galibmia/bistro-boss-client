import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import sliderImg1 from '../../../assets/home/slide1.jpg';
import sliderImg2 from '../../../assets/home/slide2.jpg';
import sliderImg3 from '../../../assets/home/slide3.jpg';
import sliderImg4 from '../../../assets/home/slide4.jpg';
import sliderImg5 from '../../../assets/home/slide5.jpg';
import './Category.css'; // Import your custom CSS file
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    heading={'ORDER ONLINE'}
                    subHeading={'From 11:00am to 10:00pm'}
                >
                </SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={10} // Adjust the space between slides here
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <img src={sliderImg1} alt="Slide 1" className="slide-img" />
                        <div className="overlay-text cinzel-font">SALADS</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src={sliderImg2} alt="Slide 2" className="slide-img" />
                        <div className="overlay-text cinzel-font">SOUPS</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src={sliderImg3} alt="Slide 3" className="slide-img" />
                        <div className="overlay-text cinzel-font">PIZZAS</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src={sliderImg4} alt="Slide 4" className="slide-img" />
                        <div className="overlay-text cinzel-font">DESSERTS</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src={sliderImg5} alt="Slide 5" className="slide-img" />
                        <div className="overlay-text cinzel-font">SALADS</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;

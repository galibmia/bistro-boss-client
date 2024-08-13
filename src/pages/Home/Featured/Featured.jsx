import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg";
// import './Featured.css';

const Featured = () => {
    return (
        <section className='relative bg-fixed featured-item text-white py-16 px-8 bg-cover bg-center' style={{ backgroundImage: `url(${featuredImg})` }}>
            {/* Dark overlay to ensure text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 text-center mb-8">
                {/* Section Title with white text */}
                <SectionTitle
                    heading={'FEATURED ITEM'}
                    subHeading={'---Check it out---'}
                />
            </div>

            <div className='relative z-10 flex gap-8 justify-center items-center'>
                <div className=''>
                    <img src={featuredImg} alt="" className="w-96 h-auto rounded-lg shadow-lg" />
                </div>
                <div className='max-w-md'>
                    <p className="mb-2">
                        {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <h6 className="text-2xl font-bold mb-4">WHERE CAN I GET SOME?</h6>
                    <p className='text-sm mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="bg-transparent border-b-2 border-white px-6 py-2 rounded-lg hover:bg-black hover:bg-opacity-80 hover:transition-opacity hover:text-[#BB8506] transition-colors duration-1000 text-white uppercase">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;

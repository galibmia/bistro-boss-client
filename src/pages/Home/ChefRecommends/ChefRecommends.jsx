import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import cardImg from '../../../assets/home/Rectangle 5.png'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}
            >
            </SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={cardImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold my-2 text-center">Caeser Salad</h2>
                        <p className='text-center my-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={cardImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold my-2 text-center">Caeser Salad</h2>
                        <p className='text-center my-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={cardImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold my-2 text-center">Caeser Salad</h2>
                        <p className='text-center my-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;
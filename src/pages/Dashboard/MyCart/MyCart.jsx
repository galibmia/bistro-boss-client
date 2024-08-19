import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { RiDeleteBin6Line } from "react-icons/ri";


const MyCart = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <div className='mb-20'>
            <Helmet>
                <title>My Cart | Bistro Boss</title>
            </Helmet>
            <div className='mt-14 mb-24'>
                <SectionTitle
                    heading={'Wanna Add more'}
                    subHeading={'My Cart'}
                ></SectionTitle>
            </div>
            <div className='flex justify-between font-bold uppercase mb-8 mx-2'>
                <h2 className="text-3xl cinzel-font">Total Orders: {cart.length}</h2>
                <h2 className="text-3xl cinzel-font">Total Price: ${total}</h2>
                <button className='bg-[#D1A054] hover:bg-[#ecb056] font-bold text-xl uppercase py-2 px-6 text-white hover:text-black rounded-lg'>Pay</button>
            </div>
            {/* Cart display section */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054]'>
                            <tr className='text-white text-lg text-center'>
                                <th className='rounded-tl-2xl'>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th className='rounded-tr-2xl'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                cart.map((item, index) => (
                                    <tr key={item._id} className='text-center'>
                                        <td className='font-bold text-xl'>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td><div className="text-[#737373]">{item.name}</div></td>
                                        <td className="text-[#737373]">
                                            ${item.price}
                                        </td>
                                        <td><button className='bg-red-600 text-white p-3 text-2xl rounded-lg'><RiDeleteBin6Line /></button></td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
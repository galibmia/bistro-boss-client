import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from 'react-icons/ri';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'], // The key for the query
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json(); // Return the parsed JSON
        }
    });

    const handleDeleteUser = (id) => {
        // Logic for deleting a user
    }

    return (
        <div>
            <div className='mb-20'>
                <Helmet>
                    <title>All Users | Bistro Boss</title>
                </Helmet>
                <div className='mt-14 mb-24'>
                    <SectionTitle
                        heading={'Manage all users'}
                        subHeading={'How Many?'}
                    ></SectionTitle>
                </div>
                <div className='flex justify-between font-bold uppercase mb-8 mx-2'>
                    <h2 className="text-3xl cinzel-font">Total Users: {users.length}</h2>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className='bg-[#D1A054]'>
                                <tr className='text-white text-lg text-center'>
                                    <th className='rounded-tl-2xl'></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th className='rounded-tr-2xl'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr key={user._id} className='text-center'>
                                            <td className='font-bold text-xl'>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td><div className="text-[#737373]">{user.email}</div></td>
                                            <td className="text-[#737373]">{user.role}</td>
                                            <td>
                                                <button onClick={() => handleDeleteUser(user._id)} className='bg-red-600 text-white p-3 text-2xl rounded-lg'>
                                                    <RiDeleteBin6Line />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;

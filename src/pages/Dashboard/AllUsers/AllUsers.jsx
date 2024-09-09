import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'], 
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    });

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/users/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "User has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
    }


// Handle function to change the role 
    const handleChangeRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to change the role?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/users/admin/${id}`, {
                        method: 'PATCH'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Updated!",
                                    text: "User role has been updated.",
                                    icon: "success"
                                });
                        }
                    })
                }
            });
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
                                            <td className="text-2xl">{user.role === 'admin' ? 'Admin' : <button onClick={() => handleChangeRole(user._id)} className='bg-[#D1A054] w-[50px] py-3 mx-auto rounded-lg text-white'><FaUserShield className='mx-auto' /></button>}</td>
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

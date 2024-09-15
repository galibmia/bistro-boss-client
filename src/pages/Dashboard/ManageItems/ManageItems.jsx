import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {

    const axiosSecure = useAxiosSecure();
    
    const { data: menus = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menus');
            return res.data;
        }
    });


    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Send the DELETE request to the backend
                    const response = await axiosSecure.delete(`/menu/${id}`);

                    if (response.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                        // Refetch the menu items after deletion
                        refetch();
                    } else {
                        Swal.fire(
                            'Error!',
                            'Failed to delete the item.',
                            'error'
                        );
                    }
                } catch (error) {
                    Swal.fire(
                        'Error!',
                        'An error occurred while trying to delete the item.',
                        'error'
                    );
                    console.error("Error deleting item:", error);
                }
            }
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching menus: {error.message}</div>;
    }

    return (
        <div>
            <Helmet>
                <title>All Items | Bistro Boss</title>
            </Helmet>
            <div className='mt-14 mb-24'>
                <SectionTitle
                    heading={'Manage all Items'}
                    subHeading={'Hurry Up!'}
                ></SectionTitle>
            </div>

            <div className='flex justify-between font-bold uppercase mb-8 mx-2'>
                <h2 className="text-3xl cinzel-font">Total Items: {menus.length} </h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#D1A054]'>
                            <tr className='text-white text-lg text-center'>
                                <th className='rounded-tl-2xl'></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th className='rounded-tr-2xl'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map((menu, index) => (
                                    <tr key={menu._id} className='text-center'>
                                        <td className='font-bold text-xl'>{index + 1}</td>
                                        <td>
                                            <img src={menu.image} alt={menu.name} className="w-20 h-20 object-cover mx-auto rounded-md" />
                                        </td>
                                        <td><div className="text-[#737373]">{menu.name}</div></td>
                                        <td><div className="text-[#737373]">${menu.price}</div></td>
                                        <td className="text-2xl">
                                            <Link to={`/dashboard/updateItem/${menu._id}`}>
                                                <button className='bg-[#D1A054] w-[50px] py-3 mx-auto rounded-lg text-white'>
                                                    <FaEdit className='mx-auto' />
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(menu._id)} className='bg-red-600 text-white p-3 text-2xl rounded-lg'>
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
    );
};

export default ManageItems;

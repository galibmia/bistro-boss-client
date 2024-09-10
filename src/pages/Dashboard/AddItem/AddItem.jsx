import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Img_Hosting_Token;

const AddItem = () => {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const axiosSecure = useAxiosSecure();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, recipe, image: imgUrl, category, price: parseFloat(price) }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: "Success!",
                                    text: "Item added successfully.",
                                    icon: "success"
                                });
                            }
                        })
                        .catch(error => {
                            console.error("Error adding item:", error);
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to add the item. Please try again.",
                                icon: "error"
                            });
                        });
                }
            })
    };

    return (
        <div className='px-10'>
            <Helmet>
                <title>Add Item | Bistro Boss</title>
            </Helmet>
            <div className='mt-14 mb-24'>
                <SectionTitle
                    heading={"Add an Item"}
                    subHeading={"What's new?"}
                ></SectionTitle>
            </div>
            <form className="card-body bg-base-200 px-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe name <span className='text-red-600'>*</span></span>
                    </label>
                    <input type="text" placeholder="Enter Recipe Name" {...register("name", { required: true, maxLength: 50 })} className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" />
                    {errors.name?.type === "required" && (
                        <p className='text-red-600 ps-1'>Recipe Name is required</p>
                    )}
                </div>
                <div className='flex justify-between gap-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category <span className='text-red-600'> *</span></span>
                        </label>
                        <select className='py-3 px-2 rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md' {...register("category", { required: true })}>
                            <option disabled selected>Select Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Desserts</option>
                            <option value="drinks">Drinks</option>
                            <option value="offered">Offered</option>
                        </select>
                        {errors.category?.type === "required" && (
                            <p className='text-red-600 ps-1'>Category is required</p>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price<span className='text-red-600'> *</span></span>
                        </label>
                        <input type="number" placeholder="Enter Price" {...register("price", {
                            required: true,
                        })} className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" />
                        {errors.price?.type === "required" && (
                            <p className='text-red-600 ps-1'>Price is required</p>
                        )}
                    </div>

                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea {...register("recipe", { required: true })} className="textarea rounded focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md h-56 resize-none" placeholder="Recipe Details*"></textarea>
                    {errors.details?.type === "required" && (
                        <p className='text-red-600 ps-1'>Recipe Details is required</p>
                    )}
                </label>
                <div className="form-control">
                    <label className="form-control w-full max-w-xs mt-4">
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered  w-full max-w-xs focus:outline-none" />
                    </label>
                </div>
                <div className="form-control mt-2">
                    <button type='submit' className="btn text-xl w-40 rounded-none bg-custom-gradient  text-white">Add Item <ImSpoonKnife className='text-2xl' /></button>
                </div>
            </form>


        </div>
    );
};

export default AddItem;
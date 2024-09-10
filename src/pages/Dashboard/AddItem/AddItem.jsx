import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"
import { ImSpoonKnife } from "react-icons/im";

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className=''>
            <Helmet>
                <title>Add Item | Bistro Boss</title>
            </Helmet>
            <div className='mt-14 mb-24'>
                <SectionTitle
                    heading={"Add an Item"}
                    subHeading={"What's new?"}
                ></SectionTitle>
            </div>
            <form className="card-body bg-base-200" onSubmit={handleSubmit(onSubmit)}>
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
                            <option value="desserts">Desserts</option>
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
                    <button  type='submit' className="btn text-xl w-40 rounded-none bg-custom-gradient  text-white">Add Item <ImSpoonKnife className='text-2xl'/></button>
                </div>
            </form>


        </div>
    );
};

export default AddItem;
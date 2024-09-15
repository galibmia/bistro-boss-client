import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { GiWallet } from "react-icons/gi";
import {
  FaCalendarDays,
  FaCartShopping,
  FaHouse,
  FaPhoneVolume,
  FaStar,
  FaWallet,
} from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: payments = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["payments"],
    enabled: !!user?.email && localStorage.getItem("access-token") !== null,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-[40%]">
        <span className="p-4 loading loading-bars loading-lg text-center"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching menus: {error.message}</div>;
  }

  return (
    <div className="w-full mt-14">
      <Helmet>
        <title>User Home | Bistro Boss</title>
      </Helmet>
      <h1 className="text-4xl cinzel-font font-semibold">Hi, Welcome Back!</h1>
        {/* TODO: Need to add dynamic data on menu, shop and contact segment. Also need to add  review data and booking data*/}
      <div className="flex justify-between gap-6 my-20">
        <div className="w-full px-10 py-8 bg-[#BB34F5] text-white flex gap-5 items-center rounded-lg justify-center">
          <GiWallet className="text-6xl text-white" />
          <div>
            <h6 className="text-4xl font-bold">205</h6>
            <p className="text-2xl">Menu</p>
          </div>
        </div>
        <div className="w-full px-10 py-8 bg-[#FE4880] text-white flex gap-5 items-center rounded-lg justify-center">
          <FaHouse className="text-6xl text-white" />
          <div>
            <h6 className="text-4xl font-bold">50</h6>
            <p className="text-2xl">Shop</p>
          </div>
        </div>
        <div className="w-full px-10 py-8 bg-[#6AAEFF] text-white flex gap-5 items-center rounded-lg justify-center">
          <FaPhoneVolume className="text-6xl text-white font-bold" />
          <div>
            <h6 className="text-4xl font-bold">8</h6>
            <p className="text-2xl">Contact</p>
          </div>
        </div>
      </div>

      <div className="my-14 flex ">
        <div className="w-1/2 mx-auto flex flex-col items-center bg-[#FFEDD5] border-r-[3px] border-[#D1A054] rounded-l-md">
          <img
            className="w-[192px] mt-24 rounded-full border-2 border-[#D1A054]"
            src={user.photoURL}
            alt=""
          />
          <h1 className="text-3xl cinzel-font font-semibold mt-8 mb-24">
            {user.displayName}
          </h1>
        </div>
        <div className="w-1/2 ps-[15%] bg-[#FEF9C3] rounded-r-md">
          <h1 className="text-4xl cinzel-font font-semibold mt-24 mb-8">
            Your Activities
          </h1>
          <div className="">
            <p className="text-2xl text-[#0088FE] flex items-center gap-2 uppercase font-semibold cinzel-font">
              <FaCartShopping />
              Orders: {payments.length > 9 || payments.length < 1 ? payments.length : <> 0{payments.length}</> }
            </p>
            <p className="text-2xl text-[#00C4A1] flex items-center gap-2 uppercase font-semibold cinzel-font my-3">
              <FaStar />
              Reviews : 0
            </p>
            <p className="text-2xl text-[#FFBB28] flex items-center gap-2 uppercase font-semibold cinzel-font">
              <FaCalendarDays />
              Bookings : 0
            </p>
            <p className="text-2xl text-[#FF8042] flex items-center gap-2 uppercase font-semibold cinzel-font mt-3">
              <FaWallet />
              Payment : {payments.length > 9 || payments.length < 1 ? payments.length : <> 0{payments.length}</> }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

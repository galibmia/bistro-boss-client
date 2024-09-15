import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import contactImg from "../../assets/contact/banner.jpg";
import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Bistro Boss</title>
      </Helmet>
      {/* Cover section */}
      <div className="mb-20">
        <Cover
          coverImg={contactImg}
          title={"CONTACT US"}
          details={"Would you like to try a dish?"}
        ></Cover>
      </div>

      {/* Location section */}
      <div className="my-20">
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"OUR LOCATION"}
        ></SectionTitle>
      </div>

      <div className="my-20 flex gap-4">
        <div className=" w-full">
          <div className="bg-[#D1A054] p-4 flex justify-center">
            <span>
              <FaPhoneVolume className="text-6xl text-white font-bold" />
            </span>
          </div>
          <div className=" border-2 border-gray border-t-0 ">
            <div className="bg-gray-100 w-4/5 mx-auto mb-8">
              <h1 className="text-3xl font-bold text-center uppercase pt-8 ">
                Phone
              </h1>
              <p className="text-center pb-[59px] mt-4 text-xl">+88012345-678912 <br /></p>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="bg-[#D1A054] p-4 flex justify-center">
            <FaLocationDot className="text-6xl text-white font-bold" />
          </div>
          <div className=" border-2 border-gray border-t-0 ">
            <div className="bg-gray-100 w-4/5 mx-auto mb-8">
              <h1 className="text-3xl font-bold text-center uppercase pt-8 ">
                Address
              </h1>
              <p className="text-center pb-8 mt-4 text-xl">Vuter Golli, Pabla, Daulatpur, 
                <br />
                Khulna-9202, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="bg-[#D1A054] p-4 flex justify-center">
            <FaClock className="text-6xl text-white font-bold" />
          </div>
          <div className=" border-2 border-gray border-t-0">
            <div className="bg-gray-100 w-4/5 mx-auto mb-8">
              <h1 className="text-3xl font-bold text-center uppercase pt-8 ">
              WORKING HOURS
              </h1>
              <p className="text-center pb-8 mt-4 text-xl">Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

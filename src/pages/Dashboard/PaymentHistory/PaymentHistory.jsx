import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
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

  console.log(payments);

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
    <div className="min-h-screen">
      <Helmet>
        <title>Payment History | Bistro Boss</title>
      </Helmet>
      <div className="mt-16 mb-24">
        <SectionTitle
          heading={"Payment History"}
          subHeading={"At a Glance"}
        ></SectionTitle>
      </div>

      <div className="flex justify-between font-bold uppercase mx-2">
        <h2 className="text-3xl cinzel-font mb-8">
          Total Payments: {payments.length}{" "}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-[#D1A054]">
              <tr className="text-white text-lg text-center">
                <th className="rounded-tl-2xl">EMAIL</th>
                <th>CATEGORY</th>
                <th>TOTAL PRICE</th>
                <th className="rounded-tr-2xl">PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id} className="text-center">
                  <td>
                    <div className="text-[#737373]">{payment.email}</div>
                  </td>
                  <td>
                    <div className="text-[#737373]">Food Order</div>
                  </td>
                  <td>
                    <div className="text-[#737373]">${payment.price}</div>
                  </td>
                  <td>
                    <div className="text-[#737373]">
                      {new Date(payment.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

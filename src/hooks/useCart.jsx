import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const axiosSecure = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.data;
        },
    })

    return [cart, refetch]

}

export default useCart;
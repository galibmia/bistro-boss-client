import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const { user } = useAuth();

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
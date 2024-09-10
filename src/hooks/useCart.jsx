import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
  const { user, loading } = useAuth();
  console.log(loading)
  const axiosSecure = useAxiosSecure(); // Use the custom axios instance

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    enabled: !!user?.email && localStorage.getItem('access-token') !== null, // Check both user email and token
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user.email}`);
      return response.data;
    }
  });

  return [cart, refetch];
};

export default useCart;

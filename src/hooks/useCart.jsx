import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure(); // Use the custom axios instance

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user.email}`);
      return response.data;
    },
    enabled: !!user?.email, // Ensure query only runs when user email exists
  });

  return [cart, refetch];
};

export default useCart;

import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', 
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();



  useEffect(() => {
    // Request interceptor to inject authorization header
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access-token');
        if (!token) {
          console.error("No token found in localStorage at request time");
        }
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle 401 and 403 errors
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          try {
            await logOut(); // Call logOut method from AuthContext
            navigate('/login'); // Redirect to login page
          } catch (logoutError) {
            console.error('Logout failed:', logoutError);
          }
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors when the component is unmounted
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate, axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;

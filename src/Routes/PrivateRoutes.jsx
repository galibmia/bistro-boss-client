import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();
    console.log(loading)

    if (loading) {
        return <div className='flex justify-center mt-[250px]'>
            <span className='loading loading-infinity loading-lg' >
            </span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;
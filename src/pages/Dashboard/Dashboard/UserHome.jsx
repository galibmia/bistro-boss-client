import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className='w-full mt-14'>
            <Helmet>
                <title>User Home | Bistro Boss</title>
            </Helmet>
            <h1 className='text-4xl '>Hi, Welcome Back <span className='font-semibold'>{user.displayName}</span></h1>
        </div>
    );
};

export default UserHome;
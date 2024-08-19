import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
            <Helmet>
                <title>My Cart | Bistro Boss</title>
            </Helmet>
            <SectionTitle
                heading={'Wanna Add more'}
                subHeading={'My Cart'}
            ></SectionTitle>
            <h2>You have {cart? cart.length : 'no'} items on your cart.</h2>
        </div>
    );
};

export default MyCart;
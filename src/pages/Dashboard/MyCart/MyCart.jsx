import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
            <SectionTitle
                heading={'Wanna Add more'}
                subHeading={'My Cart'}
            ></SectionTitle>
            <h2>You have {cart? cart.length : 'no'} items on your cart.</h2>
        </div>
    );
};

export default MyCart;
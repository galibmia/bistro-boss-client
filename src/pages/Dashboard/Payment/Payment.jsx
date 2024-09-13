import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const price = parseFloat(total.toFixed(2));

    return (
        <div className='mt-56'>
            <Helmet>
                <title>Payment | Bistro Boss</title>
            </Helmet>
            <h1 className='text-4xl uppercase text-center mb-32'>Payment</h1>
            <p className='text-center my-8'>You have to pay ${price}</p>

            <div className='mt-8 w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
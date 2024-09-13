import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);

const Payment = () => {
    return (
        <div className='mt-56'>
            <Helmet>
                <title>Payment | Bistro Boss</title>
            </Helmet>
            <h1 className='text-4xl uppercase text-center mb-32'>Payment</h1>

            <div className='mt-8 w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cart, price }) => {

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(data => {
                    setClientSecret(data.data.clientSecret);
                })
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }


        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
        }
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedResult.insertedId) {
                        Swal.fire({
                            title: "Success",
                            text: 'Payment Successfully',
                            icon: "success"
                        });
                        navigate('/')
                    }
                })
        }
    }

    if (cardError) {
        Swal.fire({
            title: "Error!",
            text: cardError,
            icon: "error"
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn bg-[#570DF8] text-white hover:bg-[#7637ff] w-1/2 ml-40 mt-14' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
import React, { useEffect, useRef, useState } from 'react';
import backgroundImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import './Login.css'
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className='flex items-center justify-center' style={{ backgroundImage: `url(${backgroundImg})`, height: '100vh' }}>
            <div className='max-w-screen-xl mx-auto shadow-custom'>
                <div className="p-14">
                    <div className="hero-content flex-col lg:flex-row gap-5">
                        <div className="text-center lg:text-left">
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card w-full max-w-sm shrink-0 ">
                            <h1 className='text-center text-3xl font-bold'>Login</h1>
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter Your Email" name='email' className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter Your Password" name='password' className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" required />
                                    <label className="label">
                                        <Link to={''} className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <LoadCanvasTemplate />
                                    <input type="text" placeholder="Type here" ref={captchaRef} className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" required />
                                    <button
                                        disabled={!disabled}
                                        className={`bg-gray-200 hover:bg-gray-300 w-4/12 mt-2 rounded-md ${!disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={handleValidateCaptcha}
                                    >
                                        Validate
                                    </button>
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={disabled} className="btn bg-[#D1A054B2] hover:bg-[#fcb751b2] text-white p-2">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
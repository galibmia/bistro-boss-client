import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png';
import backgroundImg from '../../assets/others/authentication.png'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const { loginWithGoogle, createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSingUp = (event) => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value


        createUser(email, password)
            .then(result => {
                updateUser(name, photoURL)
                    .then()
                    .catch((err) => {
                        const message = err.message;
                        Swal.fire({
                            title: "Error!!",
                            text: message,
                            icon: "error"
                        });
                    })
                Swal.fire({
                    title: "Greet job!",
                    text: "Your account create successfully",
                    icon: "success"
                });
                navigate('/')
            })
            .catch(err => {
                const message = err.message;
                Swal.fire({
                    title: "Error!!",
                    text: message,
                    icon: "error"
                });
            })
        form.reset();
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className='flex items-center justify-center' style={{ backgroundImage: `url(${backgroundImg})`, height: '100vh' }}>
            <div className='max-w-screen-xl mx-auto shadow-custom'>
                <div className="p-10">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                        <div className="text-center lg:text-left">
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card w-full max-w-sm shrink-0 ">
                            <h1 className='text-center text-3xl font-bold'>Sign Up</h1>
                            <form className="card-body" onSubmit={handleSingUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Name" name='name' className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" required />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Photo URL" name='photoURL' className="input rounded-none focus:ring-0 focus:border-0 focus:outline-none focus:shadow-md" required />
                                </div>
                                <div className="form-control mt-2">
                                    <button type='submit' className="btn bg-[#D1A054B2] hover:bg-[#fcb751b2] text-white p-2">Sign Up</button>
                                </div>
                                <div className='mt-4'>
                                    <Link to={'/login'} className="text-[#c28934] hover:text-[#cc9441] ml-8">Already have an account? <span className='font-semibold'>Login Now</span></Link>
                                    <span className='text-center text-gray-500 flex justify-center mb-2'>Or</span>
                                    <button onClick={handleLoginWithGoogle} className='w-full btn btn-outline border-red-600 text-red-600 hover:border-red-600  hover:bg-red-600 hover:transition-opacity transition-colors duration-500'>Login With Google</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
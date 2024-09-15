import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { MdLogout } from "react-icons/md";
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
    const { user, logOut } = useAuth();

    const [cart] = useCart();
    const [isAdmin] = useAdmin()


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }

    const navOptions = <>
        <li>
            <ActiveLink to={'/'} className='font-bold md:text-white'>HOME</ActiveLink>
        </li>
        <li>
            <ActiveLink to={'/contact'} className='font-bold md:text-white'>CONTACT US</ActiveLink>
        </li>
        <li>
            {
                isAdmin ? <ActiveLink to={'/dashboard/adminHome'} className='font-bold md:text-white'>DASHBOARD</ActiveLink> 
                : 
                <ActiveLink to={'/dashboard/home'} className='font-bold md:text-white'>DASHBOARD</ActiveLink>
            }
        </li>
        <li>
            <ActiveLink to={'/menu'} className='font-bold md:text-white'>OUR MENU</ActiveLink>
        </li>
        <li>
            <ActiveLink to={'/order/salad'} className='font-bold md:text-white'>ORDER</ActiveLink>
        </li>
        <li>
            <Link to='/dashboard/myCart'>
                <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 md:mt-1 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item bg-red-700 text-white border-red-700">{cart?.length}</span>
                </div>
            </Link>
        </li>
        {
            user ? <>
                <li>
                    <img
                        alt={user.displayName}
                        className='w-6 h-6 rounded-full'
                        src={user?.photoURL} />
                </li>
                <li>
                    <button onClick={handleLogOut} className='font-bold hidden md:block md:text-white uppercase'><MdLogout className='text-2xl mt-1' /></button>
                </li>
                <li>
                    <button onClick={handleLogOut} className='font-bold md:hidden text-white uppercase'>LOG OUT</button>
                </li>
            </> :
                <li>
                    <Link to={'/login'} className='font-bold md:text-white'>LOGIN</Link>
                </li>
        }

    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-50 bg-opacity-30 bg-[#15151580] py-4">
                <div className="w-[60%] md:w-[70%] justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-opacity-30 bg-[#15151580] rounded-box z-[1] mt-3 w-64 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="md:ml-12"><span className='cinzel-font text-xl md:text-[32px] font-black text-white '>BISTRO BOSS</span> <br /> <span className='cinzel-font text-xl md:text-2xl text-white tracking-widest md:tracking-custom'>Restaurant</span></Link>

                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex lg:pr-8">
                        <ul className="flex items-center gap-5">
                            {navOptions}
                        </ul>
                        <div className="w-10">

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NavBar;
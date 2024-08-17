import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login');
    const isRegister = location.pathname.includes('/register');

    const hideNavAndFooter = isLogin || isRegister;
    return (
        <div className={!hideNavAndFooter ? 'max-w-screen-xl mx-auto' : ''}>
            {!hideNavAndFooter && <NavBar />}
            <Outlet />
            {!hideNavAndFooter && <Footer />}
        </div>
    );
};

export default Main;
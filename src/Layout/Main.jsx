import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login');
    return (
        <div className={!isLogin ? 'max-w-screen-xl mx-auto' : ''}>
            {!isLogin && <NavBar />}
            <Outlet />
            {!isLogin && <Footer />}
        </div>
    );
};

export default Main;
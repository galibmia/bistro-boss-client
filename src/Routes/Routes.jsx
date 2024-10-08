import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import PrivateRoutes from './PrivateRoutes';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddItem from '../pages/Dashboard/AddItem/AddItem';
import AdminRoutes from './AdminRoutes';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../pages/Dashboard/UpdateItem/UpdateItem';
import Payment from '../pages/Dashboard/Payment/Payment';
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';
import UserHome from '../pages/Dashboard/UserHome/UserHome';
import Contact from '../pages/Contact/Contact';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'home',
        element: <UserHome></UserHome>
      },
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },


      
      // Admin Routes
      {
        path: 'adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: 'allUsers',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'addItem',
        element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>
      }
    ]
  }
]);
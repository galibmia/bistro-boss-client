import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive
                    ? "text-[#EEFF25]"
                    : "text-white"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
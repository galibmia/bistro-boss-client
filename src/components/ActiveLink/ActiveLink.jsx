import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-[#EEFF25]"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
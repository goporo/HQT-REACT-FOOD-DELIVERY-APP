import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const user = localStorage.getItem("MAKH") //useAuth((state) => state.user);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;

}

export default Protected
import React, {useContext} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import AuthContext from "../context/auth-context";

const ProtectedRoutes = () => {
    const {isLoggedIn} = useContext(AuthContext)

    if (!isLoggedIn) return <Navigate replace to='/login'/>

    return <Outlet/>
};

export default ProtectedRoutes;
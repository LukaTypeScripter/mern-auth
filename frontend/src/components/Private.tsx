import { Navigate,Outlet } from "react-router-dom";
import {useSelector} from 'react-redux'

import React from 'react'
import { AuthState } from "../slices/authSlice";

function Private() {
    const { userInfo } = useSelector((state: { auth: AuthState }) => state.auth);
    return userInfo ? <Outlet/> : <Navigate to={"/login"} replace/>
}

export default Private

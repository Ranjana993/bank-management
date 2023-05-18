import React from 'react'
import { Navigate } from 'react-router-dom';

const Public = ({ children }) => {
    if (localStorage.getItem("token")) {
        <Navigate to={"/login"} />
    }
    else {
        return children
    }
}

export default Public
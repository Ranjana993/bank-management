import React from 'react'
// import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    // const dispatch = useDispatch()

    if (localStorage.getItem("token")) {
        return children;
    }
    else {
        return (
            <Navigate to={"/login"} />
        )
    }
}
export default ProtectedRoute
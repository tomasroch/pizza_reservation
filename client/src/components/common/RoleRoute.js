import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Navigate, Outlet } from "react-router-dom";

function RoleRoute({ roles }) {
    const { currentUser } = useContext(AppContext)

    return (
        !currentUser ?
            <Navigate to="/login" replace />
            : roles.includes(currentUser.role) ?
                <Outlet /> :
                <Navigate to="/unauthorized" replace />
    )
}

export default RoleRoute
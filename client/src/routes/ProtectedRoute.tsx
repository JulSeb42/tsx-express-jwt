/*=============================================== ProtectedRoute ===============================================*/

import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { PageLoading } from "tsx-library-julseb"

import { AuthContext, ContextType } from "../context/auth"

interface Props {
    children: any
    redirectTo?: string
}

const ProtectedRoute = ({ children, redirectTo = "/login" }: Props) => {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as ContextType

    return isLoading ? (
        <PageLoading stopScrolling />
    ) : isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}

export default ProtectedRoute

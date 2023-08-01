import React, { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../shared/lib/context";

interface ProtectedRouteProps {
    children: any;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const location = useLocation();
    const {isAuth} = useContext(AuthContext);
    
    if (!isAuth) {
        return <Navigate to='/sign-in' state={{from: location}}/>
    }
    return children
}

import React, {useContext} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context";

const RequireAuth = ({children}) => {
    //check authorization
    const { isAuth } = useContext(AuthContext);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to="/sign-in" state={{from: location}}/>
    }

    return children
}

export default RequireAuth;
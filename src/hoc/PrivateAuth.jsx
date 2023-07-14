import React, {useContext} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context";

const PrivateAuth = ({children}) => {
    //check authorization
    const { isAuth } = useContext(AuthContext);
    const location = useLocation();

    console.log(isAuth);

    if (!isAuth) {
        return <Navigate to="/sign-in" state={{from: location}}/>
    }

    return children
}

export default PrivateAuth;
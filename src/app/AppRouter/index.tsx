import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from "../../shared/lib/context";
import { privateRoutes, publicRoutes, IRoute } from "../providers/withRouter";
import Layout from '../../pages/layouts/Layout';
import HomePage from '../../pages/components/HomePage';
import Loader from "../../shared/UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return (
            <div className="error">
                <Loader />
            </div>
        )
    }

    return (
        isAuth 
            ?
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>} />
                        {privateRoutes.map((route: IRoute) =>
                            <Route path={route.path} element={<route.component/>} key={route.path} />
                        )}
                        <Route path="about" element={<Navigate to="/about-us" replace/>} />
                        <Route path="sign-in" element={<Navigate to="/profile" replace />} />
                        <Route path="sign-up" element={<Navigate to="/profile" replace />} />
                    </Route>
                </Routes>
            :
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>} />
                        {publicRoutes.map((route: IRoute) => 
                            <Route path={route.path} element={<route.component/>} key={route.path} />
                        )}
                        <Route path="about" element={<Navigate to="/about-us" replace />} />
                        <Route path="profile" element={<Navigate to="/sign-in" replace />} />
                    </Route>
                </Routes>
    )
}

export default AppRouter;
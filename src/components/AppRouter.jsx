import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/routes";
import Layout from '../tpl/layouts/Layout';
import HomePage from './pages/HomePage';

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        isAuth 
            ?
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>} />
                        {privateRoutes.map(route =>
                            <Route path={route.path} element={route.component} key={route.path} />
                        )}
                        <Route path="about" element={<Navigate to="/about-us" replace/>} />
                    </Route>
                </Routes>
            :
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>} />
                        {publicRoutes.map(route =>
                            <Route path={route.path} element={route.component} key={route.path} />
                        )}
                        <Route path="about" element={<Navigate to="/about-us" replace />} />
                    </Route>
                </Routes>
    )
}

export default AppRouter;
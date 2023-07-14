import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../UI/loader/Loader";

const NotFoundPage = () => {
    const location = useLocation();
    const page = location.pathname || '/';
        
    return (
        (page === '/sign-in') || (page === '/sign-up') || (page === '/profile')
        ?
            <div className="error">
                <Loader />
            </div>
        :
            <div className="error">
                <div className="container">
                    <h1 className="error__title">Страницы не существует!</h1>
                    <Link className="error__link" to="/">перейти на главную</Link>
                </div>
            </div>
    )
}

export default NotFoundPage;
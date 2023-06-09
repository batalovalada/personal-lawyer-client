import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="error">
            <h1 className="error__title">Страницы не существует!</h1>
            <Link className="error__link" to="/">перейти на главную</Link>
        </div>
    )
}

export default NotFoundPage;
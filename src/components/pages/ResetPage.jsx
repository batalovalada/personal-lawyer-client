import React from "react";
import ResetForm from "../ResetForm";
import Intro from "../Intro";
import ScrollToTop from "../../scrollToTop";

const ResetPage = () => {
    ScrollToTop();
    return (
        <div className="page">
            <Intro title='Сброс пароля' />
            <div className="container">
                <ResetForm/>
            </div>
        </div>
    )
}

export default ResetPage;
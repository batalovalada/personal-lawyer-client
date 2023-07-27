import React from "react";
import ResetForm from "../ResetForm";
import Intro from "../Intro";
import {ScrollToTop} from "../../scroll";

const ResetPage: React.FC = () => {
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
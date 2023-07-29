import React from "react";
import {ResetForm} from "../../features/AuthForms";
import {Intro} from "../../entities/Intro";
import {ScrollToTop} from "../lib/scroll";

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
import React from "react";
import {SignUpForm} from "../../features/AuthForms";
import {Intro} from "../../entities/Intro";
import {ScrollToTop} from "../lib/scroll";

const SignUpPage: React.FC = () => {
    ScrollToTop();
    return (
        <div className="page">
            <Intro title='Регистрация' />
            <div className="container">
                <SignUpForm/>
            </div>
        </div>
    )
}

export default SignUpPage;
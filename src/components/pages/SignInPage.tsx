import React from "react";
import SignInForm from "../SignInForm";
import Intro from "../Intro";
import { useLocation} from "react-router-dom";
import {ScrollToTop} from "../../scroll";

const SignInPage: React.FC = () => {
    ScrollToTop();

    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/'

    return (
        <div className="page">
            <Intro title='Вход' />
            <div className="container">
                <SignInForm isModal={false} active={true} setActive={() => {}} fromPage={fromPage}/>
            </div>
        </div>
    )
}

export default SignInPage;
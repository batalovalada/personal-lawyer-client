import React from "react";
import SignInForm from "../SignInForm";
import Intro from "../Intro";
import { useLocation} from "react-router-dom";

const SignInPage = () => {
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/'
    return (
        <div className="page">
            <Intro title='Вход' />
            <div className="container">
                <SignInForm modal={false} fromPage={fromPage}/>
            </div>
        </div>
    )
}

export default SignInPage;
import React from "react";
import SignInForm from "../SignInForm";
import Intro from "../Intro";

const SignInPage = () => {
    return (
        <div className="page">
            <Intro title='Вход' />
            <div className="container">
                <SignInForm/>
            </div>
        </div>
    )
}

export default SignInPage;
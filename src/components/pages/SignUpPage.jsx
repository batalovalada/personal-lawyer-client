import React from "react";
import SignUpForm from "../SignUpForm";
import Intro from "../Intro";

const SignUpPage = () => {
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
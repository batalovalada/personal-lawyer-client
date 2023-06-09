import React from "react";
import Intro from "../components/Intro";
import Staff from "../components/Staff";

const ContactsPage = () => {
    return (
        <div className="page">
            <Intro title={'Контакты'} />
            <Staff />
        </div>
    )
}

export default ContactsPage;
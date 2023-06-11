import React from "react";
import Intro from "../components/Intro";
import Contacts from "../components/Contacts";
import QuestionsForm from "../components/QuestionsForm";

const ContactsPage = () => {
    return (
        <div className="page">
            <Intro title='Контакты' />
            <Contacts />

            <div className="container">
                <div className="contacts__inner">
                    <QuestionsForm title="Обратная связь" />
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;
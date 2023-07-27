import React from "react";
import Intro from "../Intro";
import Contacts from "../Contacts";
import QuestionsForm from "../QuestionsForm";
import {ScrollToTop} from "../../scroll";

const ContactsPage: React.FC = () => {
    ScrollToTop();
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
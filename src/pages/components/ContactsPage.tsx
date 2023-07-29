import React from "react";
import {Intro} from "../../entities/Intro";
import {Contacts} from "../../widgets/Contacts";
import {QuestionsForm} from "../../features/QuestionsUser";
import {ScrollToTop} from "../lib/scroll";

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